var hospital = new Hospital("Hospital San Lorenzo", "El Escorial", "Jose");


var medica = new Personal("Ana", "médico");
var medico = new Personal("Pepe", "médico");
var enfermero = new Personal("Luis", "enfermera");
var enfermera = new Personal("Aurora", "enfermera");


var paciente1 = new Paciente("Carlos", medica);
var paciente2 = new Paciente("Maria", medica);
var paciente3 = new Paciente("Jose", medico);
var paciente4 = new Paciente("Emilio", medico);

// Prueba la creación de un hospital
function testCreacionHospital() {
    console.log("Prueba: Creación de Hospital");

    // Muestra la representación en cadena del hospital creado
    console.log(hospital.toString());
}

// Prueba la adición de personal a un hospital
function testAgregarPersonalAHospital() {
    console.log("Prueba: Agregar Personal al Hospital");


    // Agrega el personal al hospital
    hospital.aPersonal(medica);
    hospital.aPersonal(enfermero);

    // Muestra la representación en cadena del hospital con el personal agregado
    console.log(hospital.toString());
}

// Prueba la adición de pacientes al hospital
function testAgregarPacienteAHospital() {
    console.log("Prueba: Agregar Paciente al Hospital");

    // Agrega los pacientes al hospital
    hospital.aPaciente(paciente1);
    hospital.aPaciente(paciente2);

    // Muestra la representación en cadena del hospital con los pacientes agregados
    console.log(hospital.toString());
}

// Prueba para mostrar los pacientes asignados a un médico específico
function testMostrarPacientesPorMedico() {
    console.log("Prueba: Mostrar Pacientes de un Médico");


    // Agrega al hospital
    
    hospital.aPersonal(medico);
    hospital.aPersonal(enfermera);

    // Agrega los pacientes al hospital
    hospital.aPaciente(paciente3);
    hospital.aPaciente(paciente4);

    // Muestra los pacientes asignados al médico 
    console.log(hospital.mostrarPacientesPorMedico("Pepe"));
    console.log(hospital.mostrarPacientesPorMedico("Ana"));

}

// Ejecutar todas las pruebas
testCreacionHospital();
testAgregarPersonalAHospital();
testAgregarPacienteAHospital();
testMostrarPacientesPorMedico();
