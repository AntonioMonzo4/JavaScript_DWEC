
class Alumno {
    constructor(dni, nombre, notaMedia) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    // Método para modificar la nota media
    modificarNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
    }
}

class Colegio {
    constructor(nombre, numAulas) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.alumnos = [];
    }

    // Método para añadir un alumno
    añadirAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para modificar la nota media de un alumno
    modificarNotaAlumno(dni, nuevaNota) {
        const alumno = this.alumnos.find(a => a.dni === dni);
        if (alumno) {
            alumno.modificarNotaMedia(nuevaNota);
        } else {
            console.log(`Alumno con DNI ${dni} no encontrado.`);
        }
    }

    // Método para mostrar información del colegio
    mostrarInfo() {
        console.log(`Colegio: ${this.nombre}, Aulas: ${this.numAulas}, Alumnos: ${this.alumnos.length}`);
    }
}

// Ejemplo de uso
const colegio = new Colegio("Colegio San Juan", 10);
const alumno1 = new Alumno("12345678A", "Juan", 7.5);
const alumno2 = new Alumno("23456789B", "Ana", 8.0);

colegio.añadirAlumno(alumno1);
colegio.añadirAlumno(alumno2);
colegio.mostrarInfo(); // Muestra información del colegio
colegio.modificarNotaAlumno("12345678A", 9.0); // Modifica la nota de Juan
console.log(alumno1); // Muestra la información de Juan


console.log(IES.notaMediaC);


