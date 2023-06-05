// --------------------------------------------------------------------------------

// Punto 1.

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.random());
}
console.log(array);

// Punto 2.

const cadena = prompt("Ingresa palabras separadas por comas.");
const lista = cadena.split(",");
console.log(lista);

// Punto 3.

let array2 = [10, 40, 30, 20, 15, 5];
array2.sort(function (a, b) {
  return a - b;
});
console.log(array2);
console.log(Math.min(...array2));
console.log(Math.max(...array2));
