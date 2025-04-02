//Funciones RELOJ

function reloj() {
    var hoy = new Date();
    var hora = hoy.getHours().toString().padStart(2, 0);
    var min = hoy.getMinutes().toString().padStart(2, 0);
    var seg = hoy.getSeconds().toString().padStart(2, 0);
    document.getElementById('reloj').innerHTML = hora + ":" + min + ":" + seg;
}

//Funciones Cronometro
var crono = false;
var tiempo = 0;
var intrevaloCrono;

function actualizarCrono() {
    var h = String(Math.floor(tiempo / 3600)).padStart(2, 0);
    var m = String(Math.floor((tiempo % 3600) / 60)).padStart(2, 0);
    var s = String(Math.floor(tiempo % 60)).padStart(2, 0);
    document.getElementById('crono').innerHTML = h + ":" + m + ":" + s;
}
function iniciar() {

    if (!crono) {
        intrevaloCrono = setInterval(() => {
            tiempo++;
            actualizarCrono();
        }, 1000)
        crono = true;
    }
}

function parar() {

    clearInterval(intrevaloCrono);
    crono = false;

}

function reiniciar() {
    parar();
    tiempo = 0;
    actualizarCrono();
}




//PERSONAS

class Datos{
    constructor(){
        this.personas=[];

    }
    
    aPersona(nuevo){
        this.personas.push(nuevo);

    }
}
class Persona {


    constructor(nombre, apellido, edad, work) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.work = work;
    }

    personaDatos(){
        

    }
}