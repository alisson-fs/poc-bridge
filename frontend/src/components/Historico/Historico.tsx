import { Button, DataTable, Heading, HFlow, VFlow } from "bold-ui";
import { useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import {
  Imc,
  useHistoricoBetweenLazyQuery,
  useHistoricoLazyQuery,
} from "../../utils/__generated__/graphql";
import { CampoTexto } from "../CampoTexto";
import { ALTURA, PESO } from "../Fomulario/model";
import { Periodo } from "../Periodo";
import { TAMANHO } from "./model";
import { validateTamanho } from "./validate";

export interface HistoricoFormModel {
  tamanho?: Number;
}

export function Historico(values: HistoricoFormModel) {
  const handleSubmit = (values: HistoricoFormModel) => {
    setTamanho(Number(values.tamanho));
    hasDataInicioAndDataFim()
      ? executeHistoricoBetweenQuery()
      : executeHistoricoQuery();
  };

  const handleDataInicio = (date: Date | null) => {
    setInicio(date);
  };

  const handleDataFim = (date: Date | null) => {
    setDataFim(date);
  };

  const hasDataInicioAndDataFim = () => {
    return inicio != null && fim != null;
  };

  const [inicio, setInicio] = useState<Date | null>(null);
  const [fim, setDataFim] = useState<Date | null>(null);
  const [tamanho, setTamanho] = useState<number>(0);

  const dataInicio = inicio?.toISOString();
  const dataFim = fim?.toISOString();

  const [
    executeHistoricoQuery,
    { data: dataHistorico, loading: loadingHistorico },
  ] = useHistoricoLazyQuery({
    variables: { tamanho },
    fetchPolicy: "network-only",
  });
  const [
    executeHistoricoBetweenQuery,
    { data: dataHistoricoBetween, loading: loadingHistoricoBetween },
  ] = useHistoricoBetweenLazyQuery({
    variables: { dataInicio, dataFim, tamanho },
    fetchPolicy: "network-only",
  });

  const rows = hasDataInicioAndDataFim()
    ? dataHistoricoBetween?.historicoBetween
    : dataHistorico?.historico;
  const loading = hasDataInicioAndDataFim()
    ? loadingHistoricoBetween
    : loadingHistorico;

  const renderAltura = (imc: Imc) => imc.altura;
  const renderPeso = (imc: Imc) => imc.peso;
  const renderImc = (imc: Imc) => imc.imc;
  const renderDataCalculo = (imc: Imc) => imc.data;

  const renderForm = (formProps: FormRenderProps<HistoricoFormModel>) => {
    const { handleSubmit } = formProps;

    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <Heading level={2}>Histórico</Heading>
          <Periodo
            dataInicio={inicio}
            dataFim={fim}
            handleDataInicio={handleDataInicio}
            handleDataFim={handleDataFim}
          />
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
                name: "data",
                render: renderDataCalculo,
              },
            ]}
            rows={rows ?? []}
            loading={loading}
          />
          <HFlow hSpacing={5} alignItems="center">
            <CampoTexto for={TAMANHO} name={TAMANHO} label="Tamanho: " inline />
            <Button
              onClick={() => {
                handleSubmit();
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
