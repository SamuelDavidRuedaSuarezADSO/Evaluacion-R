import { ingresarNumeros, calcularSuma, encontrarPrimosPares } from './modulos.js';

let max = parseInt(prompt("Ingresa la cantidad de numeros maximos que deseas ingresar:"));
let num = ingresarNumeros(max);

let suma = calcularSuma(num);
let { primos, pares, promPrimos, promPares } = encontrarPrimosPares(num);

console.log("La suma total de los numeros: ", suma);
console.log("La cantidad de numeros primos es: ", primos.length);
console.log("La cantidad de numeros pares es: ", pares.length);
console.log("El promedio de los primos es: ", promPrimos.toFixed(0));
console.log("El promedio de los pares es: ", promPares);

