const precios = {
  aqua: 200,
  emocion: 180,
  alegria: 160,
  frescura: 150,
};
let productos = Object.keys(precios);
let calcular = document.getElementById("calcular");

function get_best_employee() {
  let conteoJuana = 0;
  let conteoPedro = 0;
  for (let i = 0; i < productos.length; i++) {
    // let aqua = document.querySelector("#juana .aqua");
    // console.log(productos[i]);
    conteoJuana +=
      parseInt(document.querySelector(`#juana .${productos[i]}`).value) *
      precios[productos[i]];
    // console.log(document.querySelector(`#juana .${productos[i]}`));
    conteoPedro +=
      parseInt(document.querySelector(`#pedro .${productos[i]}`).value) *
      precios[productos[i]];
  }
  if (conteoJuana > conteoPedro) {
    console.log(`El mejor empleado del mes fue Juana, tuvo unas ventas de ${conteoJuana} USD.
    Mientras que Pedro tuvo unas ventas de ${conteoPedro} USD.
    `);
  } else if (conteoJuana === conteoPedro) {
    console.log(
      `Los dos empleados tuvieron unas ventas de ${conteoJuana} USD.`
    );
  } else {
    console.log(`El mejor empleado del mes fue Pedro, tuvo unas ventas de ${conteoPedro} USD.
    Mientras que Juana tuvo unas ventas de ${conteoJuana} USD.
    `);
  }
}

calcular.addEventListener("click", get_best_employee);
