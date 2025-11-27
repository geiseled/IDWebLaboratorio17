// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 7: Provocar un TypeError y verificar el tipo usando instanceof.

document.addEventListener("DOMContentLoaded", () => {

    // variable usada para provocar el error
    let x = null;
    console.log("Valor de x:", x); // mostrar el valor que provocara el error

    try {
        console.log(x.nombre); // provocar el TypeError accediendo propiedad de null
    } catch (e) {

        // verificar si es un TypeError
        if (e instanceof TypeError) {
            console.log("Se capturo un TypeError:", e.message);
        } else {
            console.log("Se capturo otro tipo de error:", e.message);
        }

    }

});
