import { Column } from "@/components/layout/Generic";
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

  const [form, setForm] = useState(initForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState("");

  const handleOnChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: {
        value: e.target.value,
        isValid: e.target.value !== "" ? true : false,
      },
    });
  };

  const onClick = () => {
    if (!form.name.isValid || !form.email.isValid || !form.message.isValid) {
      setSubmissionResult("Por favor, complete todos los campos.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult("");

    // Simulación del envío del correo
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult("¡Gracias! Su mensaje ha sido enviado con éxito.");
      setForm(initForm);
    }, 2000);
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
                onChange={handleOnChange}
                value={form.name.value}
                type="text"
                placeholder="Nombre"
                name="name"
              />
              <InputText
                width="100%"
                onChange={handleOnChange}
                value={form.email.value}
                type="email"
                placeholder="Correo electrónico"
                name="email"
              />
              <TexTarea
                width="100%"
                onChange={handleOnChange}
                value={form.message.value}
                placeholder="Mensaje"
                name="message"
              />
            </Column>
            <Button
              text={isSubmitting ? "Enviando..." : "Contactar"}
              onClick={onClick}
              width="200px"
              disabled={isSubmitting}
            />
            {submissionResult && (
              <p className={styles.submissionResult}>{submissionResult}</p>
            )}
          </Column>
        </Form>
      </Seccion>
    </div>
  );
};

export default Contact;
