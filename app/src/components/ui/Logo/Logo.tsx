import React from "react";
import styles from "./Logo.module.scss";
interface ILogo {
  width: string;
  height: string;
}

const Logo = ({ width, height }: ILogo) => {
  return <div className={styles.logo} style={{ width, height }}></div>;
};

export default Logo;
