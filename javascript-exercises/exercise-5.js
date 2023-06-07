let semaforo = document.getElementById("semaforo");

let amarillo = "#ffff00";
let verde = "#008000";
let rojo = "#ff0000";
let colorActual = verde;

console.log(semaforo);

function change_color() {
  console.log();
  switch (colorActual) {
    case verde:
      colorActual = amarillo;
      semaforo.style.background = amarillo;
      break;
    case amarillo:
      colorActual = rojo;
      semaforo.style.background = rojo;

      break;
    case rojo:
      colorActual = verde;
      semaforo.style.background = verde;
      break;
  }
}

setInterval(change_color, 5000);
