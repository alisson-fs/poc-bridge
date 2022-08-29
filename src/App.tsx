import { Heading, VFlow } from "bold-ui";
import React from "react";
import "./App.css";
import { Formulario } from "./components/Fomulario/Formulario";
import { FraseMotivacional } from "./components/FraseMotivacional";
import { FrasesMotivacionaisContextModel, FRASE_1, FRASE_2 } from "./model";

export const FraseMotivacionalContext =
  React.createContext<FrasesMotivacionaisContextModel>({
    frase1: "",
    frase2: "",
  });

function App() {
  return (
    <FraseMotivacionalContext.Provider
      value={{ frase1: FRASE_1, frase2: FRASE_2 }}
    >
      <FraseMotivacional />
      <VFlow style={{ position: "absolute", left: "45%", top: "30%" }}>
        <Heading level={2}>Calculadora de IMC</Heading>
        <Formulario />
      </VFlow>
    </FraseMotivacionalContext.Provider>
  );
}

export default App;
