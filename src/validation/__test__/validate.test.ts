import { IMCFormModel } from "../../components/Fomulario/Formulario";
import { ErrorObject, GREATER_THAN, ONLY_NUMBERS, REQUIRED } from "../model";
import { validateGreaterThan, validateOnlyNumbers, validateRequired } from "../validate";

const ALTURA = "altura";

describe("validate", () => {
  describe("validateRequired", () => {
    it("quando o campo for null deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: null };
      errors = validateRequired(errors, values, ALTURA);
      expect(errors.altura).toBe(REQUIRED);
    });
    it("quando o campo for undefined deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = {};
      errors = validateRequired(errors, values, ALTURA);
      expect(errors.altura).toBe(REQUIRED);
    });
    it("quando o campo seja valido nao deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "173" };
      errors = validateRequired(errors, values, ALTURA);
      expect(errors.altura).toBeUndefined();
    });
  });

  describe("validateOnlyNumbers", () => {
    it("quando o campo nao for um numero deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "abc" };
      errors = validateOnlyNumbers(errors, values, ALTURA);
      expect(errors.altura).toBe(ONLY_NUMBERS);
    });
    it("quando o campo for um numero nao deve retornar erro", () => {});
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "173" };
      errors = validateOnlyNumbers(errors, values, ALTURA);
      expect(errors.altura).toBeUndefined();
  });

  describe("validateGreaterThan", () => {
    it("quando o campo for menor do que o valor definido deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "-1" };
      errors = validateGreaterThan(errors, values, ALTURA, 0);
      expect(errors.altura).toBe(GREATER_THAN + "0");
    });
    it("quando o campo for igual ao valor definidonao deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const limit = "0" 
      const values: IMCFormModel = { altura: limit };
      errors = validateGreaterThan(errors, values, ALTURA, 0);
      expect(errors.altura).toBe(GREATER_THAN + limit);
    });
    it("quando o campo for maior do que o valor definidonao nao deve retornar erro", () => {
      var errors: ErrorObject<IMCFormModel> = {};
      const values: IMCFormModel = { altura: "1" };
      errors = validateGreaterThan(errors, values, ALTURA, 0);
      expect(errors.altura).toBeUndefined();
    });
  });
});
