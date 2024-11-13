// Clase escuela
class Escuela{
    constructor(nombre, localidad, responsable){
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.ArrayProfesores = new Array();
        this.ArrayAlumnos = new Array();
    }
}




// Función agregar
function agregarEscuela() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas")) || [];
    let nombre = document.getElementById("nombreEscuela").value;
    let localidad = document.getElementById("localidadEscuela").value;
    let responsable = document.getElementById("responsableEscuela").value;

    let escuelaNueva = new Escuela(nombre, localidad, responsable);
    escuelasC.push(escuelaNueva);
    localStorage.setItem("escuelas", JSON.stringify(escuelasC));
    alert("Escuela agregada");
}

function eliminarEscuela() {
    let escuelasE = JSON.parse(localStorage.getItem("escuelas"));
    let nombreeliminado = prompt("¿Cuál escuela quieres eliminar?");
    escuelasE = escuelasE.filter(escuela => escuela.nombre !== nombreeliminado);
    localStorage.setItem("escuelas", JSON.stringify(escuelasE));
    alert("Escuela eliminada");
}

function modificarEscuela() {
    let escuelasM = JSON.parse(localStorage.getItem("escuelas"));
    let modificar = prompt("¿Cuál escuela quieres modificar?");
    let escuela = escuelasM.find(e => e.nombre === modificar);
    if (escuela) {
        escuela.nombre = prompt("Nuevo nombre:", escuela.nombre);
        escuela.localidad = prompt("Nueva localidad:", escuela.localidad);
        escuela.responsable = prompt("Nuevo responsable:", escuela.responsable);
        alert("Escuela modificada");
        localStorage.setItem("escuelas", JSON.stringify(escuelasM));
    }
}

// Función mostrar datos
function mostrarDatosEscuela() {
    let escuelas = JSON.parse(localStorage.getItem("escuelas"));
    console.log("Escuelas:", escuelas);
}
