import { DataTable } from "bold-ui";
import { Imc, useImcQuery } from "../utils/__generated__/graphql";
import { ALTURA, PESO } from "./Fomulario/model";

export function Historico() {
  const { data, loading } = useImcQuery();

  console.log(data, loading)

  const renderAltura = (imc: Imc) => imc.altura;
  const renderPeso = (imc: Imc) => imc.peso;
  const renderImc = (imc: Imc) => imc.imc;
  const renderDataCalculo = (imc: Imc) => imc.dt_calculo;

  return (
    <>
      <DataTable<Imc>
        columns={[
          {
            header: "Altura (cm)",
            name: ALTURA,
            render: renderAltura,
          },
          {
            header: "Peso (kg)",
            name: PESO,
            render: renderPeso,
          },
          {
            header: "IMC",
            name: "imc",
            render: renderImc,
          },
          {
            header: "Data do cálculo",
            name: "dt_calculo",
            render: renderDataCalculo,
          },
        ]}
        rows={data?.historico ?? []}
        loading={loading}
      />
    </>
  );
}
