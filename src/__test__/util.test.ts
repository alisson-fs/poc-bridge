import { calcularImc } from "../util";

describe("util", () => {
  describe("calcularImc", () => {
    it("quando validateAltura for chamado deve chamar o validateRequired com os parametros esperados", () => {
      const result = calcularImc(100, 50);
      expect(result).toBe(50);
    });
  });
});
