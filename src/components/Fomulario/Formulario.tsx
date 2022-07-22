import { useState } from "react";
import { CampoTexto } from "../CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { calcularImc } from "../../util";
import { ALTURA, PESO } from "./model";
import { validateIMC } from "./validate";

export interface IMCFormModel {
  altura?: number;
  peso?: number;
}

export function Formulario() {
  function handleSubmit(values: IMCFormModel) {
    setResultado(calcularImc(values.altura, values.peso));
  }

  const [resultado, setResultado] = useState<number>(0);

  const renderForm = (formProps: FormRenderProps<IMCFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <CampoTexto for={ALTURA} name={ALTURA} text="Altura (cm):" />
        <CampoTexto for={PESO} name={PESO} text="Peso (kg):" />
        <button type="submit">Calcular</button>
        <br />
      </form>
    );
  };

  return (
    <div className="formIMC">
      <Form<IMCFormModel>
        onSubmit={handleSubmit}
        render={renderForm}
        validate={validateIMC}
      />
      {resultado !== 0 && (
        <div className="resultado">
          <label>IMC:</label>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}
