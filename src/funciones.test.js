import funciones from "./funciones.js";

describe(" Pruebas Funciones", () => {
    it("mostrar correctamente los datos ingresados", () => {
       
      expect(funciones.mostrarDatosIngresados("5,5/1,2N/IAIAIA")).toEqual("<p> Dimensiones: 5,5 <br> Comandos: IAIAIA <br> Posicion Inicial: 1,2N </p>");
    });
//VERIFICACIONES RESPECTO A LA POSICION INCIAL 
    it("validar que posicion inicial este dentro de los limetes de las dimensiones", () => {
       
      expect(funciones.esPosicionInicialValida("5,5/1,2N/IAIAIA")).toEqual(true);
    });

    it("rechazar  posicion inicial cuando este fuera de los limetes de las dimensiones", () => {
       
      expect(funciones.esPosicionInicialValida("5,5/1,7N/IAIAIA")).toEqual(false);
    });



});
