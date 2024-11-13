// Clase Profesor
class Profesor {
    constructor(nombre, tipo, escuela) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.escuela = escuela;
    }
}

// Función agregar
function agregarProfesor() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas")) || [];
    let nombre = document.getElementById("nombreProfesor").value;
    let tipo = document.getElementById("tipoProfesor").value;
    let escuelaNombre = document.getElementById("escuelaProfesor").value;

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        let profesorNuevo = new Profesor(nombre, tipo, escuelaNombre);
        escuela.ArrayProfesores.push(profesorNuevo);
        localStorage.setItem("escuelas", JSON.stringify(escuelasC));
        alert("Profesor agregado");
    } else {
        alert("Escuela no encontrada");
    }
}

// Función eliminar
function eliminarProfesor() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    let nombreProfesor = prompt("¿Cuál profesor quieres eliminar?");
    let escuelaNombre = prompt("¿En qué escuela trabaja el profesor?");

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        escuela.ArrayProfesores = escuela.ArrayProfesores.filter(profesor => profesor.nombre !== nombreProfesor);
        localStorage.setItem("escuelas", JSON.stringify(escuelasC));
        alert("Profesor eliminado");
    } else {
        alert("Escuela no encontrada");
    }
}

// Función modificar
function modificarProfesor() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    let nombreProfesor = prompt("¿Cuál profesor quieres modificar?");
    let escuelaNombre = prompt("¿En qué escuela trabaja el profesor?");

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        let profesor = escuela.ArrayProfesores.find(p => p.nombre === nombreProfesor);
        if (profesor) {
            profesor.nombre = prompt("Nuevo nombre del profesor:", profesor.nombre);
            profesor.tipo = prompt("Nuevo tipo del profesor (ciencias, letras, mixto):", profesor.tipo);
            localStorage.setItem("escuelas", JSON.stringify(escuelasC));
            alert("Profesor modificado");
        } else {
            alert("Profesor no encontrado en la escuela especificada");
        }
    } else {
        alert("Escuela no encontrada");
    }
}

// Función mostrar datos
function mostrarDatosProfesor() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    if (escuelasC) {
        escuelasC.forEach(escuela => {
            console.log(`Escuela: ${escuela.nombre}`);
            escuela.ArrayProfesores.forEach(profesor => {
                console.log(`Nombre del Profesor: ${profesor.nombre}`);
                console.log(`Tipo de Profesor: ${profesor.tipo}`);
            });
        });
    } else {
        console.log("No hay datos de escuelas y profesores en el localStorage.");
    }
}