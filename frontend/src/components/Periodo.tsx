import { css } from "@emotion/core";
import { DateField, Heading, HFlow } from "bold-ui";

interface PeriodoProps {
  dataInicio?: Date;
  dataFim?: Date;
  handleDataInicio: (date: Date | null) => void;
  handleDataFim: (date: Date | null) => void;
}

export function Periodo(props: PeriodoProps) {
  const { dataInicio, dataFim, handleDataInicio, handleDataFim } = props;

  return (
    <>
      <Heading level={3}>Período: </Heading>
      <HFlow hSpacing={1} alignItems="center">
        <DateField
          label="Inicio:"
          onChange={handleDataInicio}
          value={dataInicio}
          inline
          style={styles.dateFieldStyles}
        />
        <DateField
          label="Fim:"
          onChange={handleDataFim}
          value={dataFim}
          inline
          style={styles.dateFieldStyles}
        />
      </HFlow>
    </>
  );
}

const styles = {
  dateFieldStyles: css`
    width: auto;
  `,
};
