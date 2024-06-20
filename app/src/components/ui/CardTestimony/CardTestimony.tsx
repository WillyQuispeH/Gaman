import React from "react";
import styles from "./CardTestimony.module.scss";

interface ICardTestimony {
  name: string;
  tes: string;
}

const CardTestimony = ({ name, tes }: ICardTestimony) => {
  return (
    <div className={styles.cardTestimony}>
      <img src="./user.jpg" alt="" />
      <h1>
        <p>{name}</p>
        <span>{tes}</span>
      </h1>
    </div>
  );
};

export default CardTestimony;
