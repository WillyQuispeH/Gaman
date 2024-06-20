import Contact from "@/components/funcional/Contact";
import HeadPages from "@/components/layout/HeadPages";
import ScreenLoader from "@/components/layout/ScreenLoader";
import React, { useEffect, useState } from "react";

const contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadPages title="Contacto" description="Contacta con Gaman" />
      <ScreenLoader active={loading} />
      <Contact />
    </>
  );
};

export default contact;
