// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 9: Funcion cargarMensaje() que recibe un callback y lo ejecuta luego de 1 segundo.

document.addEventListener("DOMContentLoaded", () => {

    function cargarMensaje(callback) {
        // esperar 1 segundo antes de ejecutar el callback
        setTimeout(() => {
            callback("Mensaje cargado"); // mensaje que se enviara al callback
        }, 1000);
    }

    // funcion callback que imprimira el mensaje recibido en consola
    function mostrarMensaje(texto) {
        console.log("Resultado del callback:", texto);
    }

    // llamar a la funcion principal pasandole el callback
    cargarMensaje(mostrarMensaje);
});


