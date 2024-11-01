class Paciente {

    constructor(nombre) {

        this.nombre = nombre;
    }

    set medico(Personal) {

        if (Personal.especialidad === "medico") {
            this.medico = Personal;
        }
    }

   

}
