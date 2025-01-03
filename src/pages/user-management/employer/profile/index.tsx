import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { FaCity } from "react-icons/fa";
import { Anchor, Button, Checkbox, Drawer, Select } from "@mantine/core";
import Container from "@/components/Container/Container";
import { statusPicker } from "@/constants";
import { iconSize } from "@/theme";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EmployerProfilePage() {
  const router = useRouter();
  const uid = router.query.uid;

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Container>
        <div>Breadcrumbs {uid}</div>

        {/* Header */}
        <div className="flex items-center gap-5 p-2">
          <div className="flex flex-1 items-center gap-5">
            <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-[32px]">
              <img src={"/images/kr-flag.png"} alt="kr-flag" />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold leading-[44px]">Boomco</p>
                <div className="border-gray w-11 overflow-hidden rounded-lg border">
                  <img src={"/images/kr-flag.png"} alt="kr-flag" />
                </div>
              </div>
              <div className="text-grey flex items-center gap-3">
                <span>#UID92642002716</span>
                <FeatherIcon
                  icon="copy"
                  size={iconSize.xs}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <Link href="/user-management/employer">
            <Button
              size="md"
              leftSection={<FeatherIcon icon="arrow-left" size={iconSize.sm} />}
              variant="default"
              style={{ fontFamily: "inherit", fontSize: "16px" }}
            >
              Back to list
            </Button>
          </Link>
        </div>

        {/* Content */}
        <div className="mb-6 mt-5 flex gap-6">
          {/* Account info */}
          <div className="h-fit basis-1/4 rounded-[20px] bg-white p-7">
            <h2 className="text-lg font-bold">Account information</h2>
            <div className="border-stokeGrey mt-6 flex flex-col gap-6 border-b pb-7">
              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="mail" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Email</p>
                  <Anchor className="text-blue font-semibold" underline="never">
                    username@gmail.com
                  </Anchor>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="phone" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Phone number</p>
                  <p className="font-semibold">01010100101011</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="clock" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Joined since</p>
                  <p className="font-semibold">Dec 12, 2004</p>
                </div>
              </div>
            </div>

            <h2 className="mt-7 text-lg font-bold">Account settings</h2>
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex justify-between gap-8">
                <div>
                  <p className="font-bold">Verify this company</p>
                  <p className="text-grey text-xs">
                    This company is fully registered business!
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex justify-between gap-8">
                <div>
                  <p className="font-bold">Get notification</p>
                  <p className="text-grey text-xs">
                    This company will get notice about all the actions and
                    promotion of Blueship
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between gap-8">
                <p className="font-bold">Company status</p>
                <Select
                  placeholder="Status"
                  data={statusPicker}
                  className="w-32"
                />
              </div>
            </div>
          </div>

          {/* Company info */}
          <div className="h-fit basis-3/4 rounded-[20px] bg-white p-7">
            <h2 className="text-lg font-bold">Company information</h2>
            <div className="mt-6 rounded-xl bg-disable p-5">
              <p className="font-bold">About company</p>
              <span className="text-grey text-xs">
                This is company description. Strong communicator with expertise
                in risk management and stakeholder collaboration.
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="phone" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Phone number</p>
                  <p className="font-semibold">(+010) 7 35 55 31 15</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="mail" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Email</p>
                  <Anchor className="text-blue font-semibold" underline="never">
                    username@gmail.com
                  </Anchor>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="link" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Website</p>
                  <Anchor className="text-blue font-semibold" underline="never">
                    https://boomco.com.kr
                  </Anchor>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="briefcase" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Business Registration Number</p>
                  <p className="mb-2 font-semibold">84639273282</p>
                  <Button
                    size="sm"
                    variant="default"
                    style={{ fontFamily: "inherit" }}
                    onClick={() => setIsOpenDrawer(true)}
                  >
                    <span className="text-blue text-sm font-semibold">
                      View photo
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="map-pin" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Location</p>
                  <p className="font-semibold">Seoul, Korea</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="users" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Company size</p>
                  <p className="font-semibold">10-50</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                <FaCity size={iconSize.xs} />
              </div>
              <div>
                <p className="text-grey mb-1">Industry</p>
                <div className="rounded-lg bg-disable px-3 py-1">
                  Agriculture
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Drawer
        opened={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        position="right"
        size="lg"
        title={<span className="font-semibold">Image preview</span>}
      >
        Image
      </Drawer>
    </>
  );
}
