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

      <img onClick={() => onClick("/")} src="./logo.png" alt="" />
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
