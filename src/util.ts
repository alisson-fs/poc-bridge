export function calcularImc(altura: number, peso: number) {
  return peso / (altura / 100) ** 2;
}
