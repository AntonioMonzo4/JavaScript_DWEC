// validar.js

// Función para validar el formato del DNI (incluye cálculo de la letra)
function validaDNI(dni) {
    // Patrón para DNI con o sin guión: 8 números seguidos opcionalmente de guión y letra
    const dniPattern = /^(\d{8})(-?)([A-Z])?$/;
    const match = dni.toUpperCase().match(dniPattern);
    
    if (!match) return false;
    
    const numero = match[1];
    const letra = match[3];
    
    // Si no tiene letra, devolvemos el DNI con la letra calculada
    if (!letra) {
        return dni + "-" + calcularLetraDNI(numero);
    }
    
    // Si tiene letra, verificamos que sea correcta
    return letra === calcularLetraDNI(numero);
}

// Función para calcular la letra del DNI
function calcularLetraDNI(numero) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const resto = numero % 23;
    return letras.charAt(resto);
}

// Función para validar el nombre de usuario (solo minúsculas y números)
function validarUsuario(usuario) {
    const pattern = /^[a-z0-9]+$/;
    return pattern.test(usuario);
}

// Función para validar la contraseña
function validarPassword(pwd) {
    const errors = [];
    
    if (pwd.length <= 8) {
        errors.push("La contraseña debe tener más de 8 caracteres.");
    }
    if (!/[A-Z]/.test(pwd)) {
        errors.push("Debe contener al menos una mayúscula.");
    }
    if (!/[a-z]/.test(pwd)) {
        errors.push("Debe contener al menos una minúscula.");
    }
    if (!/[0-9]/.test(pwd)) {
        errors.push("Debe contener al menos un número.");
    }
    if (!/[^A-Za-z0-9]/.test(pwd)) {
        errors.push("Debe contener al menos un carácter especial.");
    }
    
    return errors;
}

// Función para validar la fecha de nacimiento (mayor de edad)
function validarFechaNacimiento(fecha) {
    if (!fecha) return false;
    
    const fechaNacimiento = new Date(fecha);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        return edad - 1 >= 18;
    }
    
    return edad >= 18;
}

// Función para mostrar errores en un campo
function mostrarError(campoId, mensajeId, mensajes) {
    const campo = document.getElementById(campoId);
    const info = document.getElementById(mensajeId);
    
    if (mensajes && mensajes.length > 0) {
        campo.classList.add('error');
        info.innerHTML = mensajes.join('<br>');
        return false;
    } else {
        campo.classList.remove('error');
        info.innerHTML = '';
        return true;
    }
}

// Función para validar un campo específico
function validarCampo(campoId) {
    const campo = document.getElementById(campoId);
    const valor = campo.value.trim();
    
    switch (campoId) {
        case 'usuario':
            if (!valor) {
                return mostrarError(campoId, 'infousuario', ["El usuario no puede estar vacío."]);
            }
            if (!validarUsuario(valor)) {
                return mostrarError(campoId, 'infousuario', ["El usuario solo puede contener minúsculas y números."]);
            }
            return mostrarError(campoId, 'infousuario', []);
            
        case 'pwd':
            if (!valor) {
                return mostrarError(campoId, 'infopwd', ["La contraseña no puede estar vacía."]);
            }
            const erroresPwd = validarPassword(valor);
            return mostrarError(campoId, 'infopwd', erroresPwd);
            
        case 'dni':
            if (!valor) {
                return mostrarError(campoId, 'infodni', ["El DNI no puede estar vacío."]);
            }
            const dniValido = validaDNI(valor);
            if (dniValido === false) {
                return mostrarError(campoId, 'infodni', ["Formato de DNI incorrecto o letra no válida."]);
            } else if (typeof dniValido === 'string') {
                // Si el DNI no tenía guión pero es válido, lo actualizamos
                campo.value = dniValido;
                return mostrarError(campoId, 'infodni', []);
            }
            return mostrarError(campoId, 'infodni', []);
            
        case 'nacimiento':
            if (!valor) {
                return mostrarError(campoId, 'infonacimiento', ["La fecha de nacimiento no puede estar vacía."]);
            }
            if (!validarFechaNacimiento(valor)) {
                return mostrarError(campoId, 'infonacimiento', ["Debes ser mayor de edad."]);
            }
            return mostrarError(campoId, 'infonacimiento', []);
            
        case 'rama':
            if (!valor) {
                return mostrarError(campoId, 'inforama', ["Debes seleccionar una rama."]);
            }
            return mostrarError(campoId, 'inforama', []);
            
        case 'horas':
            const horasSeleccionada = document.querySelector('input[name="horas"]:checked');
            if (!horasSeleccionada) {
                return mostrarError(campoId, 'infohoras', ["Debes seleccionar horas de programación."]);
            }
            return mostrarError(campoId, 'infohoras', []);
            
        case 'condiciones':
            if (!document.getElementById('condiciones').checked) {
                return mostrarError(campoId, 'infocondiciones', ["Debes aceptar las condiciones."]);
            }
            return mostrarError(campoId, 'infocondiciones', []);
            
        default:
            return true;
    }
}

// Función para validar todo el formulario
function validarFormulario(event) {
    let valido = true;
    
    // Validamos todos los campos
    valido = validarCampo('usuario') && valido;
    valido = validarCampo('pwd') && valido;
    valido = validarCampo('dni') && valido;
    valido = validarCampo('nacimiento') && valido;
    valido = validarCampo('rama') && valido;
    valido = validarCampo('horas') && valido;
    valido = validarCampo('condiciones') && valido;
    
    // Si hay errores, prevenimos el envío del formulario
    if (!valido) {
        event.preventDefault();
        document.getElementById('mensajeError').textContent = "Por favor, corrige los errores en el formulario.";
    } else {
        document.getElementById('mensajeError').textContent = "";
        if (!confirm('¿Estás seguro de que quieres enviar el formulario?')) {
            event.preventDefault();
        }
    }
}

// Función para confirmar el borrado del formulario
function confirmarBorrado(event) {
    if (!confirm('¿Estás seguro de que quieres borrar todos los datos del formulario?')) {
        event.preventDefault();
    }
}

// Evento cuando se carga la página
window.onload = function() {
    // Asignamos eventos a los botones
    document.getElementById('enviar').addEventListener('click', validarFormulario);
    document.getElementById('borrar').addEventListener('click', confirmarBorrado);
    
    // Asignamos eventos de pérdida de foco a los campos
    document.getElementById('usuario').addEventListener('blur', function() { validarCampo('usuario'); });
    document.getElementById('pwd').addEventListener('blur', function() { validarCampo('pwd'); });
    document.getElementById('dni').addEventListener('blur', function() { validarCampo('dni'); });
    document.getElementById('nacimiento').addEventListener('blur', function() { validarCampo('nacimiento'); });
    document.getElementById('rama').addEventListener('blur', function() { validarCampo('rama'); });
    
    // Para los radio buttons y checkbox necesitamos un enfoque diferente
    const radiosHoras = document.querySelectorAll('input[name="horas"]');
    radiosHoras.forEach(radio => {
        radio.addEventListener('change', function() { validarCampo('horas'); });
    });
    
    document.getElementById('condiciones').addEventListener('change', function() { 
        validarCampo('condiciones'); 
    });
};