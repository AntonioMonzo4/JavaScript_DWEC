const prototipoAlarma = {
  sonar: function () {
    return 'Sonando alarma ' + this.etiqueta + ' programada a las ' + this.hora.toString().padStart(2, '0') + ':' + this.minutos.toString().padStart(2, '0');
  },
  debeSonar: function (horaActual, minutosActual, diaSemanaActual) {
    if (!this.activa) return false;

    if (horaActual !== this.hora || minutosActual !== this.minutos) {
      return false;
    }

    const mapaDias = {
      "lunes": this.lunes,
      "martes": this.martes,
      "miercoles": this.miercoles,
      "jueves": this.jueves,
      "viernes": this.viernes,
      "sabado": this.sabado,
      "domingo": this.domingo
    };

    const algunDiaSeleccionado = Object.values(mapaDias).some(function (val) { return val; });
    if (!algunDiaSeleccionado) {
      return true;
    }

    return mapaDias[diaSemanaActual];
  }
};

function Alarma(etiqueta, hora, minutos, diasRepeticion) {
  this.etiqueta = etiqueta || "Alarma";
  this.hora = hora;
  this.minutos = minutos;
  this.activa = true;

  this.lunes = false;
  this.martes = false;
  this.miercoles = false;
  this.jueves = false;
  this.viernes = false;
  this.sabado = false;
  this.domingo = false;

  if (diasRepeticion && diasRepeticion.length > 0) {
    diasRepeticion.forEach(function (dia) {
      this[dia] = true;
    }.bind(this));
  }
}

Alarma.prototype = Object.create(prototipoAlarma);
Alarma.prototype.constructor = Alarma; Alarma.__proto__ = prototipoAlarma;

let alarmas = [];
let diasSeleccionados = [];

const elementoHora = document.getElementById('hora');
const elementoFecha = document.getElementById('fecha');
const entradaEtiquetaAlarma = document.getElementById('etiqueta-alarma');
const entradaHorasAlarma = document.getElementById('horas-alarma');
const entradaMinutosAlarma = document.getElementById('minutos-alarma');
const botonAgregarAlarma = document.getElementById('agregar-alarma');
const contenedorAlarmas = document.getElementById('contenedor-alarmas');
const botonesDia = document.querySelectorAll('.boton-dia');

document.addEventListener('DOMContentLoaded', function () {
  cargarAlarmas();
  actualizarReloj();
  setInterval(actualizarReloj, 1000);
  verificarAlarmas();
  setInterval(verificarAlarmas, 1000);

  botonAgregarAlarma.addEventListener('click', agregarAlarma);

  botonesDia.forEach(function (boton) {
    boton.addEventListener('click', function () {
      boton.classList.toggle('activo');
      const dia = boton.dataset.dia;

      if (boton.classList.contains('activo')) {
        if (!diasSeleccionados.includes(dia)) {
          diasSeleccionados.push(dia);
        }
      } else {
        diasSeleccionados = diasSeleccionados.filter(function (d) { return d !== dia; });
      }
    });
  });
});

function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  elementoHora.textContent = horas + ':' + minutos + ':' + segundos;

  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  elementoFecha.textContent = dias[ahora.getDay()] + ', ' + ahora.getDate() + ' de ' + meses[ahora.getMonth()] + ' de ' + ahora.getFullYear();
}

function agregarAlarma() {
  const etiqueta = entradaEtiquetaAlarma.value.trim();
  const horas = parseInt(entradaHorasAlarma.value) || 0;
  const minutos = parseInt(entradaMinutosAlarma.value) || 0;

  if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
    alert("Por favor, introduce una hora válida (0-23 horas y 0-59 minutos)");
    return;
  }

  const nuevaAlarma = new Alarma(etiqueta, horas, minutos, diasSeleccionados);
  alarmas.push(nuevaAlarma);
  guardarAlarmas();
  renderizarAlarmas();

  entradaEtiquetaAlarma.value = '';
  entradaHorasAlarma.value = '0';
  entradaMinutosAlarma.value = '0';
  diasSeleccionados = [];
  botonesDia.forEach(function (btn) { btn.classList.remove('activo'); });
}

function renderizarAlarmas() {
  contenedorAlarmas.innerHTML = '';

  if (alarmas.length === 0) {
    contenedorAlarmas.innerHTML = '<p>No hay alarmas configuradas</p>';
    return;
  }

  alarmas.forEach(function (alarma, indice) {
    const diasRepeticion = [];
    if (alarma.lunes) diasRepeticion.push('Lunes');
    if (alarma.martes) diasRepeticion.push('Martes');
    if (alarma.miercoles) diasRepeticion.push('Miércoles');
    if (alarma.jueves) diasRepeticion.push('Jueves');
    if (alarma.viernes) diasRepeticion.push('Viernes');
    if (alarma.sabado) diasRepeticion.push('Sábado');
    if (alarma.domingo) diasRepeticion.push('Domingo');

    const elementoAlarma = document.createElement('div');
    elementoAlarma.className = 'item-alarma';
    elementoAlarma.innerHTML =
      '<div class="info-alarma">' +
      '<div class="etiqueta-alarma">' + alarma.etiqueta + '</div>' +
      '<div class="hora-alarma">' + alarma.hora.toString().padStart(2, '0') + ':' + alarma.minutos.toString().padStart(2, '0') + '</div>' +
      '<div class="dias-alarma">' + (diasRepeticion.length > 0 ? diasRepeticion.join(', ') : 'No repetir') + '</div>' +
      '</div>' +
      '<div class="acciones-alarma">' +
      '<button class="boton-activar ' + (alarma.activa ? '' : 'inactivo') + '" data-indice="' + indice + '">' +
      (alarma.activa ? 'ON' : 'OFF') +
      '</button>' +
      '<button class="boton-eliminar" data-indice="' + indice + '">Eliminar</button>' +
      '</div>';

    contenedorAlarmas.appendChild(elementoAlarma);
  });

  document.querySelectorAll('.boton-eliminar').forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      alarmas.splice(parseInt(e.target.dataset.indice), 1);
      guardarAlarmas();
      renderizarAlarmas();
    });
  });

  document.querySelectorAll('.boton-activar').forEach(function (boton) {
    boton.addEventListener('click', function (e) {
      const indice = parseInt(e.target.dataset.indice);
      alarmas[indice].activa = !alarmas[indice].activa;
      guardarAlarmas();
      renderizarAlarmas();
    });
  });
}

function verificarAlarmas() {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutoActual = ahora.getMinutes();
  const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const diaActual = dias[ahora.getDay()];

  alarmas.forEach(function (alarma) {
    if (alarma.debeSonar(horaActual, minutoActual, diaActual)) {
      alert(alarma.sonar());
    }
  });
}

function guardarAlarmas() {
  localStorage.setItem('alarmas', JSON.stringify(alarmas));
}

function cargarAlarmas() {
  const alarmasGuardadas = localStorage.getItem('alarmas');
  if (alarmasGuardadas) {
    const alarmasParseadas = JSON.parse(alarmasGuardadas);
    alarmas = alarmasParseadas.map(function (datosAlarma) {
      const alarma = new Alarma(
        datosAlarma.etiqueta,
        datosAlarma.hora,
        datosAlarma.minutos
      );

      alarma.activa = datosAlarma.activa;
      alarma.lunes = datosAlarma.lunes;
      alarma.martes = datosAlarma.martes;
      alarma.miercoles = datosAlarma.miercoles;
      alarma.jueves = datosAlarma.jueves;
      alarma.viernes = datosAlarma.viernes;
      alarma.sabado = datosAlarma.sabado;
      alarma.domingo = datosAlarma.domingo;

      return alarma;
    });
  }
  renderizarAlarmas();
}