import React from "react";
import styles from "./CardPill.module.scss";

interface ICardPill {
  img: string;
  text: string;
  title: string;
}
const CardPill = ({ img, text, title }: ICardPill) => {
  return (
    <div className={styles.cardPill}>
      <img src={img} alt="ICardPill" />
      <p>
        <span>{title}</span> <i>{text}</i>
      </p>
    </div>
  );
};

export default CardPill;
