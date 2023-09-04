import funciones from "./funciones.js";

describe(" Pruebas Funciones", () => {
    it("mostrar correctamente los datos ingresados", () => {
       
      expect(funciones.mostrarDatosIngresados("5,5/1,2N/IAIAIA")).toEqual("<p> Dimensiones: 5,5 <br> Comandos: IAIAIA <br> Posicion Inicial: 1,2N </p>");
    });

});
