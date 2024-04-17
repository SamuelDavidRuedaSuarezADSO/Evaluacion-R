const palabraMasLarga = (...palabras) => {
  let palabraMayor = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabraMayor.length) {
      palabraMayor = palabras[i];
    }
  }

  return palabraMayor;
};

function ingresar() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de palabras:"));
  let palabras = [];

  for (let i = 0; i < cantidad; i++) {
    let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
    palabras.push(palabra);
  }

  let palabraMayor = palabraMasLarga(...palabras);

  console.log(`La palabra más larga ingresada es: ${palabraMayor}`);
}

ingresar();
