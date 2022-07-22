import { IMCFormModel } from "../../components/Fomulario/Formulario";
import { ErrorObject, REQUIRED } from "../model";
import { validateRequired } from "../validate";

const ALTURA = "altura";

describe("validate", () => {
  
  describe("validateRequired", () => {
    it("null", () => {
        var errors: ErrorObject<IMCFormModel> = {};
        const values: IMCFormModel  = { altura: null };
        errors = validateRequired(errors, values, ALTURA);
        expect(errors.altura).toBe(REQUIRED);
    });
    it("undefined", () => {
        var errors: ErrorObject<IMCFormModel> = {};
        const values: IMCFormModel = {};
        errors = validateRequired(errors, values, ALTURA);
        expect(errors.altura).toBe(REQUIRED);
    });
    it("feliz", () => {
        var errors: ErrorObject<IMCFormModel> = {};
        const values: IMCFormModel = {altura: 173};
        errors = validateRequired(errors, values, ALTURA);
        expect(errors.altura).toBeUndefined();
    });
  });
});