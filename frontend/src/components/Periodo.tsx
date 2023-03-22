import { DateField, Heading, HFlow } from "bold-ui";

interface PeriodoProps {}

export function Periodo(props: PeriodoProps) {
  return (
    <HFlow hSpacing={1} alignItems="center">
      <Heading level={3}>Período: </Heading>
      <DateField
        name="inicio"
        onChange={function noRefCheck() {}}
        onClick={function noRefCheck() {}}
        onFocus={function noRefCheck() {}}
        transformTwoYearDigit={false}
        value={new Date("2023-02-10T03:00:00.000Z")}
      />
      <Heading level={3}> até </Heading>
      <DateField
        name="fim"
        onChange={function noRefCheck() {}}
        onClick={function noRefCheck() {}}
        onFocus={function noRefCheck() {}}
        transformTwoYearDigit={false}
        value={new Date("2023-02-10T03:00:00.000Z")}
      />
    </HFlow>
  );
}
