import { css } from "@emotion/react";
import { DateField, Heading, HFlow } from "bold-ui";
import { useField } from "react-final-form";

interface CampoPeriodoProps {
  nameInicio: string;
  nameFim: string;
}

export function CampoPeriodo(props: CampoPeriodoProps) {
  const { nameInicio, nameFim } = props;

  const { input: { value: valueInicio, onChange: onChangeInicio } } = useField(nameInicio);

  const { input: { value: valueFim, onChange: onChangeFim } } = useField(nameFim);

  return (
    <>
      <Heading level={3}>Período: </Heading>
      <HFlow hSpacing={1} alignItems="center">
        <DateField
          name={nameInicio}
          label="Inicio:"
          value={valueInicio}
          onChange={onChangeInicio}
          inline
          style={styles.dateFieldStyles}
        />
        <DateField
          name={nameFim}
          label="Fim:"
          value={valueFim}
          onChange={onChangeFim}
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
