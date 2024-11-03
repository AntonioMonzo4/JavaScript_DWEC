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

    mostrarPacientesPorMedico(nombreMedico) {
        // Buscar el médico por nombre
        var medico = null;
        for (let i = 0; i < this.personal.length; i++) {
            if (this.personal[i].nombre === nombreMedico) {
                medico = this.personal[i];
                break;
            }
        }
    
        // Si no se encuentra el médico, devolver mensaje de error
        if (medico === null) {
            return "No se encontró al médico con nombre: " + nombreMedico;
        }
    
        // Recopilar los nombres de los pacientes asignados al médico
        var listaPacientes = "";
        for (let i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].personalAsignado === medico) {
                listaPacientes += (listaPacientes ? ", " : "") + this.pacientes[i].nombre;
            }
        }
    
        // Crear el mensaje final
        return "Médico: " + medico.nombre + ", Pacientes: [" + (listaPacientes || "Ninguno") + "]";
    }
    
    
    toString() {
        return "Hospital: "+this.nombre+" Localidad: "+this.localidad+" Responsable: "+this.responsable+" Personal: ["+this.personal.map(p => p.toString()).join(", ")+"], Pacientes: ["+this.pacientes.map(p => p.toString()).join(", ")+"]";
    }
}


