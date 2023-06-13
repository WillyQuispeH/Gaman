import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import initializeAOS from "@/utils/AOS";

import type { AppProps } from "next/app";
import Template from "@/components/layout/Template";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeAOS();
    console.log("abad")
  }, []);
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}
