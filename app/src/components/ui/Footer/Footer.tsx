import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img
          src="https://i.ibb.co/0cXNjgp/white-logo-transparent-background-1-1-1.png"
          alt=""
        />
        <ul>
          <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">pets</span>
        </ul>
      </div>
      <div>
        <h1>Diseño y Desarrollo original de Gaman Company® Agencia Digital</h1>
        <h1>Todos los Derechos Reservados a Agencia Gaman Company®.</h1>
      </div>
    </div>
  );
};

export default Footer;
