import React from "react";
import styles from "./TexTarea.module.scss";

interface ITexTarea {
  onChange: any;
  onBlur?: any;
  onFocus?: any;
  placeholder: string;
  value: string;
  name: string;
  width: string;
}

const TexTarea = ({
  onChange,
  onBlur,
  onFocus,
  placeholder,
  value,
  name,
  width,
}: ITexTarea) => {
  return (
    <div className={styles.texTarea} style={{ width }}>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
      />
    </div>
  );
};

export default TexTarea;
