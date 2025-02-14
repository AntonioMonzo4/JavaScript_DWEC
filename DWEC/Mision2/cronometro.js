

//Actualiza el estado del reloj
function actualizarR() {
    var hoy = new Date();
    var horas = String(hoy.getHours()).padStart(2, '0');
    var minutos = String(hoy.getMinutes()).padStart(2, '0');
    var segundos = String(hoy.getSeconds()).padStart(2, '0');
    document.getElementById('reloj').innerHTML = "" + horas + ":" + minutos + ":" + segundos;
}

var tiempo = 0;
var intervaloCronometro;
var crono = false;//Valida que el cronometro estas funcionando

//Actualiza el estado del cronometro
function actualizarC() {
    var horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
    var minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
    var segundos = String(tiempo % 60).padStart(2, '0');
    document.getElementById('cronometro').innerHTML = "" + horas + ":" + minutos + ":" + segundos;
}

function iniciarC() {
    if (!crono) {
        intervaloCronometro = setInterval(() => { 
            tiempo++;
            actualizarC();
        }, 1000);
        crono = true;
    }
}

function pararC() {
    clearInterval(intervaloCronometro);
    crono = false;
}

function reiniciarC() {
    pararC();
    tiempo = 0;
    actualizarC();
}


