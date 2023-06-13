import React from "react";

import styles from "./CardSimple.module.scss";

interface ICardSimple {
  title: string;
  text: string;
}

const CardSimple = ({title, text}: ICardSimple) => {
  return (
    <div className={styles.cardSimple}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default CardSimple;
