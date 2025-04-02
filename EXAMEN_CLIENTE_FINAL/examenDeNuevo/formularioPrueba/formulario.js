window.onload = function () {
    document.getElementById("miFormulario").addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });
    
    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("dni").addEventListener("blur", validarDni);
    document.getElementById("password").addEventListener("blur", validarPassword);
    document.getElementById("email").addEventListener("blur", validarEmail);
    document.getElementById("fecha").addEventListener("blur", validarFecha);
    document.getElementById("opciones").addEventListener("blur", validarOpciones);
};

function validarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}$/;
    let errorNombre = document.getElementById("errorNombre");
    
    if (!regexNombre.test(nombre)) {
        errorNombre.style.display = "inline";
    } else {
        errorNombre.style.display = "none";
    }
}

function validarDni() {
    let dni = document.getElementById("dni").value.trim();
    let regexDNI = /^\d{8}-[A-Za-z]$/;
    let errorDni = document.getElementById("errorDni");
    
    if (!regexDNI.test(dni)) {
        errorDni.style.display = "inline";
    } else {
        errorDni.style.display = "none";
    }
}

function validarPassword() {
    let password = document.getElementById("password").value.trim();
    let errorPassword = document.getElementById("errorPassword");
    
    if (password.length < 6) {
        errorPassword.style.display = "inline";
    } else {
        errorPassword.style.display = "none";
    }
}

function validarEmail() {
    let email = document.getElementById("email").value.trim();
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorEmail = document.getElementById("errorEmail");
    
    if (!regexEmail.test(email)) {
        errorEmail.style.display = "inline";
    } else {
        errorEmail.style.display = "none";
    }
}

function validarFecha() {
    let fecha = document.getElementById("fecha").value;
    let errorFecha = document.getElementById("errorFecha");
    
    if (fecha === "") {
        errorFecha.style.display = "inline";
    } else {
        errorFecha.style.display = "none";
    }
}

function validarOpciones() {
    let opciones = document.getElementById("opciones").value;
    let errorOpciones = document.getElementById("errorOpciones");
    
    if (opciones === "") {
        errorOpciones.style.display = "inline";
    } else {
        errorOpciones.style.display = "none";
    }
}

function validarGenero() {
    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let errorGenero = document.getElementById("errorGenero");
    
    if (!generoSeleccionado) {
        errorGenero.style.display = "inline";
    } else {
        errorGenero.style.display = "none";
    }
}

function validarFormulario() {
    validarNombre();
    validarDni();
    validarPassword();
    validarEmail();
    validarFecha();
    validarOpciones();
    validarGenero();
    
    let errores = document.getElementsByClassName("error");
    for (let i = 0; i < errores.length; i++) {
        if (errores[i].style.display === "inline") {
            return false;
        }
    }
    return true;
}