import React from "react";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { proyectData } from "@/data/proyectData";
import styles from "./Proyect.module.scss";
import { Title, Body, Option } from "@/components/layout/Option";
import Seccion from "@/components/layout/Seccion";
import CardPill from "@/components/ui/CardPill";
import CardProyect from "@/components/ui/CardProyect";
import { text } from "stream/consumers";
import CardTestimony from "@/components/ui/CardTestimony";

const Proyect = () => {
  const handleOnClick = (url: string) => {};
  return (
    <>
      <Seccion gap="25px" title="¡Te damos la bienvenida a nuestro portafolio!">
        {proyectData.map((item, key) => (
          <CardProyect
            key={key}
            name={item.name}
            url={item.url}
            img={item.img}
          />
        ))}
      </Seccion>
      <Seccion gap="20px" title="TUS proyectos En las mejores manos!">
        <CardTestimony />
      </Seccion>
    </>
  );
};

export default Proyect;
