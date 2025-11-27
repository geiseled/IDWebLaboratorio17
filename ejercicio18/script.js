// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 18: Version async/await del ejercicio 10 (cargarUsuario).

// funcion que retorna una promesa que se resuelve luego de un tiempo aleatorio
function cargarUsuario() {
    return new Promise(resolve => {

        // tiempo aleatorio entre 800 y 1500 ms
        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        console.log("Iniciando carga del usuario...");
        console.log("Tiempo de espera:", tiempo, "ms");

        setTimeout(() => {
            const usuario = {
                id: 10,
                nombre: "Rodrigo"
            };

            resolve(usuario);     // la promesa se resuelve con el usuario
        }, tiempo);
    });
}

document.addEventListener("DOMContentLoaded", async () => {

    console.log("Preparando proceso asincronico...");

    // usamos await para esperar la promesa
    const usuario = await cargarUsuario();

    // mostrar el usuario formateado
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
});
