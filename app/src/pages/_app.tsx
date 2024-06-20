import "@/styles/globals.css";
import "aos/dist/aos.css";
import { UiProvider } from "@/context/ui";
import { useEffect } from "react";
import initializeAOS from "@/utils/AOS";

import type { AppProps } from "next/app";
import Template from "@/components/layout/Template";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeAOS();
  }, []);
  return (
    <UiProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </UiProvider>
  );
}
