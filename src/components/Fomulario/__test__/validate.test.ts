import { ErrorObject } from "../../../validation/model";
import { IMCFormModel } from "../Formulario";
import * as validators from "../../../validation/validate";
import { validateAltura, validatePeso } from "../validate";

const ALTURA = "altura";
const PESO = "peso";
const LIMIT = 0;
const errors: ErrorObject<IMCFormModel> = {};

describe("validate", () => {
  describe("validateAltura", () => {
    const values: IMCFormModel = { altura: "173" };

    it("quando validateAltura for chamado, deve chamar o validateRequired com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateRequired");
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, ALTURA);
    });

    it("quando validateAltura for chamado, deve chamar o validateOnlyNumbers com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateOnlyNumbers");
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, ALTURA);
    });

    it("quando validateAltura for chamado, deve chamar o validateGreaterThan com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateGreaterThan");
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, ALTURA, LIMIT);
    });
  });

  describe("validatePeso", () => {
    const values: IMCFormModel = { peso: "70" };

    it("quando validatePeso for chamado, deve chamar o validateRequired com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateRequired");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, PESO);
    });

    it("quando validatePeso for chamado, deve chamar o validateOnlyNumbers com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateOnlyNumbers");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, PESO);
    });

    it("quando validatePeso for chamado, deve chamar o validateGreaterThan com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateGreaterThan");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalledWith(errors, values, PESO, LIMIT);
    });
  });
});
