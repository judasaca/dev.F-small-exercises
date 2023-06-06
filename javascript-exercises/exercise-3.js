//--------------------------------------------
// Punto 1.

let topNumber = parseInt(prompt("Ingresa un número mayor a 1"));
let i = 1;
while (i <= topNumber) {
  if (i % 5 == 0) {
    console.log(i);
  }
  i++;
}

//--------------------------------------------
// Punto 2.

let num1 = parseInt(prompt("ingresa un número entre 1 y 50"));
let num2 = parseInt(prompt("ingresa otra vez un número entre 1 y 50"));
let i = 1;
while (i <= 50) {
  if (i === num1 || i == num2) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
  i++;
}

//--------------------------------------------
// Punto 3.

let lista = [];
while (true) {
  try {
    let num = parseFloat(prompt("Ingresa un número"));
    if (num == 0) {
      break;
    }
    lista.push(num);
  } catch (error) {
    continue;
  }
}
console.log(lista);

//--------------------------------------------
// Punto 4.

let lista = [];
while (true) {
  let palabra = prompt("ingresa una palabra");
  if (palabra === "") {
    break;
  }
  lista.push(palabra);
}
console.log(lista.join(" "));

//--------------------------------------------
// Punto 5.

while (true) {
  let dia = prompt("ingresa un día de la semana");
  dia = dia.toLowerCase();
  if (dia === "domingo") {
    alert("Ve a descansar");
    break;
  } else {
    console.log(`${dia} es un muy bonito día para programar.`);
  }
}
