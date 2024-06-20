import Head from "next/head";
import { Inter } from "next/font/google";
import Welcome from "@/components/funcional/Welcome";
import HeadPages from "@/components/layout/HeadPages";
import { useEffect, useState } from "react";
import ScreenLoader from "@/components/layout/ScreenLoader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadPages title="Bienvenido" description="Gaman" />
      <ScreenLoader active={loading} />
      <Welcome />
    </>
  );
}
