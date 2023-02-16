import { Heading, HFlow, useTheme, VFlow } from "bold-ui";
import React from "react";
import "./App.css";
import { Formulario } from "./components/Fomulario/Formulario";
import { FraseMotivacional } from "./components/FraseMotivacional";
import { Historico } from "./components/Historico/Historico";
import { FrasesMotivacionaisContextModel, FRASE_1, FRASE_2 } from "./model";

export const FraseMotivacionalContext =
  React.createContext<FrasesMotivacionaisContextModel>({
    frase1: "",
    frase2: "",
  });

function App() {
  const theme = useTheme();
  return (
    <FraseMotivacionalContext.Provider
      value={{ frase1: FRASE_1, frase2: FRASE_2 }}
    >
      <FraseMotivacional />
      <VFlow
        style={{
          position: "absolute",
          left: "30%",
          top: "30%",
          backgroundColor: theme.pallete.surface.main,
        }}
      >
        <Heading level={2}>Calculadora de IMC</Heading>
        <HFlow hSpacing={5} alignItems="center">
          <Formulario />
          <Historico />
        </HFlow>
      </VFlow>
    </FraseMotivacionalContext.Provider>
  );
}

export default App;
