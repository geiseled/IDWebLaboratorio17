// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 10: Funcion cargarUsuario() usando callbacks y tiempo aleatorio entre 800 y 1500 ms.

document.addEventListener("DOMContentLoaded", () => {

    function cargarUsuario(callback) {
        console.log("Iniciando carga de usuario...");
        // generar un tiempo aleatorio entre 800 y 1500 ms
        const tiempoEspera = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
        console.log("Tiempo de espera generado:", tiempoEspera, "ms");
        // ejecutar el callback despues del tiempo aleatorio
        setTimeout(() => {
            const usuario = { id: 10, nombre: "Rodrigo" }; // objeto usuario
            callback(usuario); // llamar al callback con el usuario
        }, tiempoEspera);
    }

    // imprimir el usuario en consola
    function mostrarUsuario(usuario) {
        console.log("Usuario cargado:", usuario.nombre, "(ID:", usuario.id + ")");
    }

    // iniciar el proceso
    cargarUsuario(mostrarUsuario);

});
