import { Button, DataTable, VFlow } from "bold-ui";
import {
  Imc,
  useImcLazyQuery
} from "../utils/__generated__/graphql";
import { ALTURA, PESO } from "./Fomulario/model";

export function Historico() {
  const [executeImcQuery, { data, loading }] = useImcLazyQuery();

  console.log(data, loading);

  const renderAltura = (imc: Imc) => imc.altura;
  const renderPeso = (imc: Imc) => imc.peso;
  const renderImc = (imc: Imc) => imc.imc;
  const renderDataCalculo = (imc: Imc) => imc.dt_calculo;

  return (
    <>
      <VFlow>
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
        <Button onClick={() => executeImcQuery()} kind="primary">
          Gerar histórico
        </Button>
      </VFlow>
    </>
  );
}
