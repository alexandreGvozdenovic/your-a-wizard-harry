import { AppProps } from "next/app";
import useSWR, { SWRConfig } from "swr";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
export default MyApp;
