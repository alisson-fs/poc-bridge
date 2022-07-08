export const REQUIRED = "Campo obrigatório";
export const ONLY_NUMBERS = "Deve ser um número";
export const GREATER_THAN = "Deve ser um valor maior do que ";

export type ErrorObject<DataType> = {
    [key in keyof DataType]?: ErrorObject<DataType[key]> | string;
  };
