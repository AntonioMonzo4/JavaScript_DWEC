//OBJETOS DEFINIDOS POR EL USUARIO
class Persona{

    constructor(nombre,dni,altura){

    this.nombre=nombre;
    this.dni=dni;
    this._altura=altura;//Sino no funciona set
    //this._altura=altura;

    }
    set altura (altura/**alt */){
        this._altura=altura;
        //this._altura=alt;

    }
    get altura(){
        return this.altura;
        //return this._altura;
    }
    
    saludar() {
        console.log("Hola me llamo "+this.nombre);
        
    }

    static salud(){
        console.log("hola");
    }
}

let Antonio= new Persona("Antonio","51234548U",174 );
Antonio.dni="11111111A";
Antonio.saludar();
Persona.salud();
//Herencia class ClaseHijo extends ClasePadre


