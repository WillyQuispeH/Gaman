import React from "react";
import styles from "./CardProyect.module.scss";
interface ICardProyect {
  name: string;
  url: string;
  img: string;
}

const CardProyect = ({ name, url, img }: ICardProyect) => {
  return (
    <div className={styles.cardProyect} >
      <div className={styles.cPContent}>
        <h1>{name}</h1>
        <a href={url} target="_blank">
          <p>Visitar</p>
          <span className="material-symbols-outlined">image</span>
        </a>
      </div>
      <img src={img} alt={name} />
    </div>
  );
};

export default CardProyect;
