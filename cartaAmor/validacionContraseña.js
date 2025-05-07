const passwordCorrecta = "MiAmorAntone161208";
let clave = "";

while (clave !== passwordCorrecta) {
    clave = prompt("Introduce la contraseña para acceder:");

    if (clave === null) {
        // Si el usuario cancela el prompt, muestra el mensaje y vuelve a pedir la contraseña
        alert("No te vas a salir");
        continue;  // Continúa pidiendo la contraseña
    }

    if (clave !== passwordCorrecta) {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
}
