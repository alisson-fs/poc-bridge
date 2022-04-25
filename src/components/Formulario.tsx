import { CampoTexto } from "./CampoTexto";

export function Formulario() {
  const altura = "altura";
  const peso = "peso";
  return (
    <form>
      <CampoTexto for={altura} id={altura} name={altura} text="Altura (cm):" />
      <CampoTexto for={peso} id={peso} name={peso} text="Peso (kg):" />
      <input type="button" value="Calcular" />
    </form>
  );
}
