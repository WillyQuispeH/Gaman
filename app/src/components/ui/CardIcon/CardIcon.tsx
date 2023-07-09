import React from "react";
import styles from "./CardIcon.module.scss";

interface ICardIcon {
  title: string;
  icon: string;
  colorIcon: string;
  text: string;
}
const CardIcon = ({ title, icon, colorIcon, text }: ICardIcon) => {
  return (
    <div className={styles.cardIcon}>
      <h2>{title}</h2>

      <div className={styles.cardIconConten}>
        <span
          style={{ color: colorIcon }}
          className="material-symbols-outlined"
        >
          {icon}
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardIcon;
