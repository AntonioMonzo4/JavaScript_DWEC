window.addEventListener("load", inicio);

function inicio(){
   document.getElementById("crearP").addEventListener("click",crearParrafo);
   document.getElementById("crearI").addEventListener("click",crearImagen);
   document.getElementById("borrarP").addEventListener("click",borrarParrafo);   
}

function crearParrafo(){
    let parrafo=document.createElement("p");
    let texto = document.createTextNode(document.getElementById("texto").value);
    parrafo.appendChild(texto);

    let contenido= document.getElementById("div1");
    contenido.appendChild(parrafo);
}

function crearImagen(){
    let imagen= document.createElement("img");

    imagen.src="goku.jpg";
    let contenido = document.getElementById("div3");
    contenido.appendChild(imagen);


}

function borrarParrafo(){
    let contenido= document.getElementById("div3");
    let hijo = contenido.lastChild;
    contenido.removeChild(hijo);

}

