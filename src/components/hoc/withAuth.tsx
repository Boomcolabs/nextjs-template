import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";

function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();

    // Access Redux auth state
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
      const localStorageToken = localStorage.getItem("user");
      // Check authentication via Redux or localStorage
      if (!isAuthenticated && !localStorageToken) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    return <Component {...props} />;
  };
}

export default withAuth;
