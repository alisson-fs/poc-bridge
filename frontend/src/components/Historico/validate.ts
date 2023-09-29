import { ErrorObject } from "../../validation/model";
import {
  validateGreaterThan,
  validateOnlyNumbers,
  validateRequired,
} from "../../validation/validate";
import { HistoricoFormModel } from "./Historico";
import { TAMANHO } from "./model";

export function validateTamanho(values: HistoricoFormModel) {
  var errors: ErrorObject<HistoricoFormModel> = {};
  errors = validateRequired(errors, values, TAMANHO);
  errors = validateOnlyNumbers(errors, values, TAMANHO);
  errors = validateGreaterThan(errors, values, TAMANHO, 0);
  return errors;
}
