interface CampoTextoProps {
  for: string;
  text: string;
  id: string;
  name: string;
}

export function CampoTexto(props: CampoTextoProps) {
  return (
    <>
      <label htmlFor={props.for}>{props.text}</label><br />
      <input type="text" id={props.id} name={props.name} /><br />
    </>
  );
}
