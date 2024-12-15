// Variables globales
let is24HourFormat = true;
let currentMode = 0; // 0: reloj, 1: cronómetro, 2: alarma
let lightOn = false;

// Elementos del DOM
const divH = document.getElementById("divH");
const divM = document.getElementById("divM");
const divS = document.getElementById("divS");
const divD = document.getElementById("divD");
const divW = document.getElementById("divW");
const divAMPM = document.getElementById("divAMPM");
const div24h = document.getElementById("div24h");
const divLED = document.getElementById("divLED");
const butMode = document.getElementById("butMode");
const butSet = document.getElementById("butSet");
const butLight = document.getElementById("butLight");

// Actualiza la pantalla con la hora actual
function updateClock() {
    const now = new Date();
    const hours = is24HourFormat ? now.getHours() : now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const weekday = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();

    divH.textContent = hours.toString().padStart(2, '0');
    divM.textContent = minutes.toString().padStart(2, '0');
    divS.textContent = seconds.toString().padStart(2, '0');
    divD.textContent = day.toString().padStart(2, '0');
    divW.textContent = weekday;

    if (!is24HourFormat) {
        divAMPM.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
        div24h.textContent = '';
    } else {
        divAMPM.textContent = '';
        div24h.textContent = '24H';
    }
}

// Cambia entre formato de 12 y 24 horas
function toggleHourFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

// Cambia entre modos: reloj, cronómetro, alarma
function toggleMode() {
    currentMode = (currentMode + 1) % 3;

    switch (currentMode) {
        case 0: // Reloj
            updateClock();
            break;
        case 1: // Cronómetro
            divH.textContent = "00";
            divM.textContent = "00";
            divS.textContent = "00";
            break;
        case 2: // Alarma
            divH.textContent = "AL";
            divM.textContent = "AR";
            divS.textContent = "MA";
            break;
    }
}

// Enciende o apaga la luz del reloj
function toggleLight(state) {
    lightOn = state;
    divLED.style.opacity = lightOn ? "1" : "0";
}

// Asigna los eventos a los botones
butMode.addEventListener("click", toggleMode);
butSet.addEventListener("click", toggleHourFormat);
butLight.addEventListener("mousedown", () => toggleLight(true));
butLight.addEventListener("mouseup", () => toggleLight(false));

// Inicializa la pantalla
updateClock();
setInterval(updateClock, 1000);