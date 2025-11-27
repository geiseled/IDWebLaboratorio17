// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 12: Funcion procesarLista usando callbacks y tiempos aleatorios por cada numero.

document.addEventListener("DOMContentLoaded", () => {

    // funcion que procesa una lista de numeros de manera asincronica
    function procesarLista(lista, callbackFinal) {

        let procesados = 0; // contador de numeros procesados

        lista.forEach(numero => {

            console.log("Procesando", numero, "..."); // mensaje inmediato

            // tiempo aleatorio entre 500 y 1500 ms
            let tiempo = Math.floor(Math.random() * 1000) + 500;

            setTimeout(() => {
                console.log("Numero", numero, "procesado despues de", tiempo, "ms");

                procesados++; // aumentar contador

                // si ya se procesaron todos, llamar al callback final
                if (procesados === lista.length) {
                    callbackFinal("Proceso completado");
                }

            }, tiempo);

        });

    }

    // lista de prueba
    let numeros = [3, 7, 2, 9, 5];
    console.log("Lista recibida:", numeros);

    // llamada a la funcion
    procesarLista(numeros, mensaje => {
        console.log(mensaje); // mensaje final
    });

});
