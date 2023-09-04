function mostrarDatosIngresados(comandosInput) {

  const partes = comandosInput.split('/');
  const dimensiones = partes[0];
  const posicionInicial = partes[1];
  const instrucciones = partes[2];
  return "<p>"+" Dimensiones: " +dimensiones+" <br> Comandos: "+instrucciones+" <br> Posicion Inicial: "+posicionInicial+" </p>";
  
}

const funciones={mostrarDatosIngresados};
export default funciones;
