import React, { useState } from "react";
import { CampoTexto } from "./CampoTexto";

function Imc(altura: number, peso: number) {
  return (
    peso / (altura ** 2)
  );
}

interface IMCFormModel {
  altura: string
  peso: string
  resultado: string
}

export function Formulario() {

  function calcularImc(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    var n_altura = 0;
    var n_peso = 0;
    if (imcFormValues.altura !== "") {
      n_altura = Number(imcFormValues.altura) / 100;
    }
    if (imcFormValues.peso !== "") {
      n_peso = Number(imcFormValues.peso);
    } 
    var resultado = "";
    if (n_altura !== 0 && n_peso !== 0) {
      resultado = String(Imc(n_altura, n_peso))
    }
    handleChangeResultado(resultado)
  }

  const [imcFormValues, setImcFormValues] = useState<IMCFormModel>({altura: "", peso: "", resultado: ""})

  const handleChangeAltura = (altura: string) => {
    setImcFormValues({altura, peso: imcFormValues.peso, resultado: imcFormValues.resultado})
  }

  const handleChangePeso = (peso: string) => {
    setImcFormValues({altura: imcFormValues.altura, peso, resultado: imcFormValues.resultado})
  }

  const handleChangeResultado = (resultado: string) => {
    setImcFormValues({altura: imcFormValues.altura, peso: imcFormValues.peso, resultado})
  }

  const altura = "altura";
  const peso = "peso";
  return (
    <form onSubmit={calcularImc}>
      <CampoTexto for={altura} id={altura} name={altura} text="Altura (cm):" onChange={handleChangeAltura} />
      <CampoTexto for={peso} id={peso} name={peso} text="Peso (kg):" onChange={handleChangePeso} />
      <button type="submit">Calcular</button><br />
      <label>IMC:</label>
      <p>{imcFormValues.resultado}</p>
    </form>
  );
}
