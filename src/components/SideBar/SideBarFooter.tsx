import FeatherIcon from "feather-icons-react";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "@/store/authSlice";
import { iconSize } from "@/theme";
import { getPx } from "@/utils/helper";

export default function SideBarFooter() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUserAction());
    // handle logout
  }
  return (
    <div className="p-lg">
      <div className="flex items-center gap-md rounded-md px-md py-sm hover:cursor-pointer hover:bg-slate-50">
        <div
          className="overflow-hidden rounded-full"
          style={{
            width: getPx(40),
            height: getPx(40),
            minWidth: 30,
            minHeight: 30,
          }}
        >
          <img
            src="/images/user-placeholder.png"
            alt="logo"
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1 flex-col">
          <p className="text-tblack text-md font-semibold">Admin Name</p>
          <p className="text-tgray text-sm">email@email.com</p>
        </div>
        <div className="text-tgray flex items-center justify-center">
          <FeatherIcon icon="chevron-right" size={iconSize.sm} />
        </div>
      </div>
      <div
        className="flex items-center gap-md rounded-md px-md py-sm hover:cursor-pointer hover:bg-red-50"
        onClick={handleLogout}
      >
        <div className="flex items-center justify-center text-negative">
          <FeatherIcon icon="log-out" size={iconSize.sm} />
        </div>
        <p className="text-tgray text-sm">Logout</p>
      </div>
    </div>
  );
}
