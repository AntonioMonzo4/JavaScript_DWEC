

var formato = true;
var modo = 0;
var luz = false;
var crono = false;
var tcrono = 0;
var intervalo;

var divH = document.getElementById("divH");
var divM = document.getElementById("divM");
var divS = document.getElementById("divS");
var divD = document.getElementById("divD");
var divW = document.getElementById("divW");
var divAMPM = document.getElementById("divAMPM");
var div24h = document.getElementById("div24h");
var divLED = document.getElementById("divLED");
var butMode = document.getElementById("butMode");
var butSet = document.getElementById("butSet");
var butLight = document.getElementById("butLight");
var divAlar = document.getElementById("divAlarm");
var divSignal = document.getElementById("divSignal");

function actualizarReloj() {
    if (modo !== 0) return;

    var now = new Date();
    var hora = formato ? now.getHours() : now.getHours() % 12 || 12;
    var min = now.getMinutes();
    var seg = now.getSeconds();
    var dia = now.getDate();
    var dSemana = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();

    divH.textContent = hora.toString().padStart(2, '0');
    divM.textContent = min.toString().padStart(2, '0');
    divS.textContent = seg.toString().padStart(2, '0');
    divD.textContent = dia.toString().padStart(2, '0');
    divW.textContent = dSemana;

    if (!formato) {
        divAMPM.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
        div24h.textContent = '';
    } else {
        divAMPM.textContent = '';
        div24h.textContent = '24H';
    }
}

function formatoHpra() {
    if (modo === 0) {
        if (formato) {
            formato = false;
        } else {
            formato = true;
        }
        actualizarReloj();
    }
}

function cambiaModo() {
    modo = (modo + 1) % 3;

    switch (modo) {
        case 0:
            clearInterval(intervalo);
            actualizarReloj();
            break;
        case 1:
            clearInterval(intervalo);
            crono = false;
            tcrono = 0;
            actualizarCrono();
            divD.textContent = "";
            divAMPM.textContent = "";
            divAlar.textContent = "";
            divSignal.textContent = "";
            break;
        case 2:
            clearInterval(intervalo);
            divH.textContent = "00";
            divM.textContent = "00";
            divS.textContent = "00";
            divW.textContent = "AL";
            divAMPM.textContent = "";
            divSignal.textContent = "";
            di
            break;
    }
}

function actualizarCrono() {

    var minu = Math.floor(tcrono / 6000);
    var sec = Math.floor((tcrono % 6000) / 100);
    var mili = tcrono % 100;

    divH.textContent = minu.toString().padStart(2, '0');
    divM.textContent = sec.toString().padStart(2, '0');
    divS.textContent = mili.toString().padStart(2, '0');
}


function botonCrono() {
    if (modo !== 1) return;

    if (crono) {
        clearInterval(intervalo);
        crono = false;
    } else {
        intervalo = setInterval(() => {
            tcrono++;
            actualizarCrono();
        }, 10);
        crono = true;
    }
}


function cambiarLuz(state) {
    luz = state;
    divLED.style.opacity = luz ? "0.7" : "0";
}

butMode.addEventListener("click", cambiaModo);
butSet.addEventListener("click", () => {
    if (modo === 1) {
        botonCrono();
    } else {
        formatoHpra();
    }
});
butLight.addEventListener("mousedown", () => cambiarLuz(true));
butLight.addEventListener("mouseup", () => cambiarLuz(false));


actualizarReloj();
setInterval(actualizarReloj, 1000);
