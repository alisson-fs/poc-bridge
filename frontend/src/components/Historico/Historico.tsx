import { Button, DataTable, DateField, Heading, HFlow, VFlow } from "bold-ui";
import { useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import { Imc, useImcLazyQuery } from "../../utils/__generated__/graphql";
import { CampoTexto } from "../CampoTexto";
import { ALTURA, PESO } from "../Fomulario/model";
import { Periodo } from "../Periodo";
import { TAMANHO } from "./model";
import { validateTamanho } from "./validate";

export interface HistoricoFormModel {
  tamanho?: Number;
}

export function Historico(values: HistoricoFormModel) {
  function handleSubmit(values: HistoricoFormModel) {
    setTamanho(Number(values.tamanho));
  }
  const [tamanho, setTamanho] = useState<number>(0);
  const [executeImcQuery, { data, loading }] = useImcLazyQuery({
    variables: { tamanho },
    fetchPolicy: "network-only",
  });

  const renderAltura = (imc: Imc) => imc.altura;
  const renderPeso = (imc: Imc) => imc.peso;
  const renderImc = (imc: Imc) => imc.imc;
  const renderDataCalculo = (imc: Imc) => imc.dt_calculo;

  const renderForm = (formProps: FormRenderProps<HistoricoFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <Heading level={2}>Histórico</Heading>
          <Periodo></Periodo>
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
          <HFlow hSpacing={5} alignItems="center">
            <CampoTexto for={TAMANHO} name={TAMANHO} label="Tamanho: " inline />
            <Button
              onClick={() => {
                handleSubmit();
                executeImcQuery();
              }}
              kind="primary"
            >
              Gerar histórico
            </Button>
          </HFlow>
        </VFlow>
      </form>
    );
  };

  return (
    <>
      <Form<HistoricoFormModel>
        onSubmit={handleSubmit}
        render={renderForm}
        validate={validateTamanho}
      />
    </>
  );
}
