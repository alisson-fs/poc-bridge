import { IMCFormModel } from "../components/Formulario";
import { ErrorObject } from "../validation/model";

const REQUIRED = "Campo obrigatório.";
const ONLY_NUMBERS = "Deve ser um número.";
const GREATER_THAN_ZERO = "Deve ser um valor maior do que 0.";

function validateRequired(errors: any, values: any, name: string) {
  if (!values[name]) {
    errors[name] = REQUIRED;
  }
  return errors;
}

function validateOnlyNumbers(errors: any, values: any, name: string) {
  if (values[name] && isNaN(values[name])) {
    errors[name] = ONLY_NUMBERS;
  }
  return errors;
}

function validateGreaterThan(
  errors: any,
  values: any,
  name: string,
  limit: number
) {
  if (values[name] && values[name] <= limit) {
    errors[name] = GREATER_THAN_ZERO;
  }
  return errors;
}

function validateAltura(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  errors = validateRequired(errors, values, "altura");
  errors = validateOnlyNumbers(errors, values, "altura");
  errors = validateGreaterThan(errors, values, "altura", 0);
  return errors;
}

function validatePeso(
  errors: ErrorObject<IMCFormModel>, 
  values: IMCFormModel
) {
  errors = validateRequired(errors, values, "peso");
  errors = validateOnlyNumbers(errors, values, "peso");
  errors = validateGreaterThan(errors, values, "peso", 0);
  return errors;
}

export function validate(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  errors = validateAltura(errors, values);
  errors = validatePeso(errors, values);
  debugger;
  return errors;
}
