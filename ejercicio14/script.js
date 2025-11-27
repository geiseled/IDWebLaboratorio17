// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 14: Ejercicio 10 usando promesas. Espera aleatoria y retorna un usuario.

document.addEventListener("DOMContentLoaded", () => {

    function cargarUsuario() {

        console.log("Iniciando carga del usuario...");

        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800; // 800 a 1500 ms
        console.log("Tiempo de espera:", tiempo, "ms");

        return new Promise((resolve) => {
            setTimeout(() => {

                // objeto usuario 
                const usuario = {
                    id: 10,
                    nombre: "Rodrigo"
                };
                resolve(usuario);
            }, tiempo);
        });
    }

    // llamada usando then
    cargarUsuario()
        .then(usuario => {
            console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
        });
});
