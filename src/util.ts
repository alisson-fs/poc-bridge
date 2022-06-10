export function calcularImc(altura: number, peso: number) {
  var resultado = 0;
  console.log(altura, peso)
  if (altura && peso) {
    resultado = peso / (altura / 100) ** 2;
  }
  return resultado;
}
