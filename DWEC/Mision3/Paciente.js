class Paciente {
    constructor(nombre, personalAsignado) {
        this.nombre = nombre;
        this.personalAsignado = personalAsignado;
    }

    toString() {
        return "Paciente: " + this.nombre + " Personal Asignado: " + this.personalAsignado.nombre;
    }
}


