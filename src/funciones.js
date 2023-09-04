function mostrarDatosIngresados(comandosInput) {

  const partes = comandosInput.split('/');
  const dimensiones = partes[0];
  const posicionInicial = partes[1];
  const instrucciones = partes[2];
  return "<p>"+" Dimensiones: " +dimensiones+" <br> Comandos: "+instrucciones+" <br> Posicion Inicial: "+posicionInicial+" </p>";
  
}
function esPosicionInicialValida(comandosInput){
  const partes = comandosInput.split('/');
  const dimensiones = partes[0].split(',');
  const posicionInicial = partes[1].split(',');
  const limiteX = parseInt(dimensiones[0]);
  const limiteY = parseInt(dimensiones[1]);
  let x = parseInt(posicionInicial[0]);
  let y = parseInt(posicionInicial[1]);

  if(x>=0 && x <= limiteX && y>=0 && y <= limiteY){
    return true;
  }
  return false;

}
function esDimensionValida(comandosInput){
  const partes = comandosInput.split('/');
  const dimensiones = partes[0].split(',');
  const limiteX = parseInt(dimensiones[0]);
  const limiteY = parseInt(dimensiones[1]);
  if (limiteX>0 && limiteY>0){
    return true;
  }
  return false;

}

function validarFormatoLineaDeComandos(comandosInput) {
  const partes = comandosInput.split('/');
    if (partes.length !== 3) {
        return false;
    }
    return true;
 
}


function esDireccionValida(comandosInput) {
  const partes = comandosInput.split('/');
  const posicionInicial = partes[1].split(',');
  const direccionesValidas = ['N', 'S', 'E', 'O'];
  let direccion = posicionInicial[1][1]; 
  
  return direccionesValidas.includes(direccion);
}



const funciones={mostrarDatosIngresados,esPosicionInicialValida,esDimensionValida,validarFormatoLineaDeComandos,esDireccionValida};
export default funciones;
