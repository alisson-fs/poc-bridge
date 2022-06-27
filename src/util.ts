export function calcularImc(altura: number, peso: number) {
  var resultado = 0;
  resultado = peso / (altura / 100) ** 2;
  return resultado;
}
