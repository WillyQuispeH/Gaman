import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src="./name.png" alt="" />
        <ul>
          {/* <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">pets</span> */}
        </ul>
      </div>
      <div>
        <h1>Diseño y Desarrollo original de Gaman® Agencia Digital</h1>
        <h1>Todos los Derechos Reservados a Agencia Gaman®.</h1>
      </div>
    </div>
  );
};

export default Footer;
