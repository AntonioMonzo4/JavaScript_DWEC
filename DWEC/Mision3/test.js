



function eliminarPersonal(nombre) {
    var nuevoPersonal = [];
    for (var i = 0; i < hospital.personal.length; i++) {
        if (hospital.personal[i].nombre !== nombre) {
            nuevoPersonal.push(hospital.personal[i]);
        }
    }
    hospital.personal = nuevoPersonal;
}

function eliminarPaciente(nombre) {
    var nuevosPacientes = [];
    for (var i = 0; i < hospital.pacientes.length; i++) {
        if (hospital.pacientes[i].nombre !== nombre) {
            nuevosPacientes.push(hospital.pacientes[i]);
        }
    }
    hospital.pacientes = nuevosPacientes;
}


function visualizarHospital() {
    console.log(hospital.toString());
}


function visualizarPersonal() {
    for (var i = 0; i < hospital.personal.length; i++) {
        console.log(hospital.personal[i].toString());
    }
}

function visualizarPacientes() {
    for (var i = 0; i < hospital.pacientes.length; i++) {
        console.log(hospital.pacientes[i].toString());
    }
}

function mostrarPacientesPorMedico(nombreMedico) {
    var listaPacientes = [];
    for (var i = 0; i < hospital.pacientes.length; i++) {
        if (hospital.pacientes[i].personalAsignado.nombre === nombreMedico) {
            listaPacientes.push(hospital.pacientes[i].nombre);
        }
    }
    console.log("Médico: " + nombreMedico + " Pacientes: " + (listaPacientes.length ? listaPacientes.join(", ") : "Ninguno"));
}


var hospital = new Hospital("Hospital San Lorenzo", "El Escorial", "Jose");

var medico1 = new Personal("Ana", "médico");
var medico2 = new Personal("Pepe", "médico");

hospital.aPersonal(medico1);
hospital.aPersonal(medico2);

var paciente1 = new Paciente("Carlos", medico1);   
var paciente2 = new Paciente("Maria", medico2);    
var paciente3 = new Paciente("Luis", medico1);     

hospital.aPaciente(paciente1);
hospital.aPaciente(paciente2);
hospital.aPaciente(paciente3);

console.log("Información del hospital:");
visualizarHospital();

console.log("\nLista de personal:");
visualizarPersonal();

console.log("\nLista de pacientes:");
visualizarPacientes();


console.log("\nPacientes de Ana:");
mostrarPacientesPorMedico("Ana");

console.log("\nPacientes de Pepe:");
mostrarPacientesPorMedico("Pepe");


eliminarPersonal("Pepe");
eliminarPaciente("Carlos");

console.log("\nLista de personal después de eliminar a Pepe:");
visualizarPersonal();

console.log("\nLista de pacientes después de eliminar a Carlos:");
visualizarPacientes();

