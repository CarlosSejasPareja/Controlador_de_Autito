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
//VAERIFICACIONES RESPECTO A LAS DIMENSIONES 
    it("validar cuando dimension ingreasa sea correcta", () => {
       
      expect(funciones.esDimensionValida("5,5/1,5N/IAIAIA")).toEqual(true);
    });

    it("rechazar  cuando dimension sea incorrecta", () => {
       
      expect(funciones.esDimensionValida("5,-5/1,5N/IAIAIA")).toEqual(false);
    });
     
    it("comprobar si formato es ingresado correctamente", () => {
       
      expect(funciones.validarFormatoLineaDeComandos("5,-5 1,5N/IAIAIA")).toEqual(false);
    });

    it("Admite si Direccion  Ingresada es correcta (N,S,E,O)", () => {
       
      expect(funciones.esDireccionValida("5,5/1,5N/IAIAIA")).toEqual(true);
    }); 
    it("Niega si Direccion  Ingresada es incorrecta (distinto de N,S,E,O)", () => {
       
      expect(funciones.esDireccionValida("5,5/1,5X/IAIAIA")).toEqual(false);
    });

    it("Admite si instruccione Ingresadas son correctas (A,I,D)", () => {
       
      expect(funciones.esComandosValidos("5,5/1,5N/IAIAIA")).toEqual(true);
    });

    it("Niega si instruccioneS Ingresadas NO son correctas (A,I,D)", () => {
       
      expect(funciones.esComandosValidos("5,5/1,5X/IAFAIA")).toEqual(false);
    });
// SIMULACION DE MOVIMIENTO 
   it("Muestra posicion final cuando avanza hacia el NORTE respondiendo al comando A ", () => {   
    expect(funciones.simularMovimientoAuto("5,5/1,2N/A")).toEqual("<p> Posicion Final: 1,3N </p>");
    });

    it("Muestra posicion final cuando avanza hacia el SUD respondiendo al comando A ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2S/A")).toEqual("<p> Posicion Final: 1,1S </p>");
    });

    it("Muestra posicion final cuando avanza hacia el ESTE respondiendo al comando A ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2E/A")).toEqual("<p> Posicion Final: 2,2E </p>");
    });

    it("Muestra posicion final cuando avanza hacia el OESTE respondiendo al comando A ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2O/A")).toEqual("<p> Posicion Final: 0,2O </p>");
    });
    //GIRAR A LA IZQUIERDA
    it("Muestra posicion final: empieza mirando al NORTE termina mirando al OESTE  ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2N/I")).toEqual("<p> Posicion Final: 1,2O </p>");
    });

    it("Muestra posicion final: empieza mirando al SUD termina mirando al ESTE  ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2S/I")).toEqual("<p> Posicion Final: 1,2E </p>");
    });

    it("Muestra posicion final: empieza mirando al ESTE termina mirando al NORTE  ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2E/I")).toEqual("<p> Posicion Final: 1,2N </p>");
    });

    it("Muestra posicion final: empieza mirando al OESTE termina mirando al SUD  ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2O/I")).toEqual("<p> Posicion Final: 1,2S </p>");
    });
    //GIRAR A LA DERECHA 
    it("Muestra posicion final: empieza mirando al NORTE termina mirando al ESTE  ", () => {
       
      expect(funciones.simularMovimientoAuto("5,5/1,2N/D")).toEqual("<p> Posicion Final: 1,2E </p>");
    });




});
