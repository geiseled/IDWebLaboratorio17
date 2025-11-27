// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 19: Version async/await del ejercicio 11.

function sleep(ms) { // funcion que genera una pausa usando promesas, simula sleep
    return new Promise(resolve => setTimeout(resolve, ms));
}

// funcion que devuelve una promesa que simula una division con retardo
function dividirAsync(a, b) {
    console.log("Iniciando division asincronica...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500); // 1.5 segundos
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    // prueba 1
    let a = 10;
    let b = 0;
    console.log("Llamada 1 - Valores recibidos:", a, "/", b);
    try {
        const resultado = await dividirAsync(a, b);
        console.log("Llamada 1 - Resultado:", resultado);
    } catch (error) {
        console.log("Llamada 1 - Error:", error.message);
    }

    // pause de 5 segundos
    console.log("Esperando 5 segundos antes de la siguiente prueba...");
    await sleep(5000);
    console.log("Continuando con la siguiente prueba...\n");

    // prueba 2
    a = 10;
    b = 2;
    console.log("Llamada 2 - Valores recibidos:", a, "/", b);
    try {
        const resultado = await dividirAsync(a, b);
        console.log("Llamada 2 - Resultado:", resultado);
    } catch (error) {
        console.log("Llamada 2 - Error:", error.message);
    }
});
