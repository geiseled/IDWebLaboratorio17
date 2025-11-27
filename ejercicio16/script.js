// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 16: Version con promesas del ejercicio procesarLista().

document.addEventListener("DOMContentLoaded", () => {
    // funcion que procesa un numero y devuelve una promesa
    function procesarNumero(num) { // procesa un solo numero
        return new Promise(resolve => {
            // tiempo aleatorio entre 500 y 1500 ms
            const tiempo = 500 + Math.random() * 1000;
            setTimeout(() => {
                console.log("Procesando", num, "...");
                resolve(); // promesa completada
            }, tiempo);
        });
    }

    // procesar toda la lista usando promesas
    function procesarListaPromise(lista) {
        console.log("Iniciando procesamiento de la lista:", lista);
        // crear una lista de promesas
        const promesas = lista.map(num => procesarNumero(num));
        // esperar a que todas las promesas terminen
        Promise.all(promesas)
            .then(() => {
                console.log("Proceso completado"); // mensaje final
            })
            .catch(error => {
                console.log("Error durante el procesamiento:", error.message);
            });
    }

    // lista de prueba
    let numeros = [5, 10, 20, 50];
    // llamada a la funcion
    procesarListaPromise(numeros);

});
