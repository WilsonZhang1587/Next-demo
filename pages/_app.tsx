import type { AppProps } from "next/app";
import "@/styles/index.css";

export default function _app({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
