
var tiempo = 0;
var intervaloCronometro;
var control = false;//Valida que el cronometro estas funcionando



//Actualiza el estado del reloj
function actualizarR() {
    var hoy = new Date();
    var horas = String(hoy.getHours()).padStart(2, '0');
    var minutos = String(hoy.getMinutes()).padStart(2, '0');
    var segundos = String(hoy.getSeconds()).padStart(2, '0');
    document.getElementById('reloj').innerHTML = "" + horas + ":" + minutos + ":" + segundos;
}


function actualizarC() {
    var horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
    var minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
    var segundos = String(tiempo % 60).padStart(2, '0');
    document.getElementById('crono').innerHTML = "" + horas + ":" + minutos + ":" + segundos;
}



function iniciar() {
    if (!control) {

        intervaloCronometro = setInterval(() => {

            tiempo++;
            actualizarC();
        },10);

        control=true;
    }
}

function parar() {

    clearInterval(intervaloCronometro);

    control=false;
}

function reiniciar() {
    parar();
    tiempo=0;
    actualizarC();

}