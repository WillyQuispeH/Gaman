import React from "react";
import styles from "./Form.module.scss";

const Form = ({ children, title }: any) => {
  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>{title}</div>
      <div className={styles.formBody}>{children}</div>
    </div>
  );
};

export default Form;
