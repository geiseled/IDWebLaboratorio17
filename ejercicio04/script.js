// Autor: Pacheco Medina Geisel Reymar
// Ejercicio 4: Genera un SyntaxError usando JSON.parse() con texto invalido.

// JSON.parse lanzara un error de tipo SyntaxError cuando el texto no cumple la estructura correcta del formato JSON.
try {
    // JSON invalido para provocar un SyntaxError
    let textoInvalido = "{nombre: 'Juan'}"; 
    let obj = JSON.parse(textoInvalido);

} catch (e) {
    // imprimir el tipo de error y su mensaje
    console.log("Tipo de error:", e.name);
    console.log("Mensaje del error:", e.message);
}
