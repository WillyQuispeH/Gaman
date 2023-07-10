import { Column, Row } from "@/components/layout/Generic";
import Seccion from "@/components/layout/Seccion";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import InputText from "@/components/ui/InputText";
import TexTarea from "@/components/ui/TexTarea";
import React from "react";

const Contact = () => {
  const onClick = () => {};
  const handleOnchange = () => {};
  return (
    <>
      <Seccion gap="0px" title="Contactar">
        <Form title="Contacto">
          <Column gap="15px">
            <Column gap="5px">
              <Row gap="5px">
                <InputText
                  width="200px"
                  onChange={handleOnchange}
                  value=""
                  type="text"
                  placeholder="Nombre"
                  name=""
                />
                <InputText
                  width="200px"
                  onChange={handleOnchange}
                  value=""
                  type="text"
                  placeholder="Apellidos"
                  name=""
                />
              </Row>
              <InputText
                width="405px"
                onChange={handleOnchange}
                value=""
                type="email"
                placeholder="Correo electrónico"
                name=""
              />
              <TexTarea
                width="405px"
                onChange={handleOnchange}
                value=""
                placeholder="Mensaje"
                name=""
              />
            </Column>
            <Button text="Contactar" onClick={onClick} width="200px" />
          </Column>
        </Form>
      </Seccion>
    </>
  );
};

export default Contact;
