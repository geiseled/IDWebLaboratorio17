// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 5: Forzar un error usando console.log y manejarlo con try-catch-finally

document.addEventListener("DOMContentLoaded", () => {

    try {
        // provocar un ReferenceError usando console.log con una variable inexistente
        console.log(nombreInexistente);
    } catch (e) {
        // imprimir mensaje personalizado segun el enunciado
        console.log("fallo");
    } finally {
        // este bloque siempre se ejecuta
        console.log("siempre se ejecuta");
    }

});
