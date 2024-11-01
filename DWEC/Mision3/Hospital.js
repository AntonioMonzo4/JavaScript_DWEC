class Hospital{
    
    constructor(nombre,localidad,responsable){
        this.nombre=nombre;
        this.localidad=localidad;
        this.reponsable=responsable;
        this.plantilla= new Array();
        this.pacientes= new Array ();

    }

    aPersonal(Personal){

        this.plantilla.push(Personal);

    }

    aPaciente(Paciente){
        this.pacientes.push(Paciente);
    }
}