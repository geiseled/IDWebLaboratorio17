// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 20: procesar lista usando async/await con tareas paralelas

// funcion sleep que devuelve una promesa que se resuelve despues de ms milisegundos
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// procesa un solo numero con tiempo aleatorio, imprime inicio y fin
async function procesarNumero(numero) {
    // tiempo aleatorio entre 500 y 1500 ms
    let tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    console.log(`Procesando ${numero} ...`);
    // esperar tiempo aleatorio
    await sleep(tiempo);
    console.log(`Numero ${numero} procesado despues de ${tiempo} ms`);
}

// funcion que procesa una lista lanzando todas las tareas en paralelo
async function procesarListaAsync(lista) {
    console.log("Lista recibida:", lista);
    // map devuelve un array de promesas, cada numero se procesa en paralelo
    let tareas = lista.map(num => procesarNumero(num));
    // esperar a que todas las tareas terminen
    await Promise.all(tareas);
    console.log("Proceso completado");
}

document.addEventListener("DOMContentLoaded", async () => {
    const lista = [3, 7, 2, 9, 5];  // arreglo de prueba
    await procesarListaAsync(lista);
});
