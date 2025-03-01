window.onload= function(){
    document.getElementById("miFormulario").addEventListener("submit",function(event){
        if(!validarFormulario()){
            event.preventDefault();
        }
    });

    document.getElementById("nombre").addEventListener("blur",validarNombre);
    document.getElementById("dni").addEventListener("blur",validarNombre);
    document.getElementById("password").addEventListener("blur",validarNombre);
    document.getElementById("email").addEventListener("blur",validarNombre);
    document.getElementById("fecha").addEventListener("blur",validarNombre);
    document.getElementById("opciones").addEventListener("blur",validarNombre);

};

function validarNombre(){
    let valor= document.getElementById("nombre").value.trim();
    let ExpReg= "";
    let error= document.getElementById("errorNombre");

    if(!ExpReg.test(valor)){
        error.style.display="inline";
        //usuario.classList.add("error");
    }
}