import React from "react";
import styles from "./Seccion.module.scss";
import { Title } from "../Option";

interface ISeccion {
  children: any;
  gap: string;
  title?: string;
}

const Seccion = ({ children, gap, title }: ISeccion) => {
  return (
    <section className={styles.seccion} style={{ gap }}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

export default Seccion;
