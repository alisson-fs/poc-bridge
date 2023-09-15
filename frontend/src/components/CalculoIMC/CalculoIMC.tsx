import { useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { useRouteMatch, useHistory } from "react-router-dom";
import { ALTURA, PESO } from "./model";
import { validateIMC } from "./validate";
import { Button, Heading, HFlow, Text, VFlow } from "bold-ui";
import axios from "axios";
import { HISTORICO_PATH } from "../../model";

export interface IMCFormModel {
  altura?: string;
  peso?: string;
}

export function CalculoIMC() {
  function handleSubmit(values: IMCFormModel) {
    axios
      .post("http://localhost:8080/calcularImc", { ...values })
      .then((response) => {
        setResultado(Number(response.data));
      });
  }
  const { url } = useRouteMatch()
  const history = useHistory()

  const [resultado, setResultado] = useState<Number>(0);

  const handleClick = () => history.push(`${url}${HISTORICO_PATH}`)

  const renderForm = (formProps: FormRenderProps<IMCFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <Heading level={2}>Cálculo: </Heading>
          <CampoTexto for={ALTURA} name={ALTURA} label="Altura (cm):" />
          <CampoTexto for={PESO} name={PESO} label="Peso (kg):" />
          <HFlow>
            <Button onClick={handleSubmit} kind="primary">
              Calcular
            </Button>
            <Button kind="primary" onClick={handleClick}>Histórico de cálculos</Button>
          </HFlow>
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
