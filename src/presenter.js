import funciones from "./funciones.js";
const form = document.querySelector("#tot-form");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comandosInput = document.querySelector("#comandos").value;
  const resultado=document.querySelector("#resultado");

  const htmlGenerado = funciones.mostrarDatosIngresados(comandosInput,resultado.innerHTML);

  
  if(funciones.esDimensionValida(comandosInput)==false){
    alert('La dimension ingreasada no es valida');
  }
  else{
    if (funciones.esPosicionInicialValida(comandosInput)==false){
      alert('La posición inicial está fuera de los límites de la superficie.');
    }
    else{
      resultado.innerHTML=htmlGenerado;
    } 

  }



});