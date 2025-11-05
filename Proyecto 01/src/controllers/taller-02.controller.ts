export const findMax = (numeros: number[]): number | undefined => {
  if (numeros.length === 0) return undefined;
  let max = numeros[0];
  for (const num of numeros) if (num > max) max = num;
  return max;
};

export const includes = (numeros: number[], numero: number): boolean => {
  for (const element of numeros) if (element === numero) return true;
  return false;
};

export const sum = (numeros: number[]): number => {
  let total = 0;
  for (const element of numeros) total += element;
  return total;
};

const findMin = (numeros: number[]): number | undefined => {
  if (numeros.length === 0) {
    return undefined;
  }
  let min = numeros[0];
  for (const n of numeros) if (n < min) min = n;
  return min;
};

export const missingNumbers = (numeros: number[]): number[] => {
  const min = findMin(numeros);
  const max = findMax(numeros);
  const missing: number[] = [];
  if (min === undefined || max === undefined) {
    return [];
  }
  for (let i = min; i <= max; i++) {
    if (!includes(numeros, i)) {
      missing[missing.length] = i;
    }
  }
  return missing;
};
