import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Box, TextInput, Checkbox, Center } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
function Mantine() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        className={inter.className}
      >
        {/* Modal content */}
        <Box mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <Checkbox
              mt="md"
              label="I agree to sell my privacy"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Center mt="md">
              <Button type="submit" className="bg-blue-500">
                Submit
              </Button>
            </Center>
          </form>
        </Box>
      </Modal>

      <Center>
        <Button color="primary" className="bg-blue-500 mt-5" onClick={open}>
          Open modal
        </Button>
      </Center>
    </>
  );
}

export default Mantine;
