import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //import MRT sty
import type { AppProps } from "next/app";
import { theme } from "../theme/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import RootLayout from "@/components/layout/RootLayout";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </MantineProvider>
      </Provider>
    </QueryClientProvider>
  );
}
