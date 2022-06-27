import { useState } from "react";
import { CampoTexto } from "./CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { calcularImc } from "../util";
import { ErrorObject } from "../model";
import { validate } from "../validate";

export interface IMCFormModel {
  altura: number;
  peso: number;
}

export function Formulario() {
  function handleSubmit(values: IMCFormModel) {
    setResultado(calcularImc(values.altura, values.peso));
  }

  const [resultado, setResultado] = useState<number>(0);

  const altura = "altura";
  const peso = "peso";

  const renderForm = (formProps: FormRenderProps<IMCFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <CampoTexto for={altura} name={altura} text="Altura (cm):" />
        <CampoTexto for={peso} name={peso} text="Peso (kg):" />
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
        validate={values => {
          var errors: ErrorObject<IMCFormModel> = {};
          errors = validate(errors, values);
          return errors;
        }}
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
