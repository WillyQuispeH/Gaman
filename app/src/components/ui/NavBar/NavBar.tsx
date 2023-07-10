import { useRouter } from "next/router";
import React, { useContext } from "react";
import { navBarOption } from "@/data/navBar";
import styles from "./NavBar.module.scss";
import UIContext from "@/context/ui";
const NavBar = () => {
  const onClick = (path: string) => {
    router.push(path);
    setSidebar(!sidebar);
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

      <img
        onClick={() => onClick("/")}
        src="https://i.ibb.co/0cXNjgp/white-logo-transparent-background-1-1-1.png"
        alt=""
      />
      <span className="material-symbols-outlined" onClick={()=>{router.push('/contact')}}>mail</span>
      <ul
        style={{
          bottom: sidebar ? "-61px" : "0px",
          display: sidebar ? "flex" : "none",
        }}
      >
        {navBarOption.map((item, key) => (
          <li key={key} onClick={() => onClick(item.path)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
