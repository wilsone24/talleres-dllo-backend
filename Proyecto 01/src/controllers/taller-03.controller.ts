export const desglosarString = (
  string: string,
  string2: "vocales" | "consonantes"
): number => {
  const conjunto = string2 === "vocales" ? "aeiou" : "bcdfghjklmnñpqrstvwxyz";
  let contador = 0;
  for (const char of string.toLowerCase())
    if (conjunto.includes(char)) contador++;
  return contador;
};

export const twoSum = (
  numeros: number[],
  numero: number
): number[] | undefined => {
  if (numeros.length < 2) return undefined;
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] + numeros[j] === numero) {
        return [i, j];
      }
    }
  }
  return undefined;
};

export const conversionRomana = (romano: string): number | undefined => {
  if (romano.length === 0) {
    return undefined;
  }
  const valores: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let anterior = 0;
  /* Poner undefined 
  const conversionRomana = (romano: string): number | undefined => {
  if (romano.length === 0) return undefined;

  const valores: Record<string, number> = { I:1,V:5,X:10,L:50,C:100,D:500,M:1000 };
  let total = 0, anterior = 0;

  for (let i = romano.length - 1; i >= 0; i--) {
    const actual = valores[romano[i].toUpperCase()];
    if (!actual) return undefined; // retorna undefined si hay caracteres inválidos
    if (actual < anterior) total -= actual;
    else total += actual;
    anterior = actual;
  }
  return total;
};
  */

  for (let i = romano.length - 1; i >= 0; i--) {
    const actual = valores[romano[i].toUpperCase()];
    if (actual < anterior) {
      total -= actual;
    } else {
      total += actual;
    }
    anterior = actual;
  }
  return total;
};

export const descomposicion = (string: string): string[] | undefined => {
  let partes = string.split(",");
  let palabra = partes[0];
  let diccionario = partes.slice(1);
  for (let i = 0; i < diccionario.length; i++) {
    for (let j = i + 1; j < diccionario.length; j++) {
      if (diccionario[i] + diccionario[j] === palabra) {
        return [diccionario[i], diccionario[j]];
      } else if (diccionario[j] + diccionario[i] === palabra) {
        return [diccionario[j], diccionario[i]];
      }
    }
  }
  return undefined;
};
