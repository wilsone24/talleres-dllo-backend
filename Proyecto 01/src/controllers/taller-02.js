/*
Punto#1 findMax
Desarrolle una funcion llamada findMax que reciba una lista de números porparámetro y retorne el mayor valor.
*/

const findMax = function (numeros) {
  if (numeros.length === 0) {
    return null;
  }
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
};

/*
Punto#2 includes
Desarrolle una funcion llamada includes que reciba una lista de números y un numero por parámetro y retorne un booleano representando si el numero se encuentra en la lista.
*/

const includes = function (numeros, numero) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return true;
    }
  }
  return false;
};

/*
Punto#3 sum
Desarrolle una funcion llamada sum que reciba una lista de números y retorne la suma de los elementos de la lista.
*/

const sum = function (numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
};

/*
Punto#4 missingNumbers
Desarrolle una funcion llamada missingNumbers que reciba una lista de númerosy retorne una lista de los números faltantes entre el menor y mayor de la lista.

*/

//Funcion Auxiliar
const findMin = function (numeros) {
  if (numeros.length === 0) {
    return null;
  }
  let min = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < min) {
      min = numeros[i];
    }
  }
  return min;
};

// Use findMin,findMax y includes que son funciones que ya yo habia hecho anteriormente

const missingNumbers = function (numeros) {
  if (numeros.length === 0) {
    return [];
  }
  const min = findMin(numeros);
  const max = findMax(numeros);
  const missing = [];
  for (let i = min; i <= max; i++) {
    if (!includes(numeros, i)) {
      missing[missing.length] = i;
    }
  }
  return missing;
};
