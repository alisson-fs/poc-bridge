import { ALTURA, PESO } from "./model";
import { ErrorObject } from "../../validation/model";
import {
  validateRequired,
  validateOnlyNumbers,
  validateGreaterThan,
} from "../../validation/validate";
import { IMCFormModel } from "./Formulario";

export function validateAltura(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  var error;
  error = validateRequired(errors, values, ALTURA);
  error = validateOnlyNumbers(errors, values, ALTURA);
  error = validateGreaterThan(errors, values, ALTURA, 0);
  return error;
}

export function validatePeso(
  errors: ErrorObject<IMCFormModel>,
  values: IMCFormModel
) {
  var error;
  error = validateRequired(errors, values, PESO);
  error = validateOnlyNumbers(errors, values, PESO);
  error = validateGreaterThan(errors, values, PESO, 0);
  return error;
}

export function validateIMC(values: IMCFormModel) {
  var errors: ErrorObject<IMCFormModel> = {};
  errors = validateAltura(errors, values);
  errors = validatePeso(errors, values);
  return errors;
}
