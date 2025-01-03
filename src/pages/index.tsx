import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";
import RootLayout from "@/components/layout/RootLayout";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();
  return (
    <RootLayout>
      <main className={inter.className}>
        <h1 className="text-tblue">
          Blank NextJS project template using TailwindCSS + Mantine
        </h1>
        <div className="flex flex-col">
          <a href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts">
            Next JS docs
          </a>
          <a href="https://tailwindcss.com/docs/editor-setup">
            TailwindCSS docs and Editor setups
          </a>
          <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
            VS code Tailwind Intellisense
          </a>

          <a href="https://mantine.dev">Mantine docs</a>
        </div>
        <Button
          onClick={() => router.push("/example")}
          color="primary"
          className="mt-5"
        >
          Go to example page
        </Button>
      </main>
    </RootLayout>
  );
}
