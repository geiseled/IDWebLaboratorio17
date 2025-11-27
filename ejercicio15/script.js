// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 15: Version con promesas de dividirAsync con uso opcional de sleep

document.addEventListener("DOMContentLoaded", () => {

    // funcion sleep para pausar usando promesas
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dividirAsyncPromise(a, b) {
        console.log("Iniciando division asincronica (promesa)...");

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (b === 0) {
                    reject(new Error("No se puede dividir entre cero"));
                } else {
                    resolve(a / b);
                }
            }, 1500);

        });
    }

    async function ejecutarPruebas() {

        // ------------------- PRUEBA 1 -------------------
        let a = 10, b = 0;
        console.log("Llamada 1 - Valores recibidos:", a, "/", b);

        try {
            let resultado = await dividirAsyncPromise(a, b);
            console.log("Llamada 1 - Resultado:", resultado);
        } catch (error) {
            console.log("Llamada 1 - Error:", error.message);
        }

        // Pausa de 2 segundos antes de ejecutar la siguiente prueba
        await sleep(2000);
        console.log("Han pasado 2 segundos...\n");


        // ------------------- PRUEBA 2 -------------------
        a = 20; 
        b = 4;
        console.log("Llamada 2 - Valores recibidos:", a, "/", b);

        try {
            let resultado2 = await dividirAsyncPromise(a, b);
            console.log("Llamada 2 - Resultado:", resultado2);
        } catch (error) {
            console.log("Llamada 2 - Error:", error.message);
        }
    }

    // ejecutar pruebas en orden
    ejecutarPruebas();

});
