import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
