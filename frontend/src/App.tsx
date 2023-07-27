import { Button, Heading, useTheme, VFlow } from "bold-ui";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FraseMotivacional } from "./components/FraseMotivacional";
import {
  CALCULO_IMC_PATH,
  FrasesMotivacionaisContextModel,
  FRASE_1,
  FRASE_2,
  HISTORICO_PATH,
} from "./model";

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
        <VFlow>
          <Link to={CALCULO_IMC_PATH}>
            <Button kind="primary">Calcular IMC</Button>
          </Link>
          <Link to={HISTORICO_PATH}>
            <Button kind="primary">Histórico de cálculos</Button>
          </Link>
        </VFlow>
      </VFlow>
    </FraseMotivacionalContext.Provider>
  );
}

export default App;
