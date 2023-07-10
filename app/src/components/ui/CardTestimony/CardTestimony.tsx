import React from "react";
import styles from "./CardTestimony.module.scss";

interface ICardTestimony {}

const CardTestimony = () => {
  return (
    <div className={styles.cardTestimony}>
      <img src="https://sirvelia.com/wp-content/uploads/2021/01/persona-usando-smartphone-1200x900.jpg" alt="" />
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
