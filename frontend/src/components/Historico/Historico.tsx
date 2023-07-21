import { Button, DataTable, Heading, HFlow, VFlow } from "bold-ui";
import { Form, FormRenderProps } from "react-final-form";
import { Imc, useHistoricoLazyQuery } from "../../utils/__generated__/graphql";
import { CampoTexto } from "../CampoTexto";
import { ALTURA, PESO } from "../Fomulario/model";
import { Periodo } from "../Periodo";
import { FIM, INICIO, TAMANHO } from "./model";
import { validateTamanho } from "./validate";

export interface HistoricoFormModel {
  dataInicio?: Date;
  dataFim?: Date;
  tamanho: number;
}

export function Historico() {
  const handleSubmit = (values: HistoricoFormModel) => {
    executeHistoricoQuery({
      variables: {
        input: {
          dataInicio: values?.dataInicio?.toISOString(),
          dataFim: values?.dataFim?.toISOString(),
          tamanho: values.tamanho,
        },
      },
      fetchPolicy: "network-only",
    });
  };

  const [executeHistoricoQuery, { data, loading }] = useHistoricoLazyQuery({});

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
          <Periodo nameInicio={INICIO} nameFim={FIM} />
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
            rows={data?.historico ?? []}
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
