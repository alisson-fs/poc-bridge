import { ErrorObject } from "../../validation/model";
import {
  validateGreaterThan,
  validateOnlyNumbers,
  validateRequired,
} from "../../validation/validate";
import { HistoricoViewFormModel } from "./HistoricoView";
import { TAMANHO } from "./model";

export function validateTamanho(values: HistoricoViewFormModel) {
  var errors: ErrorObject<HistoricoViewFormModel> = {};
  errors = validateRequired(errors, values, TAMANHO);
  errors = validateOnlyNumbers(errors, values, TAMANHO);
  errors = validateGreaterThan(errors, values, TAMANHO, 0);
  return errors;
}
