import * as validators from "../../../validation/validate";
import { HistoricoFormModel } from "../Historico";
import { validateTamanho } from "../validate";

describe("validate", () => {
  describe("validateTamanho", () => {
    const values: HistoricoFormModel = { tamanho: 10 };

    it("quando validateTamanho for chamado, deve chamar o validateRequired com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateRequired");
      validateTamanho(values);
      expect(spy).toHaveBeenCalled();
    });

    it("quando validateTamanho for chamado, deve chamar o validateOnlyNumbers com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateOnlyNumbers");
      validateTamanho(values);
      expect(spy).toHaveBeenCalled();
    });

    it("quando validateTamanho for chamado, deve chamar o validateGreaterThan com os parametros esperados", () => {
      const spy = jest.spyOn(validators, "validateGreaterThan");
      validateTamanho(values);
      expect(spy).toHaveBeenCalled();
    });
  });
});
