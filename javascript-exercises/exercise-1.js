// Punto 1.
let respuesta = prompt("¿Eres bellisimo/a?");
respuesta = respuesta.toLowerCase();
if (respuesta === "sí" || respuesta === "si") {
  console.log("Ciertamente");
} else if (respuesta === "no") {
  console.log("No te creo");
}

// Punto 2.
let numero = prompt("Ingresa un número");
if (numero % 2 === 0) {
  console.log(`${numero} es divisible entre 2.`);
} else if (numero % 2 !== 0) {
  console.log(`${numero} no es divisible entre 2.`);
}

// --------------------------------------------------------------------------------

// Punto 3.

let numeroo = prompt("Ingresa un número");
if (numeroo % 2 === 0) {
  alert(`${numeroo} es par.`);
} else if (numeroo % 2 !== 0) {
  alert(`${numeroo} no es par.`);
}

// --------------------------------------------------------------------------------

// Punto 4.

let numCliente = prompt("Ingrese el número de cliente");
if (numCliente === "1000") {
  alert("Ganaste un premio");
} else {
  alert("Lo sentimos, sigue participando.");
}

// --------------------------------------------------------------------------------

// Punto 5

let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
if (num1 < num2) {
  alert(num1 + " es menor");
} else {
  alert(num2 + " es menor");
}

// --------------------------------------------------------------------------------

// Punto 6

let numo1 = prompt("Ingrese el primer numero");
let numo2 = prompt("Ingrese el segundo numero");
let numo3 = prompt("Ingrese el tercer numero");
const numeros = [numo1, numo2, numo3];
alert("El número máximo es " + Math.max(...numeros));

// --------------------------------------------------------------------------------

// Punto 7

let dia = prompt("Ingresa un día de la semana");
let diasEspeciales = [""];
switch (dia) {
  case "lunes":
    alert("Mensaje 1");
    break;
  case "viernes":
    alert("Mensaje 2");
    break;

  case "sabado":
    alert("Mensaje 3");
    break;

  case "domingo":
    alert("Mensaje 3");
    break;

  default:
    alert("Mensaje 4");
    break;
}

// --------------------------------------------------------------------------------

// Punto 8

let calificacion = prompt("Ingresa una calificación");
if ((calificacion >= 1) & (calificacion <= 10)) {
  if (calificacion < 6) {
    alert("reprobado");
  } else if (calificacion <= 8) {
    alert("regular");
  } else if (calificacion == 9) {
    alert("Bien");
  } else {
    alert("excelente");
  }
} else {
  alert("Nota inválida.");
}

// --------------------------------------------------------------------------------

// Punto 9

let topping = prompt("Ingrese el topping que desea");
topping = topping.toLowerCase();
const costoTopping = {
  oreo: 10,
  kitkat: 15,
  brownie: 20,
};
if (Object.keys(costoTopping).includes(topping)) {
  alert(`El costo total es ${costoTopping[topping] + 50} MXN`);
} else {
  alert("No contamos con ese topping, el costo total es 50 MXN");
}

// --------------------------------------------------------------------------------

// Punto 10

let carrera = prompt(
  "Inresa el nivel educativo del programa (course, carrera o master"
);
carrera = carrera.toLowerCase();

let beca = prompt(
  "Cuál beca tienes? (beca google, beca facebook o beca Jesua)"
);
beca = beca.toLocaleLowerCase();

let costoMensual = {
  course: 4999,
  carrera: 3999,
  master: 2999,
};
let descuentos = {
  "beca facebook": 0.2,
  "beca google": 0.15,
  "beca jesua": 0.5,
};
let duracion = {
  course: 2,
  carrera: 6,
  master: 12,
};
let d;
if (Object.keys(costoMensual).includes(carrera)) {
  if (Object.keys(descuentos).includes(beca)) {
    d = descuentos[beca];
  } else {
    d = 0;
    alert("No existe la beca");
  }
  alert(
    `Costo total: ${
      (costoMensual[carrera] - costoMensual[carrera] * d) * duracion[carrera]
    }MXN`
  );
} else {
  alert("Curso inexistente");
}
// }

// --------------------------------------------------------------------------------

// Punto 10

let tipoVehiculo = prompt("ingrese el tipo de vehiculo");
let kilometrosRecorridos = prompt("Ingrese los kilómetros recorridos");
let preciosKilometro = {
  coche: 0.2,
  moto: 0.1,
  autobus: 0.5,
};
let aumentoPrecio;
if ((kilometrosRecorridos >= 0) & (kilometrosRecorridos <= 100)) {
  aumentoPrecio = 5;
} else if (kilometrosRecorridos > 100) {
  aumentoPrecio = 10;
}
alert(
  `Total a pagar ${
    preciosKilometro[tipoVehiculo] * kilometrosRecorridos + aumentoPrecio
  }`
);
