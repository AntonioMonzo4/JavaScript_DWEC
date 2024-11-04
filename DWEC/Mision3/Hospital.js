// hospital.js

class Hospital {
    constructor(nombre, localidad, responsable) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.responsable = responsable;
        this.personal = [];
        this.pacientes = [];
    }

    aPersonal(personal) {
        this.personal.push(personal);
    }

    aPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    
    toString() {
        return "Hospital: " + this.nombre + ", Localidad: " + this.localidad + ", Responsable: " + this.responsable;
    }
}
