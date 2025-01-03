import FeatherIcon from "feather-icons-react";
import { iconSize } from "@/theme";

const PasswordToggleIcon = ({ reveal }: { reveal: boolean }) => {
  return <FeatherIcon icon={reveal ? "eye" : "eye-off"} size={iconSize.xs} />;
};

export default PasswordToggleIcon;
