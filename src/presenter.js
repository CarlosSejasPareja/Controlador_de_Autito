import funciones from "./funciones.js";
const form = document.querySelector("#tot-form");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comandosInput = document.querySelector("#comandos").value;
  const resultado=document.querySelector("#resultado");

  const htmlGenerado = funciones.mostrarDatosIngresados(comandosInput,resultado.innerHTML);

  resultado.innerHTML=htmlGenerado;


});