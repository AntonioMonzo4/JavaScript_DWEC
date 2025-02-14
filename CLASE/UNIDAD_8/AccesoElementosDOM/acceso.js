window.addEventListener("load", inicio);

function inicio(){

    document.getElementById("cambiarTexto").addEventListener("click",cambiarTextos);
    document.getElementById("cambiarClase").addEventListener("click",cambiarClase);
    document.getElementById("quitarClase").addEventListener("click",quitarClase);
}

function cambiarTextos(){
    document.getElementById("parrafo1").innerHTML = "Cambio en el párrafo1";
    document.getElementsByTagName("p")[1].innerHTML = "Cambio en el párrafo2";
    document.getElementsByClassName("claseParrafo")[0].innerHTML = "Cambio de parrafo3";
}

function cambiarClase(){
    document.getElementById("parrafo1").setAttribute("class","claseParrafo");
    document.getElementById("parrafo2").className = "claseParrafo";
}

function quitarClase(){
    let elementos= document.getElementsByTagName("p");
    for(let i = 0; i <elementos.length; i++ ){
        elementos[i].className = "";
    }
}