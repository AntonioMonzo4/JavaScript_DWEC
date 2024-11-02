class Alumno {
    constructor(dni, nombre, notaMedia) {
        this.dni = dni;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    modificarNota(nuevaNota) {
        this.notaMedia = nuevaNota;
    }
}

class Colegio {
    constructor(nombre, numAulas) {
        this.nombre = nombre;
        this.numAulas = numAulas;
        this.alumnos = [];
    }

    añadirAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    modificarNotaAlumno(dni, nuevaNota) {
        const alumno = this.alumnos.find(a => a.dni === dni);
        if (alumno) {
            alumno.modificarNota(nuevaNota);
        } else {
            console.log("Alumno con DNI " + dni + " no encontrado.");
        }
    }

    mostrarInfo() {
        console.log("Colegio: " + this.nombre + ", Aulas: " + this.numAulas + ", Total Alumnos: " + this.alumnos.length);
    }
}

const colegio = new Colegio("Colegio San Juan", 10);
const alumno1 = new Alumno("12345678A", "Juan", 7.5);
const alumno2 = new Alumno("23456789B", "Ana", 8.0);

colegio.añadirAlumno(alumno1);
colegio.añadirAlumno(alumno2);
colegio.mostrarInfo();
colegio.modificarNotaAlumno("12345678A", 9.0);
console.log(alumno1);
