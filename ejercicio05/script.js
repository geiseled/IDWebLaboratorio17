// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 5: Forzar un error usando console.log

document.addEventListener("DOMContentLoaded", () => {

    try {
        // provocar un ReferenceError usando console.log con una variable inexistente
        console.log(nombreInexistente);
    } catch (e) {
        // imprimir mensaje
        console.log("fallo");
    } finally {
        // este bloque es el que siempre se ejecuta
        console.log("siempre se ejecuta");
    }
});
