import React from "react";
import styles from "./ButtonIcon.module.scss";

interface IButtonIcon {
  icon: string;
  onClick?: any;
}
const ButtonIcon = ({ icon, onClick }: IButtonIcon) => {
  return (
    <div className={styles.buttonIcon}>
      <span className="material-symbols-outlined" onClick={onClick}>
        {icon}
      </span>
    </div>
  );
};

export default ButtonIcon;
