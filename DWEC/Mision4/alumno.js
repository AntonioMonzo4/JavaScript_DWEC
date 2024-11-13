
class Alumno {
    constructor(nombre, curso, profesorResponsable) {
        this.nombre = nombre;
        this.curso = curso;
        this.profesorResponsable = profesorResponsable;
    }
}

function agregarAlumno() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas")) || [];
    var nombreAlumno = document.getElementById("nombreAlumno").value;
    var cursoAlumno = document.getElementById("cursoAlumno").value;
    var nombreProfesorResponsable = document.getElementById("profesorAlumno").value;
    var nombreEscuela = document.getElementById("escuelaAlumno").value;

    var escuelaEncontrada = null;
    for (var i = 0; i < escuelasGuardadas.length; i++) {
        if (escuelasGuardadas[i].nombre === nombreEscuela) {
            escuelaEncontrada = escuelasGuardadas[i];
            break;
        }
    }

    if (escuelaEncontrada) {
        var profesorEncontrado = null;
        for (var j = 0; j < escuelaEncontrada.ArrayProfesores.length; j++) {
            if (escuelaEncontrada.ArrayProfesores[j].nombre === nombreProfesorResponsable) {
                profesorEncontrado = escuelaEncontrada.ArrayProfesores[j];
                break;
            }
        }

        if (profesorEncontrado) {
            var alumnoExistente = false;
            for (var k = 0; k < escuelaEncontrada.ArrayAlumnos.length; k++) {
                if (escuelaEncontrada.ArrayAlumnos[k].nombre === nombreAlumno) {
                    alumnoExistente = true;
                    break;
                }
            }

            if (alumnoExistente) {
                alert("Este alumno ya está registrado en la escuela.");
            } else {
                var nuevoAlumno = new Alumno(nombreAlumno, cursoAlumno, nombreProfesorResponsable);
                escuelaEncontrada.ArrayAlumnos.push(nuevoAlumno);
                localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
                alert("Alumno "+nombreAlumno+" agregado a la escuela "+nombreEscuela);
            }
        } else {
            alert("Profesor responsable no encontrado en la escuela especificada.");
        }
    } else {
        alert("Escuela no encontrada.");
    }
}

function eliminarAlumno() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    var nombreAlumnoEliminar = prompt("Alumno que quieres eliminar: ");
    var nombreProfesorResponsable = prompt("Profesor responsable: ");

    if (escuelasGuardadas) {
        var escuelaEncontrada = null;
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            if (escuelasGuardadas[i].nombre === nombreProfesorResponsable) {  
                escuelaEncontrada = escuelasGuardadas[i];
                break;
            }
        }

        if (escuelaEncontrada) {
            var indexAlumnoEliminar = -1;
            for (var j = 0; j < escuelaEncontrada.ArrayAlumnos.length; j++) {
                if (escuelaEncontrada.ArrayAlumnos[j].nombre === nombreAlumnoEliminar) {
                    indexAlumnoEliminar = j;
                    break;
                }
            }

            if (indexAlumnoEliminar !== -1) {
                escuelaEncontrada.ArrayAlumnos.splice(indexAlumnoEliminar, 1);
                localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
                alert("Alumno eliminado");
            } else {
                alert("Alumno no encontrado en esta escuela");
            }
        } else {
            alert("Profesor responsable no encontrado");
        }
    }
}

function modificarAlumno() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    var nombreAlumnoModificar = prompt("Alumno que quieres modificar: ");
    var nombreEscuela = prompt("Escuela del alumno: ");

    var escuelaEncontrada = null;
    for (var i = 0; i < escuelasGuardadas.length; i++) {
        if (escuelasGuardadas[i].nombre === nombreEscuela) {
            escuelaEncontrada = escuelasGuardadas[i];
            break;
        }
    }

    if (escuelaEncontrada) {
        var alumnoEncontrado = null;
        for (var i = 0; i < escuelaEncontrada.ArrayAlumnos.length; i++) {
            if (escuelaEncontrada.ArrayAlumnos[i].nombre === nombreAlumnoModificar) {
                alumnoEncontrado = escuelaEncontrada.ArrayAlumnos[i];
                break;
            }
        }

        if (alumnoEncontrado) {
            alumnoEncontrado.nombre = prompt("Nuevo nombre del alumno:", alumnoEncontrado.nombre);
            alumnoEncontrado.curso = prompt("Nuevo curso del alumno:", alumnoEncontrado.curso);
            alumnoEncontrado.profesorResponsable = prompt("Nuevo profesor responsable:", alumnoEncontrado.profesorResponsable);
            localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
            alert("Alumno modificado");
        } else {
            alert("Alumno no encontrado en la escuela especificada");
        }
    } else {
        alert("Escuela no encontrada");
    }
}

function mostrarDatosAlumno() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    if (escuelasGuardadas) {
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            console.log("Escuela:"+ escuelasGuardadas[i].nombre);
            if (escuelasGuardadas[i].ArrayAlumnos.length > 0) {
                console.table(escuelasGuardadas[i].ArrayAlumnos);
            } else {
                console.log("No hay alumnos registrados en esta escuela.");
            }
        }
    } else {
        console.log("No hay datos de escuelas y alumnos en el localStorage.");
    }
}
