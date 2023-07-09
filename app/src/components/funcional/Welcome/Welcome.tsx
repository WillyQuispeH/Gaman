import React from "react";
import styles from "./Welcome.module.scss";
import Button from "@/components/ui/Button";

import { Body, Option } from "@/components/layout/Option";
import {
  secctionTwo,
  secctionTre,
  secctionFor,
  dataCardPull,
  dataCardIcon,
} from "@/data/welcomeData";
import CardSimple from "@/components/ui/CardSimple";
import CardNumber from "@/components/ui/CardNumber";
import Seccion from "@/components/layout/Seccion";
import CardImg from "@/components/ui/CardImg/CardImg";
import CardPill from "@/components/ui/CardPill";
import { title } from "process";
import CardIcon from "@/components/ui/CardIcon";

const Welcome = () => {
  const handleOnClick = () => {
    alert("Contactar");
  };
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.contentTitle}>
          <h1>
            DESARROLLO <span>DE </span>
          </h1>
          <h2>
            SISTEMAS <span>WEB </span>
          </h2>
          <Button width="200px" text="Contactar" onClick={handleOnClick} />
        </div>
        <div className={styles.fondo}></div>
      </div>
      <Seccion gap="20px" title="DISEÑO Y DESARROLLO WEB">
        {dataCardPull.map((item, key) => (
          <CardPill
            key={key}
            img={item.img}
            text={item.text}
            title={item.title}
          />
        ))}
      </Seccion>
      <Seccion
        gap="20px"
        title="¡Descubre cómo podemos llevarte al siguiente nivel en el desarrollo web!"
      >
        {secctionTwo.map((item, key) => (
          <CardImg
            key={key}
            img={item.img}
            text={item.text}
            title={item.title}
            price={item.price}
          />
        ))}
      </Seccion>

      <Seccion gap="20px" title="En las mejores manos!">
        {secctionTre.map((item, key) => (
          <CardSimple key={key} text={item.text} title={item.title} />
        ))}
      </Seccion>

      <Seccion gap="100px" title="Nuestros numeros HABLAN POR SÍ SOLOS">
        {secctionFor.map((item, key) => (
          <CardNumber
            key={key}
            cant={item.cant}
            text={item.text}
            icon={item.icon}
            iconText={item.iconText}
          />
        ))}
      </Seccion>

      <Seccion gap="20px" title="Componentes del Proyecto">
        {dataCardIcon.map((item, key) => (
          <CardIcon
            key={key}
            title={item.title}
            icon={item.icon}
            colorIcon={item.colorIcon}
            text={item.text}
          />
        ))}
      </Seccion>
    </>
  );
};

export default Welcome;
