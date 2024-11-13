
class Profesor {
    constructor(nombre, tipo, escuela) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.escuela = escuela;
    }
}

function agregarProfesor() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas")) || [];
    var nombreProfesor = document.getElementById("nombreProfesor").value;
    var tipoProfesor = document.getElementById("tipoProfesor").value;
    var nombreEscuela = document.getElementById("escuelaProfesor").value;

    var escuelaEncontrada = null;
    var profesorExistenteEnOtraEscuela = false;

    for (var i = 0; i < escuelasGuardadas.length; i++) {
        if (escuelasGuardadas[i].nombre == nombreEscuela) {
            escuelaEncontrada = escuelasGuardadas[i];
            break;
        }
    }

    if (escuelaEncontrada) {
        
        for (var j = 0; j < escuelasGuardadas.length; j++) {
            for (var k = 0; k < escuelasGuardadas[j].ArrayProfesores.length; k++) {
                if (escuelasGuardadas[j].ArrayProfesores[k].nombre === nombreProfesor) {
                    profesorExistenteEnOtraEscuela = true;
                    break;
                }
            }
            if (profesorExistenteEnOtraEscuela) break;
        }

        if (profesorExistenteEnOtraEscuela) {
            alert("Este profesor ya está asignado a otra escuela.");
        } else {
            var nuevoProfesor = new Profesor(nombreProfesor, tipoProfesor, nombreEscuela);
            escuelaEncontrada.ArrayProfesores.push(nuevoProfesor);
            localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
            alert("Profesor "+nombreProfesor+" agregado a la escuela"+ nombreEscuela);
        }
    } else {
        alert("Escuela no encontrada.");
    }
}

function eliminarProfesor() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas")) || [];
    var nombreProfesorEliminar = prompt("Profesor que quieres eliminar: ");
    var nombreEscuela = prompt("Escuela del profesor: ");

    if (escuelasGuardadas) {
        var escuelaEncontrada = null;
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            if (escuelasGuardadas[i].nombre === nombreEscuela) {
                escuelaEncontrada = escuelasGuardadas[i];
                break;
            }
        }

        if (escuelaEncontrada) {
            var indexProfesorEliminar = -1;
            for (var i = 0; i < escuelaEncontrada.ArrayProfesores.length; i++) {
                if (escuelaEncontrada.ArrayProfesores[i].nombre === nombreProfesorEliminar) {
                    indexProfesorEliminar = i;
                    break;
                }
            }

            if (indexProfesorEliminar !== -1) {
                escuelaEncontrada.ArrayProfesores.splice(indexProfesorEliminar, 1);
                localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
                alert("Profesor eliminado");
            } else {
                alert("Profesor no encontrado en la escuela especificada");
            }
        } else {
            alert("Escuela no encontrada");
        }
    }
}

function modificarProfesor() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    var nombreProfesorModificar = prompt("¿Cuál profesor quieres modificar?");
    var nombreEscuela = prompt("¿En qué escuela trabaja el profesor?");

    if (escuelasGuardadas) {
        var escuelaEncontrada = null;
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            if (escuelasGuardadas[i].nombre === nombreEscuela) {
                escuelaEncontrada = escuelasGuardadas[i];
                break;
            }
        }

        if (escuelaEncontrada) {
            var profesorEncontrado = null;
            for (var i = 0; i < escuelaEncontrada.ArrayProfesores.length; i++) {
                if (escuelaEncontrada.ArrayProfesores[i].nombre === nombreProfesorModificar) {
                    profesorEncontrado = escuelaEncontrada.ArrayProfesores[i];
                    break;
                }
            }

            if (profesorEncontrado) {
                profesorEncontrado.nombre = prompt("Nuevo nombre del profesor:", profesorEncontrado.nombre);
                profesorEncontrado.tipo = prompt("Nuevo tipo del profesor (ciencias, letras, mixto):", profesorEncontrado.tipo);
                localStorage.setItem("escuelas", JSON.stringify(escuelasGuardadas));
                alert("Profesor modificado");
            } else {
                alert("Profesor no encontrado en la escuela especificada");
            }
        } else {
            alert("Escuela no encontrada");
        }
    }
}

function mostrarDatosProfesor() {
    var escuelasGuardadas = JSON.parse(localStorage.getItem("escuelas"));
    if (escuelasGuardadas) {
        for (var i = 0; i < escuelasGuardadas.length; i++) {
            var escuela = escuelasGuardadas[i];
            console.log("Escuela: "+escuela.nombre);
            if (escuela.ArrayProfesores && escuela.ArrayProfesores.length > 0) {
                var datosProfesores = [];
                for (var j = 0; j < escuela.ArrayProfesores.length; j++) {
                    datosProfesores[datosProfesores.length] = { "Nombre del Profesor": escuela.ArrayProfesores[j].nombre, "Tipo de Profesor": escuela.ArrayProfesores[j].tipo};
                }
                
                console.table(datosProfesores);
            } else {
                console.log("No hay profesores registrados en esta escuela.");
            }
        }
    } else {
        console.log("No hay datos de escuelas y profesores en el localStorage.");
    }
}

