import { Field } from "react-final-form";

interface CampoTextoProps {
  for: string;
  text: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  return (
    <>
      <Field name={props.name} >
        {({ input, meta }) => (
          <div>
            <label htmlFor={props.for}>{props.text}</label><br />
            <input {...input} type="text"/>
            {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
          </div>
        )}
      </Field>
      <br />
    </>
  );
}
