import React from "react";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/router";
import { iconSize } from "@/theme";

const SideBarMenuItems: SideBarMenuItemProps[] = [
  {
    label: "User Management",
    icon: "users",
    link: "/user-management",
    subMenu: [
      {
        label: "Employer Management",
        link: "/user-management/employer",
      },
      {
        label: "Employee Management",
        link: "/user-management/employee",
      },
    ],
  },
  {
    label: "Content Management",
    icon: "file-text",
    link: "/content-management",
    subMenu: [
      {
        label: "Forum",
        link: "/content-management/forum",
      },
      {
        label: "Real Estate",
        link: "/content-management/real-estate",
      },
      {
        label: "Job Posting",
        link: "/content-management/job-posting",
      },
    ],
  },
  {
    label: "Notice Board",
    icon: "clipboard",
    link: "/notice-board",
  },
];

type SideBarMenuItemProps = {
  label: string;
  icon: string;
  link: string;
  subMenu?: Omit<SideBarMenuItemProps, "icon">[];
};

const isActiveLink = (
  pathname: string,
  link: string,
  subMenu?: Omit<SideBarMenuItemProps, "icon">[]
) => {
  return (
    pathname.startsWith(link) ||
    (subMenu && subMenu.some((item) => pathname.startsWith(item.link)))
  );
};

const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({
  label,
  icon,
  link,
  subMenu,
}) => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = isActiveLink(pathname, link, subMenu);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div
        className={`flex items-center gap-md px-md py-lg transition-all duration-300 ${isActive ? "font-semibold text-primary" : "text-tgray"}`}
        onClick={() => {
          if (!subMenu) handleClick(link);
        }}
      >
        <FeatherIcon icon={icon} size={iconSize.sm} />
        <p>{label}</p>
      </div>
      {subMenu &&
        subMenu.map((item) => {
          const isSubActive = pathname.startsWith(item.link);
          return (
            <div
              key={item.link}
              className={`flex items-center gap-md rounded-md px-md py-lg pl-4xl transition-all duration-300 hover:cursor-pointer hover:bg-cream ${isSubActive ? "text-secondary" : ""}`}
              onClick={() => handleClick(item.link)}
            >
              <div
                className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${isSubActive ? "bg-secondary" : "bg-tgray"}`}
              ></div>
              <p>{item.label}</p>
            </div>
          );
        })}
    </div>
  );
};

const SideBarMenu: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-xl text-tgray">
      {SideBarMenuItems.map((item) => (
        <SideBarMenuItem key={item.link} {...item} />
      ))}
    </div>
  );
};

export default SideBarMenu;
