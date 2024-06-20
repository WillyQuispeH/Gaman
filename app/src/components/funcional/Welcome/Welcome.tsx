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
import { useRouter } from "next/router";

const Welcome = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/contact");
  };
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.contentTitle}>
          <div className={styles.title}>
            <h1>DESARROLLO DE SOFTWARE</h1>
            <h2>
              Somos una agencia digital donde mezclamos estrategia, cultura y
              tecnología
            </h2>
            <h3>
              Compuesta por profesionales con más de 10 años de experiencia y
              dispuestos a enfrentar cualquier desafío con el fin de ayudar a
              nuestros clientes, comunicando, creando, desarrollando y diseñando
              cada idea gracias a nuestra experiencia en el mundo digital.
            </h3>
          </div>
          <Button width="200px" text="Contactar" onClick={handleOnClick} />
        </div>
        <div className={styles.fondo}></div>
      </div>
      <Seccion gap="25px" title="DISEÑO Y DESARROLLO WEB">
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
