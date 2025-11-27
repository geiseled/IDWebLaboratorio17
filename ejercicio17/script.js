// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 17: Version async/await del ejercicio cargarMensaje().

// funcion que retorna una promesa que se resuelve en 1 segundo
function cargarMensaje() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Mensaje cargado"); // mensaje final
        }, 1000);
    });
}

document.addEventListener("DOMContentLoaded", async () => {

    console.log("Iniciando carga del mensaje...");

    // usamos await para esperar la promesa
    const mensaje = await cargarMensaje();

    console.log("Resultado:", mensaje);
});
