import { useState } from "react";
import { CampoTexto } from "./CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { calcularImc } from "../util";

interface IMCFormModel {
  altura: number;
  peso: number;
}

type ErrorObject<DataType> = { [key in keyof DataType]?: ErrorObject<DataType[key]> | string };

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
          const errors: ErrorObject<IMCFormModel> = {};
          if (!values.altura) {
            errors.altura = "Campo obrigatório.";
          } else {
            if (isNaN(values.altura)) {
              errors.altura = "Deve ser um número."
            }
            if (values.altura <= 0) {
              errors.altura = "Deve ser um valor maior do que 0."
            }
          }
          if (!values.peso) {
            errors.peso = "Campo obrigatório."
          } else {
            if (isNaN(values.peso)) {
              errors.peso = "Deve ser um número."
            }
            if (values.peso <= 0) {
              errors.peso = "Deve ser um valor maior do que 0."
            }
          }
          return errors
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
