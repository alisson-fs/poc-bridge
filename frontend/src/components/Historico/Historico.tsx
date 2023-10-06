import { Button, DataTable, Heading, HFlow, VFlow } from "bold-ui";
import { Form, FormRenderProps } from "react-final-form";
import { Imc, useHistoricoLazyQuery } from "../../utils/__generated__/graphql";
import { CampoPeriodo } from "../CampoPeriodo";
import { CampoTexto } from "../CampoTexto";
import { ALTURA, PESO } from "../Fomulario/model";
import { FIM, INICIO, TAMANHO } from "./model";
import { validateTamanho } from "./validate";

export interface HistoricoFormModel {
  dataInicio?: Date;
  dataFim?: Date;
  tamanho: number;
}

const renderAltura = (imc: Imc) => imc.altura;
const renderPeso = (imc: Imc) => imc.peso;
const renderImc = (imc: Imc) => imc.imc;
const renderDataCalculo = (imc: Imc) => imc.data;

export function Historico() {
  const handleSubmit = (values: HistoricoFormModel) => {
    console.log(values);
    executeHistoricoQuery({
      variables: {
        input: {
          dataInicio: values.dataInicio?.valueOf(),
          dataFim: values.dataFim?.valueOf(),
          tamanho: values.tamanho,
        },
      },
      fetchPolicy: "cache-and-network",
    });
  };

  const [executeHistoricoQuery, { data, loading }] = useHistoricoLazyQuery({});

  const renderForm = (formProps: FormRenderProps<HistoricoFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <Heading level={2}>Histórico</Heading>
          <CampoPeriodo nameInicio={INICIO} nameFim={FIM} />
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
            <Button type="submit" kind="primary">
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
