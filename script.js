/* =========================================================
   COCINA FÁCIL
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   ♿ ACCESIBILIDAD 4.4 - CAMBIO DE TAMAÑO DEL TEXTO

   Estos controles permiten al usuario aumentar o disminuir
   el tamaño del texto de la página.

   IMPORTANTE:
   El navegador también permite utilizar Ctrl + "+" y
   Ctrl + "-" para ampliar toda la página.
   ========================================================= */


/* Tamaño de texto inicial */

let tamañoTexto = 100;


/* Función para cambiar el tamaño */

function cambiarTamañoTexto(cambio) {

    tamañoTexto += cambio;


    /* Evitamos que el tamaño sea demasiado pequeño */

    if (tamañoTexto < 80) {

        tamañoTexto = 80;

    }


    /* Evitamos un tamaño excesivamente grande */

    if (tamañoTexto > 200) {

        tamañoTexto = 200;

    }


    document.documentElement.style.fontSize =
        tamañoTexto + "%";

}


/* =========================================================
   ♿ ACCESIBILIDAD 3.2 - ORDEN ADECUADO

   Las funciones se ejecutan sobre elementos que ya existen
   dentro del documento y no alteran el orden lógico del
   contenido.
   ========================================================= */


/* =========================================================
   FORMULARIO DE CONTACTO
   ========================================================= */

const formulario = document.querySelector("form");


if (formulario) {

    formulario.addEventListener("submit", function(event) {

        /* Evitamos que la página se recargue */

        event.preventDefault();


        /*
         * ♿ ACCESIBILIDAD 4.1 - USO DEL COLOR
         *
         * Los mensajes de estado no dependen únicamente
         * del color.
         *
         * También contienen texto que explica claramente
         * lo que ocurrió.
         */

        mostrarMensaje(
            "¡Gracias! Tu sugerencia fue enviada correctamente.",
            "exito"
        );


        /* Limpiamos los campos */

        formulario.reset();

    });

}


/* =========================================================
   MENSAJE DEL FORMULARIO
   ========================================================= */

function mostrarMensaje(texto, tipo) {

    /* Comprobamos si ya existe un mensaje */

    let mensaje =
        document.querySelector(".mensaje-formulario");


    /* Si no existe, lo creamos */

    if (!mensaje) {

        mensaje = document.createElement("div");

        mensaje.className =
            "mensaje-formulario";

        formulario.appendChild(mensaje);

    }


    /*
     * ♿ ACCESIBILIDAD
     *
     * aria-live permite que las tecnologías de asistencia
     * detecten automáticamente el nuevo mensaje.
     */

    mensaje.setAttribute("aria-live", "polite");

    mensaje.setAttribute("role", "status");


    mensaje.textContent = texto;

    mensaje.className =
        "mensaje-formulario " + tipo;

}


/* =========================================================
   ♿ ACCESIBILIDAD 4.9 - HOVER / FOCUS

   El CSS se encarga de mostrar los estados :hover y
   :focus-visible.

   JavaScript no reemplaza estos estados.
   ========================================================= */


/* =========================================================
   ♿ ACCESIBILIDAD 3.3 - CARACTERÍSTICAS SENSORIALES

   Las acciones de la página no dependen exclusivamente
   de color, sonido, forma o posición.
   ========================================================= */


/* =========================================================
   FINAL DEL SCRIPT
   ========================================================= */