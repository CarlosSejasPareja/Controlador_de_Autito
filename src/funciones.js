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

function esComandosValidos(comandosInput) {
  const partes = comandosInput.split('/');
  const instrucciones = partes[2];
  const instruccionesValidasExpresion = /^[ADI]+$/; 

  return instruccionesValidasExpresion.test(instrucciones); 
}

function simularMovimientoAuto(comandosInput){
  const partes = comandosInput.split('/');
  const dimensiones = partes[0].split(',');
  const limiteX = parseInt(dimensiones[0]);
  const limiteY = parseInt(dimensiones[1]);
  const posicionInicial = partes[1].split(',');
  let x = parseInt(posicionInicial[0]);
  let y = parseInt(posicionInicial[1]);
  let direccion = posicionInicial[1][1]; 
  const instrucciones = partes[2];

  for (let i = 0; i < instrucciones.length; i++){
    const instruccion = instrucciones[i];
    if (instruccion === 'A') {
      let siguienteX = x;
      let siguienteY = y;
      if (direccion === 'N') {
        siguienteY++;
      }else if (direccion === 'S') {
        siguienteY--;
      }else if (direccion === 'E') {
        siguienteX++;
      }else if (direccion === 'O') {
        siguienteX--;
      }
      if(siguienteX>=0 && siguienteX <= limiteX && siguienteY>=0 && siguienteY <= limiteY){
        x=siguienteX;
        y=siguienteY
      }

    }else if (instruccion === 'I') {
      if (direccion === 'N') {
        direccion = 'O';
      } else if (direccion === 'S') {
        direccion = 'E';
      } else if (direccion === 'E') {
        direccion = 'N';
      } else if (direccion === 'O') {
        direccion = 'S';
      }
    }else if (instruccion === 'D') {
      if (direccion === 'N') {
        direccion = 'E';
      } else if (direccion === 'S') {
        direccion = 'O';
      } else if (direccion === 'E') {
        direccion = 'S';
      } else if (direccion === 'O') {
        direccion = 'N';
      }
    }

  }
  return "<p> Posicion Final: "+x+","+y+direccion+" </p>";
  



}


const funciones={mostrarDatosIngresados,esPosicionInicialValida,esDimensionValida,validarFormatoLineaDeComandos,esDireccionValida,esComandosValidos,simularMovimientoAuto};
export default funciones;
