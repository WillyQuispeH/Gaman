import { useRouter } from "next/router";
import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import UIContext from "@/context/ui";

const NavBar = () => {
  const onClick = (path: string) => {
    router.push(path);
  };

  const { sidebar, setSidebar } = useContext(UIContext);

  const hanOnclickNavBar = () => {
    setSidebar(!sidebar);
  };

  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <span className="material-symbols-outlined" onClick={hanOnclickNavBar}>
        menu
      </span>
      <div className={styles.contentLogo}>
        <img
          className={styles.logo}
          onClick={() => onClick("/")}
          src="./logoWhite.png"
          alt=""
        />
        <img
          className={styles.name}
          onClick={() => onClick("/")}
          src="./namewhite.png"
          alt=""
        />
      </div>
      <span
        className="material-symbols-outlined"
        onClick={() => {
          router.push("/contact");
        }}
      >
        mail
      </span>
      <ul className={sidebar ? styles.sidebarOpen : styles.sidebarClosed}>
        <li onClick={() => onClick("/proyect")}>Proyectos</li>
        {/* <li onClick={() => onClick("/services")}>Servicios</li> */}
        <li onClick={() => onClick("/contact")}>Contacto</li>
      </ul>
    </div>
  );
};

export default NavBar;
