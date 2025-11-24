// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 3: Provocar un error y mostrar su mensaje en consola.

document.addEventListener("DOMContentLoaded", () => {
    // usar try para capturar el error
    try {
        // provocar un ReferenceError usando una variable inexistente (ReferenceError)
        let resultado = numeroInexistente + 10;
    } catch (e) {
        // imprimir solo el mensaje del error
        console.log("Mensaje del error:", e.message);
    }
});

