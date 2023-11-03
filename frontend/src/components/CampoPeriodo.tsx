import { DateField, Heading, HFlow } from "bold-ui";
import { Fragment } from "react";
import { useField } from "react-final-form";

interface CampoPeriodoProps {
  nameInicio: string;
  nameFim: string;
}

export function CampoPeriodo(props: CampoPeriodoProps) {
  const { nameInicio, nameFim } = props;

  const {
    input: { value: valueInicio, onChange: onChangeInicio },
  } = useField(nameInicio);

  const {
    input: { value: valueFim, onChange: onChangeFim },
  } = useField(nameFim);

  return (
    <Fragment>
      <Heading level={3}>Período: </Heading>
      <HFlow hSpacing={1} alignItems="center">
        <DateField
          name={nameInicio}
          label="Inicio:"
          value={valueInicio}
          onChange={onChangeInicio}
          inline
          style={{
            width: "auto" 
          }}
        />
        <DateField
          name={nameFim}
          label="Fim:"
          value={valueFim}
          onChange={onChangeFim}
          inline
          style={{
            width: "auto" 
          }}
        />
      </HFlow>
    </Fragment>
  );
}
