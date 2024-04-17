// Ejercicio 1

export function validarTarjeta() {
  let tipoTarjeta = prompt("Ingresa tu tipo de tarjeta de crédito:");
  tipoTarjeta = tipoTarjeta.toLowerCase();
  let mensajes = [];

  switch (tipoTarjeta) {
    case "american express":
      let nomAE = parseInt(prompt("Ingresa la nomenclatura de la tarjeta:"));
      if (nomAE > 0) {
        if (/^[34,37]{2}[0-9]{1,13}$/.test(nomAE)) {
          mensajes.push("Si es American Express");
        }
        else {
          mensajes.push("ERROR: nomenclatura no válida o número de caracteres excedido");
        }
      }
      else {
        mensajes.push("ERROR: el valor dado no es válido");
      }
      break;
    case "diners club":
      let nomDC = parseInt(prompt("Ingresa la nomenclatura de la tarjeta:"));
      if (nomDC > 0) {
        if (/^[36,38;300,305]{2,3}[0-9]{1,12}$/.test(nomDC)) {
          mensajes.push("Si es Diners Club");
        }
        else {
          mensajes.push("ERROR: nomenclatura no válida o número de caracteres excedido");
        }
      }
      else {
        mensajes.push("ERROR: el valor dado no es válido");
      }
      break;
    case "discover":
      let nomDis = parseInt(prompt("Ingresa la nomenclatura de la tarjeta:"));
      if (nomDis > 0) {
        if (/^[6011]{4}[0-9]{1,14}$/.test(nomDis)) {
          mensajes.push("Si es Discover");
        }
        else {
          mensajes.push("ERROR: nomenclatura no válida o número de caracteres excedido");
        }
      }
      else {
        mensajes.push("ERROR: el valor dado no es válido");
      }
      break;
    case "mastercard":
      let nomMC = parseInt(prompt("Ingresa la nomenclatura de la tarjeta:"));
      if (nomMC > 0) {
        if (/^[51,55]{2}[0-9]{1,12}$/.test(nomMC)) {
          mensajes.push("Si es Mastercard");
        }
        else {
          mensajes.push("ERROR: nomenclatura no válida o número de caracteres excedido");
        }
      }
      else {
        mensajes.push("ERROR: el valor dado no es válido");
      }
      break;
    case "visa":
      let nomVisa = parseInt(prompt("Ingresa la nomenclatura de la tarjeta:"));
      if (nomVisa > 0) {
        if (/^[4][0-9]{1,15}$/.test(nomVisa)) {
          mensajes.push("Si es Visa");
        }
        else {
          mensajes.push("ERROR: nomenclatura no válida o número de caracteres excedido");
        }
      }
      else {
        mensajes.push("ERROR: el valor dado no es válido");
      }
      break;
    default:
      mensajes.push("ERROR: tipo de tarjeta no reconocido");
  }

  console.log(mensajes[0]);
}

// Ejercicio 2

export function ingresarNumeros(max) {
  let num = [];
  let verdad = true;
  while (verdad) {
    let n = parseInt(prompt("Ingresa el numero deseado"))
    num.push(n);
    if (num.length === max) {
      verdad = false;
    }
  }
  return num;
}

export function calcularSuma(numeros) {
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

export function encontrarPrimosPares(numeros) {
  let primos = [];
  let pares = [];
  let sumaPri = 0;
  let sumaPar = 0;

  for (let numero of numeros) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
    let esPrimo = true;
    if (numero === 1) {
      esPrimo = false;
    } else if (numero === 2) {
      primos.push(numero);
    } else {
      for (let j = 2; j <= Math.sqrt(numero); j++) {
        if (numero % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primos.push(numero);
      }
    }
  }

  for (let x = 0; x < primos.length; x++) {
    sumaPri += primos[x];
  }

  for (let y = 0; y < pares.length; y++) {
    sumaPar += pares[y];
  }

  let promPrimos = sumaPri / primos.length;
  let promPares = sumaPar / pares.length;

  return { primos, pares, promPrimos, promPares };
}


// EJERCICIO 5

export default class Calculadora {
  suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "ERROR: Ambos operandos deben ser números.";
    }
    return a + b;
  }

  resta(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "ERROR: Ambos operandos deben ser números.";
    }
    return a - b;
  }

  multiplicacion(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "ERROR: Ambos operandos deben ser números.";
    }
    return a * b;
  }

  division(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "ERROR: Ambos operandos deben ser números.";
    }
    if (b === 0) {
      return "ERROR: No se puede dividir por cero.";
    }
    return a / b;
  }
}
