import { useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { ALTURA, PESO } from "./model";
import { validateIMC } from "./validate";
import { Button, HFlow, Text, VFlow } from "bold-ui";
import axios from "axios";

export interface IMCFormModel {
  altura?: string;
  peso?: string;
}

export function Formulario() {
  function handleSubmit(values: IMCFormModel) {
    axios
      .post("http://localhost:8080/calcularImc", { ...values })
      .then((response) => {
        setResultado(Number(response.data));
      });
  }

  const [resultado, setResultado] = useState<Number>(0);

  const renderForm = (formProps: FormRenderProps<IMCFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <CampoTexto for={ALTURA} name={ALTURA} label="Altura (cm):" />
          <CampoTexto for={PESO} name={PESO} label="Peso (kg):" />
          <Button onClick={handleSubmit} kind="primary">
            Calcular
          </Button>
        </VFlow>
      </form>
    );
  };

  return (
    <VFlow>
      <Form<IMCFormModel>
        onSubmit={handleSubmit}
        render={renderForm}
        validate={validateIMC}
      />
      {resultado !== 0 && (
        <HFlow>
          <Text fontSize={1}>IMC:</Text>
          <Text fontSize={1}>{resultado}</Text>
        </HFlow>
      )}
    </VFlow>
  );
}
