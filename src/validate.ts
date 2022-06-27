import { IMCFormModel } from "./components/Formulario";
import { ErrorObject } from "./model";

const required = "Campo obrigatório.";
const onlyNumbers = "Deve ser um número.";
const greaterThanZero = "Deve ser um valor maior do que 0.";

export function validate(errors: ErrorObject<IMCFormModel>, values: IMCFormModel) {
  if (!values.altura) {
    errors.altura = required;
  } else {
    errors = validateAlturaOnlyNumbers(errors, values);
    errors = validateAlturaGreaterThanZero(errors, values);
  }

  if (!values.peso) {
    errors.peso = required;
  } else {
    errors = validatePesoOnlyNumbers(errors, values);
    errors = validatePesoGreaterThanZero(errors, values);
  }
  return errors;
}

export function validateAlturaOnlyNumbers(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  if (isNaN(values.altura)) {
    errors.altura = onlyNumbers;
  }
  return errors;
}

export function validatePesoOnlyNumbers(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  if (isNaN(values.peso)) {
    errors.peso = onlyNumbers;
  }
  return errors;
}

export function validateAlturaGreaterThanZero(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  if (values.altura <= 0) {
    errors.altura = greaterThanZero;
  }
  return errors;
}

export function validatePesoGreaterThanZero(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  if (values.peso <= 0) {
    errors.peso = greaterThanZero;
  }
  return errors;
}
