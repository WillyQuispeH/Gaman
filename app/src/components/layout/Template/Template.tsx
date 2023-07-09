import React from "react";
import NavBar from "@/components/ui/NavBar/NavBar";
import Screen from "../Screen";
import Footer from "@/components/ui/Footer";
import styles from "./Template.module.scss";

const Template = ({ children }: any) => {
  return (
    <Screen>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Screen>
  );
};

const Content = ({ children }: any) => {
  return <div className={styles.content}>{children}</div>;
};

export default Template;
