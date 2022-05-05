import React from 'react';
import './App.css';
import { Formulario } from './components/Formulario';

const FraseMotivacionalContext = React.createContext("");

function App() {

  return (
    <FraseMotivacionalContext.Provider value="É hora de esquecer os erros do passado e começar a planejar os erros do futuro."> 
      <FraseMotivacional />
      <h2>Calculadora de IMC</h2><br />
      <Formulario/>
    </FraseMotivacionalContext.Provider>
  );
}

function FraseMotivacional() {
  return (
    <FraseMotivacionalContext.Consumer>
      {value => <p>{value}</p>}
    </FraseMotivacionalContext.Consumer>
  )
}

export default App;
