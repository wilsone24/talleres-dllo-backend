export const findMax = (numeros: number[]): number | undefined => {
  if (numeros.length === 0) {
    return undefined;
  }
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
};

export const includes = (numeros: number[], numero: number): boolean => {
  for (const element of numeros) {
    if (element === numero) {
      return true;
    }
  }
  return false;
};

export const sum = (numeros: number[]): number => {
  let total = 0;
  for (const element of numeros) {
    total += element;
  }
  return total;
};

const findMin = (numeros: number[]): number | undefined => {
  if (numeros.length === 0) {
    return undefined;
  }
  let min = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
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
