import { Button, DataTable, Heading, HFlow, useTheme, VFlow } from "bold-ui";
import { Form, FormRenderProps } from "react-final-form";
import { HISTORICO_PATH } from "../../model";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Imc, useHistoricoLazyQuery } from "../../utils/__generated__/graphql";
import { ALTURA, PESO } from "../CalculoIMC/model";
import { CampoPeriodo } from "../CampoPeriodo";
import { CampoTexto } from "../CampoTexto";
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

export function HistoricoView() {
  const handleSubmit = (values: HistoricoFormModel) => {
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
  const { url } = useRouteMatch();
  const history = useHistory();
  const theme = useTheme();

  const [executeHistoricoQuery, { data, loading }] = useHistoricoLazyQuery({});

  const handleGoBack = () => {
    history.push(url.replace(HISTORICO_PATH, ""));
  };

  const renderForm = (formProps: FormRenderProps<HistoricoFormModel>) => {
    const { handleSubmit } = formProps;
    return (
      <form onSubmit={handleSubmit}>
        <VFlow
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: theme.pallete.surface.main,
          }}
        >
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
          <CampoTexto for={TAMANHO} name={TAMANHO} label="Tamanho: " inline />
          <HFlow hSpacing={5} alignItems="center">
            <Button kind="primary" onClick={handleGoBack}>
              Voltar
            </Button>
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
