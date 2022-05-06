import React from 'react';
import './App.css';
import { Formulario } from './components/Formulario';
import { FraseMotivacional } from './components/FraseMotivacional';
import { FrasesMotivacionaisContextModel, FRASE_1, FRASE_2 } from './model';

export const FraseMotivacionalContext = React.createContext<FrasesMotivacionaisContextModel>({frase1: "", frase2: ""});

function App() {

  return (
    <FraseMotivacionalContext.Provider value={{frase1: FRASE_1, frase2: FRASE_2}}> 
      <FraseMotivacional />
      <h2>Calculadora de IMC</h2><br />
      <Formulario/>
    </FraseMotivacionalContext.Provider>
  );
}


export default App;
