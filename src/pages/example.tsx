import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, Box, TextInput, Checkbox } from "@mantine/core";
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

            <Group position="right" mt="md">
              <Button type="submit" className="bg-blue-500">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>

      <Group position="center">
        <Button color="violet" className="bg-blue-500 mt-5" onClick={open}>
          Open modal
        </Button>
      </Group>
    </>
  );
}

export default Mantine;
