const ejercicio1 = document.getElementById("ejercicio-1");
const ejercicio2 = document.getElementById("ejercicio-2");
const ejercicio3 = document.getElementById("ejercicio-3");
const ejercicio4 = document.getElementById("ejercicio-4");
const ejercicio5 = document.getElementById("ejercicio-5");

function callback1(log, message) {
  log(message);
}
ejercicio1.addEventListener("click", () => {
  callback1(console.warn, "😄😄");
});

function callback2(variable) {
  console.log(typeof variable, variable);
}
ejercicio2.addEventListener("click", () => {
  callback2("😭😭");
});

function callback3(a, b, operator) {
  console.log(operator(a, b));
}
ejercicio3.addEventListener("click", () => {
  callback3(5, 2, (a, b) => a * b);
});

function callback4(text, operator) {
  console.log(operator(text));
}
ejercicio4.addEventListener("click", () => {
  callback4("This a weird text", (t) => t.toUpperCase());
});
function callback5(lista, operator) {
  console.log(lista.filter(operator));
}
ejercicio5.addEventListener("click", () => {
  lista = [120, 80, 200, 100];
  callback5(lista, (t) => t / 60 > 2);
});
