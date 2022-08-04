import { calcularImc } from "../util";

describe("util", () => {
  describe("calcularImc", () => {
    it("quando calcularImc for chamado deve retornar o imc esperado", () => {
      const result = calcularImc(100, 50);
      expect(result).toBe(50);
    });
  });
});
