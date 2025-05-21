window.onload = () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (e) => {
        if (!confirm("¿Deseas enviar el formulario?") || !validarFormulario()) {
            e.preventDefault();
        }
    });

    document.getElementById("borrar").addEventListener("click", (e) => {
        if (!confirm("¿Deseas borrar el formulario?")) {
            e.preventDefault();
        }
    });

    const campos = ["usuario", "pwd", "dni", "nacimiento", "rama"];
    campos.forEach(id => {
        document.getElementById(id).addEventListener("blur", validarFormulario);
    });

    document.getElementsByName("horas").forEach(r => r.addEventListener("change", validarFormulario));
    document.getElementById("condiciones").addEventListener("change", validarFormulario);
};

function validarFormulario() {
    limpiarErrores();
    let valido = true;

    if (!validarUsuario()) valido = false;
    if (!validarPwd()) valido = false;
    if (!validarDNI()) valido = false;
    if (!validarNacimiento()) valido = false;
    if (!validarRama()) valido = false;
    if (!validarHoras()) valido = false;
    if (!validarCondiciones()) valido = false;

    if (!valido) {
        document.getElementById("mensajeError").textContent = "Por favor, corrige los errores antes de continuar.";
    }

    return valido;
}

function validarUsuario() {
    const usuario = document.getElementById("usuario").value.trim();
    if (!/^[a-z0-9]+$/.test(usuario)) {
        mostrarError("usuario", "El usuario sólo puede contener minúsculas y números.");
        return false;
    }
    return true;
}

function validarPwd() {
    const pwd = document.getElementById("pwd").value;
    let valido = true;

    if (pwd.length <= 8) {
        mostrarError("pwd", "La contraseña debe tener más de 8 caracteres.");
        valido = false;
    }
    if (!/[A-Z]/.test(pwd)) {
        mostrarError("pwd", "Debe contener al menos una letra mayúscula.");
        valido = false;
    }
    if (!/[a-z]/.test(pwd)) {
        mostrarError("pwd", "Debe contener al menos una letra minúscula.");
        valido = false;
    }
    if (!/[0-9]/.test(pwd)) {
        mostrarError("pwd", "Debe contener al menos un número.");
        valido = false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
        mostrarError("pwd", "Debe contener al menos un carácter especial.");
        valido = false;
    }
    return valido;
}

function validarDNI() {
    const dniInput = document.getElementById("dni");
    let dni = dniInput.value.trim();

    if (/^\d{8}[A-Z]$/.test(dni)) {
        dni = dni.slice(0, 8) + "-" + dni.slice(8);
        dniInput.value = dni;
    }

    if (!/^\d{8}-[A-Z]$/.test(dni)) {
        mostrarError("dni", "Formato de DNI inválido. Debe ser NNNNNNNN-L.");
        return false;
    }

    if (!validaDNI(dni)) {
        mostrarError("dni", "La letra del DNI no es válida.");
        return false;
    }

    return true;
}

function validaDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const [numero, letra] = dni.split("-");
    const index = parseInt(numero) % 23;
    return letras[index] === letra;
}

function validarNacimiento() {
    const nacimientoInput = document.getElementById("nacimiento");
    const nacimiento = new Date(nacimientoInput.value);
    if (isNaN(nacimiento.getTime())) {
        mostrarError("nacimiento", "Fecha de nacimiento no válida.");
        return false;
    }

    const hoy = new Date();
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    const cumpleEsteAño = new Date(nacimiento);
    cumpleEsteAño.setFullYear(hoy.getFullYear());

    if (edad < 18 || (edad === 18 && hoy < cumpleEsteAño)) {
        mostrarError("nacimiento", "Debes ser mayor de edad.");
        return false;
    }

    return true;
}

function validarRama() {
    const rama = document.getElementById("rama").value;
    if (rama === "") {
        mostrarError("rama", "Debes seleccionar una rama.");
        return false;
    }
    return true;
}

function validarHoras() {
    const seleccion = document.querySelector("input[name='horas']:checked");
    if (!seleccion) {
        mostrarError("horas", "Debes seleccionar una cantidad de horas.");
        return false;
    }
    return true;
}

function validarCondiciones() {
    const condiciones = document.getElementById("condiciones").checked;
    if (!condiciones) {
        mostrarError("condiciones", "Debes aceptar las condiciones.");
        return false;
    }
    return true;
}

function mostrarError(campoId, mensaje) {
    const campo = document.getElementById(campoId);
    const info = document.getElementById("info" + campoId);
    if (campo) campo.classList.add("error");
    if (info) info.textContent = mensaje;
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".info").forEach(el => el.textContent = "");
    document.getElementById("mensajeError").textContent = "";
}
f