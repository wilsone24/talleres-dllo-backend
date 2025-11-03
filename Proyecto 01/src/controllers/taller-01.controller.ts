export const convertidorTemp = (temperatura_grados: number): number =>
  temperatura_grados * (9 / 5) + 32;

export const resolvedor = (
  a: number,
  b: number,
  c: number,
  signo: "+" | "-"
): number | undefined => {
  let numerador_izquierda = -b;
  let discriminante = b ** 2 - 4 * a * c;
  let numerador_derecha = discriminante ** (1 / 2);
  let denominador = 2 * a;

  if (discriminante < 0) return undefined;

  return signo === "+"
    ? (numerador_izquierda + numerador_derecha) / denominador
    : (numerador_izquierda - numerador_derecha) / denominador;
};

export const mejorParidad = (numero: number): boolean => numero % 2 === 0;

export const peorParidad = (
  numero: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
): boolean => {
  if (numero === 0) return true;
  if (numero === 1) return false;
  if (numero === 2) return true;
  if (numero === 3) return false;
  if (numero === 4) return true;
  if (numero === 5) return false;
  if (numero === 6) return true;
  if (numero === 7) return false;
  if (numero === 8) return true;
  if (numero === 9) return false;
  if (numero === 10) return true;
  return false;
};
