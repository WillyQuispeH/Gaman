import React from "react";

import styles from "./CardNumber.module.scss";

interface ICardNumber {
  cant: string;
  text: string;
  icon: string;
  iconText: string;
}

const CardNumber = ({ cant, text, icon, iconText }: ICardNumber) => {
  return (
    <div className={styles.cardNumber}>
      <h1>
        {cant}
        <span>{text}</span>
      </h1>
      <h2>
        <span className="material-symbols-outlined">{icon}</span>
        <p>{iconText}</p>
      </h2>
    </div>
  );
};

export default CardNumber;
