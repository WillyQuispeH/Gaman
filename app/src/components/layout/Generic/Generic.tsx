import styles from "./Generic.module.scss";

const Row = ({ children, gap }: any) => {
  return (
    <div className={styles.Row} style={{ gap }}>
      {children}
    </div>
  );
};

const Column = ({ children, gap, width = "auto" }: any) => {
  return (
    <div className={styles.Column} style={{ gap, width }}>
      {children}
    </div>
  );
};

export { Row, Column };
