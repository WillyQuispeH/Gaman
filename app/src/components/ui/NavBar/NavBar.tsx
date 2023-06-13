import React from "react";
import { useRouter } from "next/router";
import { navBarOption } from "@/data/navBar";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const onClick = (path: string) => {
    router.push(path);
  };
  const router = useRouter();
  return (
    <div
      className={styles.navbar}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <span className="material-symbols-outlined">menu</span>

      <img
        onClick={() => onClick("/")}
        src="https://i.ibb.co/0cXNjgp/white-logo-transparent-background-1-1-1.png"
        alt=""
      />
      <span className="material-symbols-outlined">mail</span>
      <ul>
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
