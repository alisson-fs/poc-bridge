import React, { useState } from "react";
import { CampoTexto } from "./CampoTexto";

function calcularImc(altura: number, peso: number) {
  return (
    peso / ((altura/100) ** 2)
  );
}

interface IMCFormModel {
  altura: string
  peso: string
}

export function Formulario() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    var n_altura = 0;
    var n_peso = 0;
    if (imcFormValues.altura !== "") {
      n_altura = Number(imcFormValues.altura);
    }
    if (imcFormValues.peso !== "") {
      n_peso = Number(imcFormValues.peso);
    } 
    var resultado = "";
    if (n_altura !== 0 && n_peso !== 0) {
      resultado = String(calcularImc(n_altura, n_peso))
    }
    handleChangeResultado(resultado)
  }

  const [imcFormValues, setImcFormValues] = useState<IMCFormModel>({altura: "", peso: ""})
  const [resultado, setResultado] = useState<string>()

  const handleChangeAltura = (altura: string) => {
    setImcFormValues({altura, peso: imcFormValues.peso})
  }

  const handleChangePeso = (peso: string) => {
    setImcFormValues({altura: imcFormValues.altura, peso})
  }

  const handleChangeResultado = (resultado: string) => {
    setResultado(resultado)
  }

  const altura = "altura";
  const peso = "peso";
  return (
    <form onSubmit={handleSubmit}>
      <CampoTexto for={altura} id={altura} name={altura} text="Altura (cm):" onChange={handleChangeAltura} />
      <CampoTexto for={peso} id={peso} name={peso} text="Peso (kg):" onChange={handleChangePeso} />
      <button type="submit">Calcular</button><br />
      <label>IMC:</label>
      <p>{resultado}</p>
    </form>
  );
}
