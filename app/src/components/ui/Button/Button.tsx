import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  onClick: any;
  width: string;
  disabled?: boolean;
}
const Button = ({ text, onClick, width, disabled }: IButton) => {
  return (
    <div className={styles.button} style={{ width }}>
      <button onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
