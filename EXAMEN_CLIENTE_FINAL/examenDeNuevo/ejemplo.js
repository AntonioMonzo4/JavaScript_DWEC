document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("miFormulario").addEventListener("submit",function(e){

        if(!validarFormulario()){

            e.preventDefault();
        }
    })
  
    document.getElementById("nombre").addEventListener("blur",validarNombre);
    document.getElementById().addEventListener("blur",validarFecha());
    //document.getElementById().addEventListener("blur",validar());
    //document.getElementById().addEventListener("blur",validar());
    //document.getElementById().addEventListener("blur",validar());
    //document.getElementById().addEventListener("blur",validar());
    //document.getElementById().addEventListener("blur",validar());
    //document.getElementById().addEventListener("blur",validar());
})

function validarNombre(){
    let error= document.getElementById("errorNombre");
    error.textContent="";
    let expReg=/[a-z]{8}/;
    let valor=document.getElementById("nombre").value;
    
    if(!expReg.test(valor)){

        error.textContent="Error EXPreg";
        error.style.display="inline";
    }
    if(!valor){

        error.textContent="Error rellenar";
        error.style.display="inline";
        
    }
}

function validarFecha(){
    let error= document.getElementById("errorFecha");
    error.textContent="";
    //let expReg=/^/;
    let valor=document.getElementById("fecha").value;
    let hoy= new Date();
    valor
    if(!expReg.test(valor)){

        error.textContent="Error EXPreg";
        error.style.display="inline";
    }
    if(!valor){

        error.textContent="Error rellenar";
        error.style.display="inline";
        
    }
}

function validarFormulario(){

    validarNombre();
    validarFecha();

    let e=document.getElementsByClassName("error");
    console.log(e.length);
    for(var i=0;e.length;i++){
        if(e[i].style.display="inline"){

            return false;
        }
    }

}