import FeatherIcon from "feather-icons-react";
import { FaCity, FaUniversity, FaWonSign } from "react-icons/fa";
import { Anchor, Button, Checkbox, Select } from "@mantine/core";
import krFlag from "@/assets/kr-flag.png";
import Container from "@/components/Container/Container";
import CVItem from "@/components/CVItem/CVItem";
import { statusPicker } from "@/constants";
import { iconSize } from "@/theme";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EmployeeProfilePage() {
  const router = useRouter();
  const uid = router.query.uid;
  // fetch data

  return (
    <>
      <Container>
        <div>Employee profile {uid}</div>

        <div className="flex items-center gap-5 p-2">
          <div className="flex flex-1 items-center gap-5">
            <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-[32px]">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="avatar"
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold leading-[44px]">
                  Kim Soo Hyun
                </p>
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
          <Link href="/user-management/employee">
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
                  <FeatherIcon icon="user" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Gender</p>
                  <p className="font-semibold">Male</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="calendar" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Year of birth</p>
                  <p className="font-semibold">1990 (32yrs)</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                  <FeatherIcon icon="map-pin" size={iconSize.xs} />
                </div>
                <div>
                  <p className="text-grey mb-1">Home address</p>
                  <p className="font-semibold">Location</p>
                </div>
              </div>
            </div>

            <h2 className="mt-7 text-lg font-bold">Account settings</h2>
            <div className="mt-6 flex flex-col gap-6">
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

              <div className="flex justify-between gap-8">
                <div>
                  <p className="font-bold">Share contact</p>
                  <p className="text-grey text-xs">
                    We help you to connect with employers and enhance job
                    opportunities
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>

              <div className="flex items-center justify-between gap-8">
                <p className="font-bold">Account status</p>
                <Select
                  placeholder="Status"
                  data={statusPicker}
                  className="w-32"
                />
              </div>
            </div>
          </div>

          <div className="basis-3/4">
            {/* Work preference */}
            <div className="h-fit rounded-[20px] bg-white p-7">
              <h2 className="text-lg font-bold">Work Preference</h2>
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="star" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Career Level</p>
                    <p className="font-semibold">Senior</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FaWonSign size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Annual Salary</p>
                    <p className="font-semibold">100,000 - 300,000</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="map-pin" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Preferred region</p>
                    <p className="font-semibold">Jeju Island, Ildodong 1</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="star" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Language skills</p>
                    <div className="flex flex-row gap-3">
                      <div className="border-gray w-11 overflow-hidden rounded-lg border">
                        <img src={"/images/kr-flag.png"} alt="kr-flag" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="briefcase" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Job Type</p>
                    <div className="rounded-lg bg-disable px-3 py-1">
                      Fulltime
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
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

            {/* Profile */}
            <div className="mt-6 h-fit rounded-[20px] bg-white p-7">
              <h2 className="text-lg font-bold">Profesional Profile</h2>
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="link" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Portfolio</p>
                    <Anchor
                      className="text-blue font-semibold"
                      underline="never"
                    >
                      https://myportfolio.com.kr
                    </Anchor>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="star" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Visa status</p>
                    <p className="font-semibold">E1</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="calendar" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="text-grey mb-1">Year of Experience</p>
                    <p className="font-semibold">3</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-disable p-5">
                <p className="font-bold">Project Manager</p>
                <span className="text-grey text-xs">
                  Strong communicator with expertise in risk management and
                  stakeholder collaboration.
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
                <CVItem />
              </div>
            </div>

            {/* Work experience */}
            <div className="mt-6 h-fit rounded-[20px] bg-white p-7">
              <h2 className="text-lg font-bold">Profesional Profile</h2>
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FeatherIcon icon="briefcase" size={iconSize.xs} />
                  </div>
                  <div>
                    <p className="font-semibold">UI/UX Designer</p>
                    <p className="text-xs">
                      <span className="text-black">Netflix </span>
                      <span className="text-grey">(Dec 23 - Now)</span>
                    </p>
                    <p className="text-grey text-xs">California, US</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-6 h-fit rounded-[20px] bg-white p-7">
              <h2 className="text-lg font-bold">Education</h2>
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="text-greyIcon flex h-10 min-w-10 items-center justify-center rounded-lg bg-disable">
                    <FaUniversity
                      size={iconSize.xs}
                      className="h-4 w-4 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Computer Science</p>
                    <p className="text-xs">
                      <span className="text-black">Indonesia University </span>
                      <span className="text-grey">(2016 - 2020)</span>
                    </p>
                    <p className="text-grey text-xs">Bachelor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
