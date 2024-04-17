
const ordenar = (...numeros) => {
  return numeros.sort((a, b) => b - a);
};

const mostrar = (numerosO) => {
  console.log("Números ordenados de mayor a menor:");
  console.table(numerosO);
};

function ingresar() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
  let numeros = [];

  for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
  }

  let numerosO = ordenar(...numeros);

  mostrar(numerosO);
}

ingresar();
