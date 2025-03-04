window.onload = function () {

    document.getElementById("miFormulario").addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    })

    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("dni").addEventListener("blur", validarDNI);
    document.getElementById("password").addEventListener("blur", validarContraseña);
    document.getElementById("email").addEventListener("blur", validarEmail);
    document.getElementById("fecha").addEventListener("blur", validarFecha);
    document.getElementById("opciones").addEventListener("blur", validarOpciones);
    document.getElementById("terminos").addEventListener("blur", validarChecked);

    document.getElementsByName("genero").forEach(radio => radio.addEventListener("blur", validarGenero));

}

function validarNombre() {
    let cont = document.getElementById("nombre").value;
    let expReg = /([a-z]){3}\d{4}([._-]{2})/;
    let error = document.getElementById("errorNombre");
    error.textContent = "";
    if (!expReg.test(cont)) {

        error.textContent = "Fallo en la expReg";
        error.style.display = "inline";
    }
    if (!cont) {
        error.textContent = "Escriba un valor";
        error.style.display = "inline";

    }
}

function validarDNI(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    
    let cont = document.getElementById("dni").value;
    let expReg = /^\d{8}-?[A-Z]$/;
    let error = document.getElementById("errorDni");
    error.textContent = "";

    console.log(cont[(cont.length)-1]);
    console.log(letras[cont.slice(0,8)%23]);
    console.log(cont.slice(0,8));
    
    if (!expReg.test(cont)) {

        error.textContent = "Fallo en la expReg";
        error.style.display = "inline";
    }
    if (!cont) {
        error.textContent = "Escriba un valor";
        error.style.display = "inline";

    }
    if(cont[(cont.length)-1]!==letras[cont.slice(0,8)%23]){

        error.textContent = "DNI falso";
        error.style.display = "inline";
    }
}

function validarFormulario() {
    validarNombre();
    validarDNI();


    let errores = document.getElementsByClassName("error");
    for (let i = 0; i < errores.length; i++) {
        if (errores.style.display === "inline") {
            return false;
        }
    }
}