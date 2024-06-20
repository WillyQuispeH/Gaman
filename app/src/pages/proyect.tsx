import React, { useEffect, useState } from "react";
import Proyect from "@/components/funcional/Proyect";
import HeadPages from "@/components/layout/HeadPages";
import LoaderLogo from "@/components/ui/LoaderLogo";
import ScreenLoader from "@/components/layout/ScreenLoader";

const PageProyect = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadPages title="Proyectos" description="Gaman" />
      <ScreenLoader active={loading} />
      <Proyect />
    </>
  );
};

export default PageProyect;
