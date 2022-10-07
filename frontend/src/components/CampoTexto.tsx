import { TextField } from "bold-ui";
import { useField } from "react-final-form";

interface CampoTextoProps {
  for: string;
  label: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  const { name, label } = props;
  const {
    meta: { error },
    input: { value, onChange },
  } = useField(name);
  return (
    <TextField
      label={label}
      error={error}
      value={value}
      onChange={onChange}
      clearable={false}
      required
    />
  );
}
