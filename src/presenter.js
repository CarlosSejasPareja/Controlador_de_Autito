import funciones from "./funciones.js";
const form = document.querySelector("#tot-form");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comandosInput = document.querySelector("#comandos").value;
  const resultado=document.querySelector("#resultado");

  const htmlGenerado = funciones.mostrarDatosIngresados(comandosInput,resultado.innerHTML);

  if(funciones.validarFormatoLineaDeComandos(comandosInput)==false){
    alert('El formato de los comandos ingresados no es válido. Siga el ejemplo porfavor');
  }
  else{
    if(funciones.esDimensionValida(comandosInput)==false){
      alert('La dimension ingreasada no es valida');
    }
    else{
      if (funciones.esPosicionInicialValida(comandosInput)==false){
        alert('La posición inicial está fuera de los límites de la superficie.');
      }
      else{
        if( funciones.esDireccionValida(comandosInput)==false){
          alert('La dirección de la posición inicial no es válida (debe ser N, S, E u O)');
        }
        else{
          resultado.innerHTML=htmlGenerado;
        }
        
      }

  }
   

  



});