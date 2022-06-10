import { Field } from "react-final-form";

interface CampoTextoProps {
  for: string;
  text: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  return (
    <>
      <label htmlFor={props.for}>{props.text}</label>
      <br />
      <Field name={props.name} component="input" />
      <br />
    </>
  );
}
