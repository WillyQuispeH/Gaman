import React from "react";
import styles from "./InputText.module.scss";

interface IInputText {
  onChange: any;
  onBlur?: any;
  onFocus?: any;
  placeholder: string;
  value: string;
  type: string;
  name: string;
  width:string
}
const InputText = ({
  onChange,
  onBlur,
  onFocus,
  placeholder,
  value,
  type,
  name,
  width
}: IInputText) => {
  return (
    <div className={styles.inputText} style={{width}}>
      <input
        type={type}
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

export default InputText;
