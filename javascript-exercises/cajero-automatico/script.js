const prompt = require("prompt-sync")({ sigint: true });

var cuentas = [
  { nombre: "Mali", saldo: 200, password: "12345" },
  { nombre: "Gera", saldo: 290, password: "11111" },
  { nombre: "Maui", saldo: 67, password: "00000" },
];
let status = "inicial";
let loggedAccountId = -1;
while (true) {
  switch (status) {
    case "inicial":
      console.log("Por favor selcciona una de las cuentas: ");
      for (let i = 0; i < cuentas.length; i++) {
        const c = cuentas[i];
        console.log(`${i + 1}. ${c.nombre}`);
      }
      let m = parseInt(prompt("ingresando el número asociado: "));

      let password = prompt("Ahora ingresa la contraseña: ");
      if (cuentas[m - 1].password === password) {
        status = "loggeado";
        loggedAccountId = m - 1;
      } else {
        console.log("Contraseña incorrecta, vuelve a intentarlo...");
      }

      break;
    case "loggeado":
      console.log(`Escoge una de las opciones:
      1. Consultar saldo.
      2. Ingresar monto.
      3. Retirar monto.
      `);
      let o = parseInt(prompt("Ingresa el número asociado: "));
      status = ["consultando_saldo", "ingresando_monto", "retirando_monto"][
        o - 1
      ];
      break;
    case "consultando_saldo":
      console.log(
        "El saldo actual de tu cuenta es: " + cuentas[loggedAccountId].saldo
      );
      status = "loggeado";
      break;
    case "ingresando_monto":
      let monto = parseInt(prompt("Ingresa el monto que deseas almacenar: "));
      if (monto + cuentas[loggedAccountId].saldo <= 990) {
        cuentas[loggedAccountId].saldo += monto;
        console.log(
          "El nuevo monto de tu cueta es: " + cuentas[loggedAccountId].saldo
        );
      } else {
        console.log("El saldo de tu cuenta no puede su perar 990.");
      }

      status = "loggeado";
      break;
    case "retirando_monto":
      let retirar = parseInt(prompt("Ingresa el monto que deseas retirar: "));
      let saldo = cuentas[loggedAccountId].saldo - retirar;
      console.log(saldo);
      if (saldo < 10) {
        console.log("No puedes tener menos que $10");
      } else {
        cuentas[loggedAccountId].saldo -= retirar;
        console.log(
          "El nuevo monto de tu cueta es: " + cuentas[loggedAccountId].saldo
        );
      }
      status = "loggeado";
      break;
    default:
      break;
  }
}
