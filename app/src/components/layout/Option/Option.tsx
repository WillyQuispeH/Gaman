import React from "react";

import styles from "./Option.module.scss";
import Footer from "@/components/ui/Footer";

const Option = ({ children }: any) => {
  return <div className={styles.option}>{children}
  <Footer /></div>;
};

const Title = ({ children, title }: any) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const Body = ({ children }: any) => {
  return <div className={styles.body}>{children}</div>;
};

export { Option, Title, Body };
