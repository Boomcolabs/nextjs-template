import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { iconSize } from "@/theme";

function formatBreadCrumb(input: string) {
  return input
    .split("-") // Split the string by dashes
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words with spaces
}

export default function BreadCrumb() {
  const router = useRouter();
  const path = router.asPath;
  const pathSegments = parsePath(path);

  function parsePath(path: string) {
    return path
      .split("/")
      .filter((item) => item)
      .map((segment) => segment.split("?")[0]);
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-xs">
        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isActive = index === pathSegments.length - 1;
          return (
            <li
              key={index}
              className={`flex items-center font-sans text-xl font-semibold ${isActive ? "text-tblack" : "text-tgrey"}`}
            >
              <Link href={url}>{formatBreadCrumb(segment)}</Link>
              {index < pathSegments.length - 1 && (
                <FeatherIcon
                  icon="chevron-right"
                  size={iconSize.sm}
                  className="mt-xs"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
