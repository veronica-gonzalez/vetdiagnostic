// Animación Navbar
window.addEventListener("DOMContentLoaded", (event) => {
    // El navbar se achica cuando la página hace scroll
    document.addEventListener("scroll", scroll("#navbar", "nav100"));
    document.addEventListener("scroll", scroll("#navegacion", "nav4rem"));
    document.addEventListener("scroll", scroll("#submenu", "sub6rem"));
});

/**
 * Este metodo valida si el scrollY es 0 y en ese caso quita la clase recibida por parametro,
 * en caso contrario la agrega
 * 
 * param selector al cual será aplicada la clase
 * param clase a aplicar
 * returns 
 */
function scroll(selector, clase) {
    var navHeight = function() {
        // Se obtiene el elemento a agregar o quitar la clase, el nombre es recibido por parametro
        const navegacion = document.body.querySelector(selector);

        if (window.scrollY === 0) {
            // Se elimina la clase recibida por parametro
            navegacion.classList.remove(clase);
        } else {
            // Se agrega la clase recibida por parametro
            navegacion.classList.add(clase);
        }
    };

    // Se retorna la funcion creada con los parametros recibidos
    return navHeight;
}

// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

elementoMenu.addEventListener('click', function(event) {
    elementoMenu.classList.toggle('activo');
});

// Submenu desplegable
let menuPadre = document.getElementsByClassName('enlace')[1];

menuPadre.addEventListener('click', function(event) {
    menuPadre.classList.toggle('activo');
});