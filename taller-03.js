/* 
Punto #1. desglosarString

Desarrolle una funcion llamada desglosarString que reciba una string, y la string "vocales" o "consonantes", y retorne la cantidad de vocales o consonantes de la string recibida.

*/
let desglosarString = function (string, string2) {
  if (string2 !== "vocales" && string2 !== "consonantes") {
    return null;
  }
  let vocales = "aeiou";
  let consonantes = "bcdfghjklmnñpqrstvwxyz";

  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (string2 === "vocales" && vocales.includes(char)) {
      contador++;
    } else if (string2 === "consonantes" && consonantes.includes(char)) {
      contador++;
    }
  }
  return contador;
};

console.log(desglosarString("murcielagos", "vocales")); // 5
console.log(desglosarString("murcielagos", "consonantes")); // 6

/* 
Punto #2. twoSum

Desarrolle una funcion llamada twoSum que reciba una lista de numero enteros y otro numero entero y retorne los indices de los numeros del arreglo que sumados sean el otro numero.

*/

let twoSum = function (numeros, numero) {
  if (numeros.length < 2 || numero == null) {
    return null;
  }
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] + numeros[j] === numero) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 4, 2], 6)); // [1, 2]

/* 
Punto #3. conversionRomana

Desarrolle una funcion llamada conversionRomana que reciba una string de cifras romanas y retorne el equivalente en cifras arábigas.

*/

let conversionRomana = function (romano) {
  if (typeof romano !== "string" || romano.length === 0) {
    return null;
  }
  const valores = {
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

  for (let i = romano.length - 1; i >= 0; i--) {
    const actual = valores[romano[i]];
    if (actual < anterior) {
      total -= actual;
    } else {
      total += actual;
    }
    anterior = actual;
  }
  return total;
};

console.log(conversionRomana("III")); // 3
console.log(conversionRomana("XIV")); // 14
console.log(conversionRomana("MMXXIV")); // 2024
console.log(conversionRomana("MCMXCVII")); // 1997

/* 
Punto #3. descomposicion

Desarrolle una funcion llamada descomposicion que reciba una string de palabras separada por comas, donde la primera palabra es la palabra a descomponer y el resto son el diccionario a utilizar. La función debe retornar las dos palabras del diccionario que compongan la palabra a descomponer.

*/

let descomposicion = function (string) {
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
  return null;
};

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu")); // ["mal", "humor"]
