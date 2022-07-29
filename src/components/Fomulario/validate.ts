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
  errors = validateRequired(errors, values, ALTURA);
  errors = validateOnlyNumbers(errors, values, ALTURA);
  errors = validateGreaterThan(errors, values, ALTURA, 0);
  return errors;
}

export function validatePeso(errors: ErrorObject<IMCFormModel>, values: IMCFormModel) {
  errors = validateRequired(errors, values, PESO);
  errors = validateOnlyNumbers(errors, values, PESO);
  errors = validateGreaterThan(errors, values, PESO, 0);
  return errors;
}

export function validateIMC(values: IMCFormModel) {
  var errors: ErrorObject<IMCFormModel> = {};
  errors = validateAltura(errors, values);
  errors = validatePeso(errors, values);
  return errors;
}
