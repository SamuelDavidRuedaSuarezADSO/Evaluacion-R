import Calculadora from './modulos.js';
let ver = true;
let num1;
let num2;

const calc = new Calculadora();

let x = calc.suma(num1, num2);

while (ver) {
  let opc = prompt("Selecciones que operacion desea hacer: (a) sumar (b) restar (c) multiplicar (d) dividir");
  switch (opc) {
    case "a":
      num1 = parseInt(prompt("Ingrese el primer numero:"));
      num2 = parseInt(prompt("Ingrese el segundo numero:"));
      console.log(calc.suma(num1, num2));
      ver = false;
      break;
    case "b":
      num1 = parseInt(prompt("Ingrese el primer numero:"));
      num2 = parseInt(prompt("Ingrese el segundo numero:"))
      console.log(calc.resta(num1, num2));
      ver = false;
      break;
    case "c":
      num1 = parseInt(prompt("Ingrese el primer numero:"));
      num2 = parseInt(prompt("Ingrese el segundo numero:"))
      console.log(calc.multiplicacion(num1, num2));
      ver = false;
      break;
    case "d":
      num1 = parseInt(prompt("Ingrese el primer numero:"));
      num2 = parseInt(prompt("Ingrese el segundo numero:"))
      console.log(calc.division(num1, num2));
      ver = false;
      break;
    default:
      alert("Error: Valor no valdido");
  }
}