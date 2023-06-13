import React from "react";
import styles from "./CardTestimony.module.scss";

interface ICardTestimony {}

const CardTestimony = () => {
  return (
    <div className={styles.cardTestimony}>
      <img src="https://tinypic.host/images/2022/12/19/img_avatar.png" alt="" />
      <h1>
        <p>Willy Abad Quispe</p>
        <span>
          Exelente trabajo todo profesional y disponibles en cualquier momento
        </span>
      </h1>
    </div>
  );
};

export default CardTestimony;
