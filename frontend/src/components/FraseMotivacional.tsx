import { useContext } from "react";
import { FraseMotivacionalContext } from "../App";

export function FraseMotivacional() {
  const { frase1, frase2 } = useContext(FraseMotivacionalContext);
  return (
    <>
      <p className="frase1">{frase1}</p>
      <p className="frase2">{frase2}</p>
    </>
  );
}
