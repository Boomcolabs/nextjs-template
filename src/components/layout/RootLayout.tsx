import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import withAuth from "@/components/hoc/withAuth";
import SideBarMenu from "@/components/SideBar/SideBarMenu";
import { getPx } from "@/utils/helper";
import SideBarFooter from "../SideBar/SideBarFooter";
import SideBarHeader from "../SideBar/SideBarHeader";
import { useRouter } from "next/router";

function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [opened, { toggle }] = useDisclosure(false);

  if (router.pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <>
      <AppShell
        transitionDuration={500}
        withBorder={false}
        transitionTimingFunction="ease"
        header={{
          height: 50,
          collapsed: true,
        }}
        navbar={{
          width: `max(272px, ${getPx(272)})`,
          breakpoint: 0,
          collapsed: {
            desktop: !desktopOpened,
            mobile: !mobileOpened,
          },
        }}
      >
        <AppShell.Navbar bg={"white"}>
          <SideBarHeader />
          <SideBarMenu />
          <SideBarFooter />
          <AppShell.Section></AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main bg={"disable"} className="flex flex-col">
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default withAuth(RootLayout);
