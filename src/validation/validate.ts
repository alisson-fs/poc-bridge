import { IMCFormModel } from "../components/Formulario";
import { ALTURA, PESO } from "../model";
import {
  ErrorObject,
  REQUIRED,
  ONLY_NUMBERS,
  GREATER_THAN,
} from "../validation/model";

function validateRequired<Type>(errors: ErrorObject<Type>, values: Type, name: keyof Type) {
  if (!values[name]) {
    errors[name] = REQUIRED;
  }
  return errors;
}

function validateOnlyNumbers<Type>(errors: ErrorObject<Type>, values: Type, name: keyof Type) {
  if (values[name] && isNaN(Number(values[name]))) {
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
    errors[name] = GREATER_THAN + limit;
  }
  return errors;
}

function validateAltura(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  errors = validateRequired(errors, values, ALTURA);
  errors = validateOnlyNumbers(errors, values, ALTURA);
  errors = validateGreaterThan(errors, values, ALTURA, 0);
  return errors;
}

function validatePeso(errors: ErrorObject<IMCFormModel>, values: IMCFormModel) {
  errors = validateRequired(errors, values, PESO);
  errors = validateOnlyNumbers(errors, values, PESO);
  errors = validateGreaterThan(errors, values, PESO, 0);
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
