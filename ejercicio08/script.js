// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 8: Propagacion de errores a través de multiples funciones.

document.addEventListener("DOMContentLoaded", () => {

    function nivel2() {
        try {
            console.log("Entrando a nivel 2"); // mensaje de nivel 2
            console.log(x); // error: x no esta definida
        } catch (e) {
            console.log("Nivel 2 atrapó el error:", e.message);
            throw e; // volver a lanzar el mismo error
        }
    }

    function nivel1() {
        try {
            console.log("Entrando a nivel 1"); // mensaje de nivel 1
            nivel2(); // llamar a nivel 2 (que provocará el error)
        } catch (e) {
            console.log("Nivel 1 recibió el error:", e.message);
            throw e; // volver a lanzar el error hacia el nivel superior
        }
    }

    try {
        nivel1(); // iniciar la cadena de llamadas
    } catch (e) {
        console.log("ERROR FINAL capturado en el nivel superior:", e.message);
    }

});

