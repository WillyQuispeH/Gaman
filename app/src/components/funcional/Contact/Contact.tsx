import { Column, Row } from "@/components/layout/Generic";
import Seccion from "@/components/layout/Seccion";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import InputText from "@/components/ui/InputText";
import TexTarea from "@/components/ui/TexTarea";
import React, { useState } from "react";
import styles from "./Contact.module.scss";
const Contact = () => {
  const initForm = {
    name: { value: "", isValid: false },
    email: { value: "", isValid: false },
    message: { value: "", isValid: false },
  };
  const onClick = () => {};
  const [form, setForm] = useState(initForm);

  const handleOnchange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value !== "" ? true : false,
      },
    });
  };
  return (
    <div className={styles.contact}>
      <Seccion gap="20px" title="Contacta con nuestro equipo de ventas">
        <h1 className={styles.title}>
          Nuestro equipo de ventas está a tu disposición para cualquier duda.
          Rellena el formulario y nos pondremos en contacto contigo lo antes
          posible.
        </h1>
        <Form title="Contacto">
          <Column gap="15px" width={"100%"}>
            <Column gap="5px" width={"100%"}>
              <InputText
                width="100%"
                onChange={handleOnchange}
                value={form.name.value}
                type="text"
                placeholder="Nombre"
                name="name"
              />

              <InputText
                width="100%"
                onChange={handleOnchange}
                value={form.email.value}
                type="email"
                placeholder="Correo electrónico"
                name="email"
              />
              <TexTarea
                width="100%"
                onChange={handleOnchange}
                value={form.message.value}
                placeholder="Mensaje"
                name="message"
              />
            </Column>
            <Button text="Contactar" onClick={onClick} width="200px" />
          </Column>
        </Form>
      </Seccion>
    </div>
  );
};

export default Contact;
