// Animación Navbar
window.addEventListener("DOMContentLoaded", () => {
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
    function navHeight() {
        // Se obtiene el elemento                 a agregar o quitar la clase, el nombre es recibido por parametro
        const navegacion = document.body.querySelector(selector);

        if (window.scrollY === 0) {
            // Se elimina la clase recibida por parametro
            navegacion.classList.remove(clase);
        } else {
            // Se agrega la clase recibida por parametro
            navegacion.classList.add(clase);
        }
    }

    // Se retorna la funcion creada con los parametros recibidos
    return navHeight;
}

// Animación Ícono Menú
let elementoMenu = document.getElementsByClassName('icono-menu')[0];

elementoMenu.addEventListener('click', function() {
    elementoMenu.classList.toggle('activo');

    // Secciones opacity, se obtienen todas las secciones como un listado HTMLCollection
    let secciones = document.getElementsByClassName('flex');

    // Se recorre uno por uno los elementos y se le agrega la clase opacity
    for (const element of secciones) {
        element.classList.toggle('clase-opacity');
    }
});

// Submenu desplegable, se obtienen todos los enlaces como un listado HTMLCollection
let menuPadre = document.getElementsByClassName('enlace');

// Se recorre uno por uno los elementos y se le agrega un listener para el click
for (const element of menuPadre) {
    element.addEventListener('click', function() {
        this.classList.toggle('activo');
    });
}



// Animación Ícono Submenú
let iconoSubmenu = document.getElementsByClassName('icono-submenu')[0];

iconoSubmenu.addEventListener('click', function() {
    iconoSubmenu.classList.toggle('activo');
});