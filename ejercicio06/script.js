// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 6: Funcion validarEdad() que lanza un error si la edad es invalida.

document.addEventListener("DOMContentLoaded", () => {

    function validarEdad(edad) {
        // si la edad no es numero NaN o es menor que 0 lanzar error
        if (isNaN(edad) || edad < 0) {
            throw new Error("Edad invalida");
        }
        return "Edad correcta: " + edad;
    }

    let edad = -5
    console.log("Edad a validar: " + edad);

    try {
        // probamos con un valor negativo para provocar el error
        let resultado = validarEdad(edad);
        console.log(resultado);
    } catch (e) {
        console.log("Error capturado:", e.message);
    }
});
