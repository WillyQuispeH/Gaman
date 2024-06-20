import React from "react";
import { proyectData } from "@/data/proyectData";
import styles from "./Proyect.module.scss";
import Seccion from "@/components/layout/Seccion";
import CardProyect from "@/components/ui/CardProyect";
import CardTestimony from "@/components/ui/CardTestimony";
import data from "@/data/testimonios";

const Proyect = () => {
  const handleOnClick = (url: string) => {};
  return (
    <>
      <div className={styles.proyects}>
        <Seccion
          gap="25px"
          title="¡Te damos la bienvenida a nuestro portafolio!"
        >
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
          {data.map((item, key) => (
            <CardTestimony key={key} name={item.name} tes={item.tes} />
          ))}
        </Seccion>
      </div>
    </>
  );
};

export default Proyect;
