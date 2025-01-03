import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "mantine-form-zod-resolver";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { z } from "zod";
import {
  Button,
  LoadingOverlay,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import PasswordToggleIcon from "@/components/PasswordToggleIcon/PasswordToggleIcon";
import { loginAdmin } from "@/lib/api";
import { loginUserAction } from "@/store/authSlice";
import { RootState } from "@/store/store";

const schema = z.object({
  username: z.string({ message: "Username is required" }),
  password: z.string().min(6, { message: "Password is too short" }),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
  );

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      console.log(data);
      dispatch(loginUserAction(data.result));
      router.push("/");
    },
    onError: (error) => {
      form.setFieldError("username", "Invalid username or password");
      form.setFieldError("password", "Invalid username or password");
    },
  });

  useEffect(() => {
    const localStorageToken = localStorage.getItem("user");
    // Check authentication via Redux or localStorage
    if (isAuthenticated || localStorageToken) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  function handleSubmit(values: (typeof form)["values"]) {
    console.log(values);
    mutation.mutate({ username: values.username, password: values.password });
  }
  return (
    <div className="flex h-screen justify-center bg-gradient-to-b from-[#EFF5FF] to-[#F5F5F5]">
      <div className="relative mt-[10vh] flex h-fit w-[414px] flex-col rounded-xl bg-white p-4xl shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src={"/images/logo.png"}
            alt="logo"
            className="h-auto w-[94px]"
          />
          <p className="py-4xl text-3xl font-bold">Admin portal</p>
        </div>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-md">
            <TextInput
              label="Username"
              placeholder="Your username"
              withAsterisk={false}
              onClick={() => form.clearFieldError("username")}
              withErrorStyles={false}
              required
              key={form.key("username")}
              {...form.getInputProps("username")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              type="password"
              onClick={() => form.clearFieldError("password")}
              withAsterisk={false}
              required
              key={form.key("password")}
              visibilityToggleIcon={PasswordToggleIcon}
              {...form.getInputProps("password")}
            />
          </div>
          <div className="w-full flex">
            <Button type="submit" className="my-4xl flex-1">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 flex flex-col items-center">
          <Text>Help contact</Text>
          <Text c={"primary"} fw={"bold"}>
            master@blueship.com
          </Text>
        </div>
        <LoadingOverlay visible={mutation.isPending} />
      </div>
    </div>
  );
}
