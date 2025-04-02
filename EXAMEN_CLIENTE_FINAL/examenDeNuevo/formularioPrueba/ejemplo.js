window.onload= function(){
    document.getElementById("miFormulario").addEventListener("submit",function(event){
        if(!validarFormulario()){
            event.preventDefault();
        }
    });

    document.getElementById("nombre").addEventListener("blur",validarNombre);
    document.getElementById("dni").addEventListener("blur",validarDNI);
    document.getElementById("password").addEventListener("blur",validarContraseña);
    document.getElementById("email").addEventListener("blur",validarEmail);
    document.getElementById("fecha").addEventListener("blur",validarFecha);
    document.getElementById("opciones").addEventListener("blur",validarOpciones);
    document.getElementById("terminos").addEventListener("blur",validarChecked);

    document.getElementsByName("genero").forEach(radio=>radio.addEventListener("blur",validarGenero));


};

function validarNombre(){
    let valor= document.getElementById("nombre").value.trim();
    let ExpReg= /^[a-zA-Z]{3,9}$/;
    let error= document.getElementById("errorNombre");
    error.textContent="";

    if(!ExpReg.test(valor)){
        error.textContent="Debe contener solo letras"
        error.style.display="inline";
        //usuario.classList.add("error");
    }else if(!valor){

        error.textContent="Escriba un nombre"
        error.style.display="inline";
    }
}

function validarDNI(){
    let valor= document.getElementById("dni").value.trim();
    let ExpReg= /^\d{8}-?[A-Z]$/;
    let error= document.getElementById("errorDni");
    error.textContent="";

    if(!ExpReg.test(valor)){
        error.textContent="Debe contener este formano NNNNNNNN-L o NNNNNNNNL"
        error.style.display="inline";
        //usuario.classList.add("error");
    } 
    if(!valor){

        error.textContent="Escriba un dni";
        error.style.display="inline";
    }
}


function validarContraseña(){
    let valor= document.getElementById("password").value.trim();
    let ExpReg= /[a-z]{4,}[A-Z]{1,}[0-9]{1,}[.-_]{1,}/;
    let error= document.getElementById("errorPassword");
    error.textContent="";

    if(!ExpReg.test(valor)){
        error.textContent="ExpReg mal"
        error.style.display="inline";
        //usuario.classList.add("error");
    }else if(!valor){

        error.textContent="No deje este campo vacío"
        error.style.display="inline";
    }
}


function validarEmail(){
    let valor= document.getElementById("email").value.trim();
    let ExpReg= /^[a-z0-9]{1,8}@[a-z]{1,8}\.[a-z]{2,3}$/;
    let error= document.getElementById("errorEmail");
    error.textContent="";

    if(!ExpReg.test(valor)){
        error.textContent="ExpReg mal"
        error.style.display="inline";
        //usuario.classList.add("error");
    }else if(!valor){

        error.textContent="No deje este campo vacío"
        error.style.display="inline";
    }
}

function validarFecha(){
    let valor= document.getElementById("fecha").value;
    
    let error= document.getElementById("errorFecha");
    error.textContent="";
    if(!valor){
        error.textContent="Debe incluir una fecha";
        error.style.display="inline";
    }
    let now = new Date();
    
    let año = now.getFullYear()-valor.getFullYear();
    let dia = now.getDate()-valor.getDate();
    let mes= now.getMonth()-valor.getMonth();
    if(mes<0||(mes===0 && dia<0)){
        año--;
    }
    if(año<18){

        error.textContent="Debe ser mayor de edad";
        error.style.display="inline";

    }


    
}

function validarOpciones(){
    let valor= document.getElementById("opciones").value;
    let error= document.getElementById("errorOpciones");

    error.textContent="";
    if(!valor){
        error.textContent="Debe seleccionar un opción";
        error.style.display="inline";
    }


}

function validarRadio(){
    let valor= document.getElementsByName("genero");
    var error=document.getElementById("errorGenero");
    let sel;
    error.textContent="";

    for(var i=0;i<valor.length;i++){
        if(valor[i].cheked){
            sel=true;
        }
    }
    if(!sel){
        error.textContent="Debe seleccionar un opción";
        error.style.display="inline";
    }


}

function validarChecked(){
    let valor= document.getElementByID("terminos");
    var error=document.getElementById("errorTerminos");
    error.textContent="";

    if(!valor.cheked){

        error.textContent="Debe seleccionar un opción";
        error.style.display="inline";
    }
    else{
        error.style.display="none";
    }
}

function validarFormulario(){
    validarNombre();
    validarDNI();
    validarContraseña();
    validarChecked();
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