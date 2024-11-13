// Clase Alumno
class Alumno {
    constructor(nombre, curso, profesorResponsable) {
        this.nombre = nombre;
        this.curso = curso;
        this.profesorResponsable = profesorResponsable;
    }
}

// Función agregar alumno
function agregarAlumno() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas")) || [];
    let nombre = document.getElementById("nombreAlumno").value;
    let curso = document.getElementById("cursoAlumno").value;
    let profesorResponsable = document.getElementById("profesorAlumno").value;
    let escuelaNombre = document.getElementById("escuelaAlumno").value; 

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        let nuevoAlumno = new Alumno(nombre, curso, profesorResponsable);
        escuela.ArrayAlumnos.push(nuevoAlumno);
        localStorage.setItem("escuelas", JSON.stringify(escuelasC));
        alert("Alumno agregado");
    } else {
        alert("Escuela no encontrada");
    }
}

// Función eliminar alumno
function eliminarAlumno() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    let nombreAlumno = prompt("¿Cuál alumno quieres eliminar?");
    let escuelaNombre = prompt("¿En qué escuela está el alumno?");

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        escuela.ArrayAlumnos = escuela.ArrayAlumnos.filter(alumno => alumno.nombre !== nombreAlumno);
        localStorage.setItem("escuelas", JSON.stringify(escuelasC));
        alert("Alumno eliminado");
    } else {
        alert("Escuela no encontrada");
    }
}

// Función modificar alumno
function modificarAlumno() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    let nombreAlumno = prompt("¿Cuál alumno quieres modificar?");
    let escuelaNombre = prompt("¿En qué escuela está el alumno?");

    let escuela = escuelasC.find(e => e.nombre === escuelaNombre);
    if (escuela) {
        let alumno = escuela.ArrayAlumnos.find(a => a.nombre === nombreAlumno);
        if (alumno) {
            alumno.nombre = prompt("Nuevo nombre del alumno:", alumno.nombre);
            alumno.curso = prompt("Nuevo curso del alumno:", alumno.curso);
            alumno.profesorResponsable = prompt("Nuevo profesor responsable:", alumno.profesorResponsable);
            localStorage.setItem("escuelas", JSON.stringify(escuelasC));
            alert("Alumno modificado");
        } else {
            alert("Alumno no encontrado en la escuela especificada");
        }
    } else {
        alert("Escuela no encontrada");
    }
}

// Función mostrar datos de alumnos
function mostrarDatosAlumno() {
    let escuelasC = JSON.parse(localStorage.getItem("escuelas"));
    if (escuelasC) {
        escuelasC.forEach(escuela => {
            console.log(`Escuela: ${escuela.nombre}`);
            escuela.ArrayAlumnos.forEach(alumno => {
                console.log(`Nombre del Alumno: ${alumno.nombre}`);
                console.log(`Curso: ${alumno.curso}`);
                console.log(`Profesor Responsable: ${alumno.profesorResponsable}`);
            });
        });
    } else {
        console.log("No hay datos de escuelas y alumnos en el localStorage.");
    }
}