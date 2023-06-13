import styles from "./Screen.module.scss";

const Screen = ({ children }: any) => {
  return (
    <>
      <div className={styles.Screen}>{children}</div>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Screen;
