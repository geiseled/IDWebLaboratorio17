// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 11: Funcion dividirAsync usando callbacks

document.addEventListener("DOMContentLoaded", () => {

    // funcion sleep para crear una pausa sin hacer nada
    function sleep(ms, callback) {
        setTimeout(callback, ms); // no realiza ninguna accion adicional
    }

    // funcion asincronica que divide a entre b
    function dividirAsync(a, b, callback) {
        console.log("Iniciando division asincronica...");

        setTimeout(() => { // espera de 1.5 segundos
            if (b === 0) {
                callback(new Error("No se puede dividir entre cero"), null);
            } else {
                callback(null, a / b);
            }
        }, 1500);
    }

    // llamada 1
    let a = 10;
    let b = 0;
    console.log("Llamada 1 - Valores recibidos:", a, "/", b);

    dividirAsync(a, b, (error, resultado) => {
        if (error) {
            console.log("Llamada 1 - Error:", error.message);
        } else {
            console.log("Llamada 1 - Resultado:", resultado);
        }
    });

    // pausa para que los resultados se impriman en orden
    sleep(5000, () => { // espera 3 segundos, callback vacio no ejecuta nada
        console.log("Han pasado 5 segundos, iniciando la segunda division...");

    // llamada 2
    a = 10;
    b = 2;
    console.log("Llamada 2 - Valores recibidos:", a, "/", b);

    dividirAsync(a, b, (error, resultado) => {
        if (error) {
            console.log("Llamada 2 - Error:", error.message);
        } else {
            console.log("Llamada 2 - Resultado:", resultado);
        }
    });
});
});
