// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 13: Ejercicio 9 usando promesas. Espera 1 segundo y retorna un mensaje.

document.addEventListener("DOMContentLoaded", () => {

    function cargarMensaje() {
        // retornar una promesa que espera 1 segundo
        return new Promise((resolve) => {
            console.log("Iniciando carga del mensaje...");

            setTimeout(() => {
                resolve("Mensaje cargado");
            }, 1000); // espera 1 segundo
        });
    }

    // llamada usando then
    cargarMensaje()
        .then(mensaje => {
            console.log("Resultado:", mensaje);
        });
});
