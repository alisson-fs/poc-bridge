import { ChangeEvent } from "react";

interface CampoTextoProps {
  for: string;
  text: string;
  id: string;
  name: string;
  onChange(formValue: string): void
}

export function CampoTexto(props: CampoTextoProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.currentTarget.value)
  }

  return (
    <>
      <label htmlFor={props.for}>{props.text}</label><br />
      <input type="text" id={props.id} name={props.name} onChange={handleChange}/><br />
    </>
  );
}
