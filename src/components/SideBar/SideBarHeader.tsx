import { getPx } from "@/utils/helper";
import Tag from "../Tag/Tag";
import Link from "next/link";

export default function SideBarHeader() {
  return (
    <div className="flex items-center gap-3 px-2 py-4">
      <Link href="/">
        <img
          src={"/images/logo.png"}
          alt="logo"
          loading="lazy"
          decoding="async"
          className={`h-auto`}
          style={{
            width: getPx(71.83),
            minWidth: 70,
          }}
        />
      </Link>
      <Tag title="Admin" />
    </div>
  );
}
