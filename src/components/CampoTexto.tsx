import { TextField } from "bold-ui";
import { Field, useField } from "react-final-form";

interface CampoTextoProps {
  for: string;
  label: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  const field = useField(props.name);
  console.log(field);
  return (
    <>
      <TextField
        label={props.label}
        error={field.meta.error}
        value={field.input.value}
        onChange={field.input.onChange}
        required
      />
    </>
  );
}
