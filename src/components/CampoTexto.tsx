import { TextField } from "bold-ui";
import React from "react";
import { useField } from "react-final-form";

interface CampoTextoProps {
  for: string;
  label: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  const {meta, input} = useField(props.name);
  return (
    <TextField
      label={props.label}
      error={meta.error}
      value={input.value}
      onChange={input.onChange}
      required
    />
  );
}
