import {
  ErrorObject,
  REQUIRED,
  ONLY_NUMBERS,
  GREATER_THAN,
} from "../validation/model";

export function validateRequired<Type>(errors: ErrorObject<Type>, values: Type, name: keyof Type) {
  if (!values[name]) {
    errors[name] = REQUIRED;
  }
  return errors;
}

export function validateOnlyNumbers<Type>(errors: ErrorObject<Type>, values: Type, name: keyof Type) {
  if (values[name] && isNaN(Number(values[name]))) {
    errors[name] = ONLY_NUMBERS;
  }
  return errors;
}

export function validateGreaterThan<Type>(
  errors: ErrorObject<Type>,
  values: Type,
  name: keyof Type,
  limit: number
) {
  if (values[name] && Number(values[name]) <= limit) {
    errors[name] = GREATER_THAN + limit;
  }
  return errors;
}
