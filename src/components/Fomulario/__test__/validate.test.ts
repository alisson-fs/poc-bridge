import { ErrorObject } from "../../../validation/model";
import { IMCFormModel } from "../Formulario";
import * as validators from "../../../validation/validate";
import { validateAltura, validateIMC, validatePeso } from "../validate";
import * as validatorIMC from "../validate";

const ALTURA = "altura";
const PESO = "peso";

describe("validate", () => {
  describe("validateAltura", () => {
    it("quando validateAltura for chamado deve chamar o validateRequired com os parametros esperados", () => {
      const values: IMCFormModel = { altura: "173" };
      const spy = jest.spyOn(validators, "validateRequired");
      var errors: ErrorObject<IMCFormModel> = {};
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        ALTURA
      );
    });

    it("quando validateAltura for chamado deve chamar o validateOnlyNumbers com os parametros esperados", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "173" };
      const spy = jest.spyOn(validators, "validateOnlyNumbers");
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        ALTURA
      );
    });

    it("quando validateAltura for chamado deve chamar o validateGreaterThan com os parametros esperados", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "173" };
      const spy = jest.spyOn(validators, "validateGreaterThan");
      validateAltura(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        ALTURA,
        0
      );
    });
  });

  describe("validatePeso", () => {
    it("quando validatePeso for chamado deve chamar o validateRequired com os parametros esperados", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { peso: "70" };
      const spy = jest.spyOn(validators, "validateRequired");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        PESO
      );
    });

    it("quando validatePeso for chamado deve chamar o validateOnlyNumbers com os parametros esperados", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { peso: "70" };
      const spy = jest.spyOn(validators, "validateOnlyNumbers");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        PESO
      );
    });

    it("quando validatePeso for chamado deve chamar o validateGreaterThan com os parametros esperados", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { peso: "70" };
      const spy = jest.spyOn(validators, "validateGreaterThan");
      validatePeso(errors, values);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        PESO,
        0
      );
    });
  });
  
  describe("validateIMC", () => {
    it("quando validateIMC for chamado deve chamar o validateAltura", () => {
      const values: IMCFormModel = { altura: "173", peso: "70" };
      const spy = jest.spyOn(validatorIMC, "validateAltura");
      validateIMC(values);
      expect(spy).toHaveBeenCalled();
    });

    it("quando validateIMC for chamado deve chamar o validatePeso", () => {
      const values: IMCFormModel = { altura: "173", peso: "70" };
      const spy = jest.spyOn(validatorIMC, "validatePeso");
      validateIMC(values);
      expect(spy).toHaveBeenCalled();
    });
  });
});
