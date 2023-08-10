import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import { CALCULO_IMC_PATH, HISTORICO_PATH } from "../model";

import { CalculoIMC } from "./CalculoIMC/CalculoIMC";
import { Historico } from "./Historico/Historico";

export default function RootView() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path={HISTORICO_PATH} element={<Historico />} />
      <Route path={CALCULO_IMC_PATH} element={<CalculoIMC />} />
    </Routes>
  );
}
