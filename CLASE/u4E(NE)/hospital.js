class Paciente {
    constructor(dni, nombre, enfermedad) {
        this.dni = dni;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }
}

class Hospital {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.pacientes = [];
    }

    // Método para añadir un paciente
    añadirPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    // Método para dar de alta a un paciente
    darAltaPaciente(dni) {
        const index = this.pacientes.findIndex(p => p.dni === dni);
        if (index !== -1) {
            this.pacientes.splice(index, 1); // Elimina al paciente de la lista
            console.log(`Paciente con DNI ${dni} dado de alta.`);
        } else {
            console.log(`Paciente con DNI ${dni} no encontrado.`);
        }
    }

    // Método para mostrar información de los pacientes
    mostrarPacientes() {
        console.log(`Pacientes en el hospital ${this.nombre}:`);
        this.pacientes.forEach(paciente => {
            console.log(`DNI: ${paciente.dni}, Nombre: ${paciente.nombre}, Enfermedad: ${paciente.enfermedad}`);
        });
    }
}

// Ejemplo de uso
const hospital = new Hospital("Hospital General", "Barcelona");
const paciente1 = new Paciente("12345678A", "Carlos", "Gripe");
const paciente2 = new Paciente("23456789B", "Lucía", "Fractura");

hospital.añadirPaciente(paciente1);
hospital.añadirPaciente(paciente2);
hospital.mostrarPacientes(); // Muestra información de los pacientes
hospital.darAltaPaciente("12345678A"); // Da de alta a Carlos
hospital.mostrarPacientes(); // Muestra información actualizada de los pacientes
