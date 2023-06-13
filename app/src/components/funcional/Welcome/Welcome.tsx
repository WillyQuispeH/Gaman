import React, { useEffect } from "react";
import styles from "./Welcome.module.scss";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

import { Row, Column } from "@/components/layout/Generic/Generic";
import { Title, Body, Option } from "@/components/layout/Option";
import { secctionTwo, secctionTre, secctionFor } from "@/data/welcomeData";
import CubeAnimation from "@/components/ui/CubeAnimation";
import CardSimple from "@/components/ui/CardSimple";
import CardNumber from "@/components/ui/CardNumber";
import Seccion from "@/components/layout/Seccion";
import CardImg from "@/components/ui/CardImg/CardImg";
import CardPill from "@/components/ui/CardPill";

const Welcome = () => {
  const handleOnClick = () => {
    alert("Contactar");
  };
  return (
    <Option>
      <Body>
        <div className={styles.welcome}>
          <div className={styles.contentTitle}>
            <h1 data-aos="zoom-out-right">DESARROLLO </h1>
            <span data-aos="fade-up"> DE </span>
            <h2 data-aos="fade-right">SISTEMAS</h2>
            <span data-aos="fade-left">WEB </span>
            <Button width="250px" text="Contactar" onClick={handleOnClick} />
          </div>
          <img
            src="https://ebac.com.co/images/tild6131-6435-4465-b435-353738353863__pic_2.svg"
            alt=""
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </div>
        <Seccion gap="20px">
          <CardPill />
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
      </Body>
    </Option>
  );
};

export default Welcome;
