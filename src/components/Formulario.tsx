import { useState } from "react";
import { CampoTexto } from "./CampoTexto";
import { Form, FormRenderProps } from "react-final-form";
import { calcularImc } from "../util";

interface IMCFormModel {
  altura: number;
  peso: number;
}

export function Formulario() {
  function handleSubmit(values: IMCFormModel) {
    // var n_altura = 0;
    // var n_peso = 0;
    // if (values.altura !== "") {
    //   n_altura = Number(values.altura);
    // }
    // if (values.peso !== "") {
    //   n_peso = Number(values.peso);
    // }
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
      <Form<IMCFormModel> onSubmit={handleSubmit} render={renderForm} />
      {resultado !== 0 && (
        <div className="resultado">
          <label>IMC:</label>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}
