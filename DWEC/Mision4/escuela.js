
class Escuela {
    constructor(nombre, localidad, responsable) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.ArrayProfesores = new Array();
        this.ArrayAlumnos = new Array();
    }
}

function agregarEscuela() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas")) || [];
    var nombreEscuela = document.getElementById("nombreEscuela").value;
    var localidadEscuela = document.getElementById("localidadEscuela").value;
    var responsableEscuela = document.getElementById("responsableEscuela").value;

    var escuelaNueva = new Escuela(nombreEscuela, localidadEscuela, responsableEscuela);
    escuelasGuardadas.push(escuelaNueva);
    localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
    alert("Escuela agregada");
}

function eliminarEscuela() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    var nombreEscuelaEliminar = prompt("Nombre de la escuela que quieres eliminar:");

    if (escuelasGuardadas) {
        var indexEscuelaEliminar = -1;
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            if (escuelasGuardadas[i].nombre === nombreEscuelaEliminar) {
                indexEscuelaEliminar = i;
                break;
            }
        }

        if (indexEscuelaEliminar !== -1) {
            escuelasGuardadas.splice(indexEscuelaEliminar, 1);
            localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
            alert("Escuela eliminada");
        } else {
            alert("Escuela no encontrada");
        }
    }
}

function modificarEscuela() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    var nombreEscuelaModificar = prompt("¿Cuál escuela quieres modificar?");

    if (escuelasGuardadas) {
        var escuelaEncontrada;
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            if (escuelasGuardadas[i].nombre === nombreEscuelaModificar) {
                escuelaEncontrada = escuelasGuardadas[i];
                break;
            }
        }

        if (escuelaEncontrada) {
            escuelaEncontrada.nombre = prompt("Nuevo nombre:", escuelaEncontrada.nombre);
            escuelaEncontrada.localidad = prompt("Nueva localidad:", escuelaEncontrada.localidad);
            escuelaEncontrada.responsable = prompt("Nuevo responsable:", escuelaEncontrada.responsable);
            localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
            alert("Escuela modificada");
        } else {
            alert("Escuela no encontrada");
        }
    }
}

function mostrarDatosEscuela() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    console.table(escuelasGuardadas);
}
