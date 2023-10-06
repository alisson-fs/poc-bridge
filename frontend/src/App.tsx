import { Heading, useTheme, VFlow } from "bold-ui";
import React from "react";
import "./App.css";
import { CalculoIMCView } from "./components/CalculoIMC/CalculoIMCView";
import { FraseMotivacional } from "./components/FraseMotivacional";
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: theme.pallete.surface.main,
        }}
      >
        <Heading level={1}>Calculadora de IMC</Heading>
        <CalculoIMCView />
      </VFlow>
    </FraseMotivacionalContext.Provider>
  );
}

export default App;
