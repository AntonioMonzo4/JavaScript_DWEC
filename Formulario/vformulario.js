function validarDNI(dni) {
    var errorDni = document.getElementById("infodni");
    var expDNI =/^([0-9]{8})(-?)([A-Z]?)$/
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    var dat = dni.match(expDNI);

    if(!dat){
        errorDni.classList.add('error');

        errorDni.textContent="Elige bien el formato"
    }

    if(!expDNI.test(dni)){
        return false;
    }

    
    
}

function validarNombre(nombre){

}

function validarContraseña(pwd){

}

function validarFecha(fecha){

}