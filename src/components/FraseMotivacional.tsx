import { Text } from "bold-ui";
import { useContext } from "react";
import { FraseMotivacionalContext } from "../App";
import React from "react";

export function FraseMotivacional() {
  const { frase1, frase2 } = useContext(FraseMotivacionalContext);
  return (
    <>
      <Text
        fontSize={1}
        fontWeight="bold"
        style={{ position: "absolute", left: "35%", top: "3%" }}
      >
        {frase1}
      </Text>
      <Text
        fontSize={1}
        fontWeight="bold"
        style={{ position: "absolute", left: "42%", top: "95%" }}
      >
        {frase2}
      </Text>
    </>
  );
}
