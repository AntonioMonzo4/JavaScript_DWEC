function mostrarMensaje() {
    alert("Hola");
}
document.getElementById("Objeto1").onclick = mostrarMensaje;

//<input type="button" value="Botón miFuncion" onclick="miFuncion('cadenaParam1');" />


function inicio(){ 
    //Código a ejecutar  
  } 
  // Asignamos la función inicio al manejador window.onload 
  // Esto garantiza que el código de "inicio" se ejecute con todo el DOM 
  cargado 
  window.onload=inicio; 

  /*
   type:  dice  el  tipo  de  evento  que  es  (“click”,  “mouseover”,  etc...).  Devuelve  el  nombre  del 
evento tal cual, sin el “on”. Es útil para hacer una función que maneje varios eventos. 
  keyCode:  en  eventos  de  teclado,  almacena  el  código  de  tecla  de  la  tecla  afectada  por  el 
evento.  
  clientX / clientY: en eventos del ratón, devuelve las coordenadas X e Y donde se encontraba 
el ratón, tomando como referencia al navegador. 
  screenX / screenY: en eventos del ratón, devuelve las coordenadas X e Y donde se encontraba 
el ratón, tomando como referencia la pantalla del ordenador.
*/


function mostrarMensaje(evento){ 
    if(evento.type==="keyup"){ 
     alert(evento.keyCode); 
    } 
    else if(evento.type==="click"){ 
     alert(evento.clientX+" "+evento.clientY);  
    } 
   } 
   document.getElementById("Objeto1").onclick=mostrarMensaje; 
   document.onkeyup=mostrarMensaje;


//MANEJADORES DE EVENTOS 

function mostrarMensaje(evento){ 
    if(evento.type==="keyup"){ 
     alert(evento.keyCode); 
    } 
    else if(evento.type==="click"){ 
     alert(evento.clientX+" "+evento.clientY);  
    } 
   } 
   document.getElementById("Objeto1").addEventListener("click",mostrarMensaje); 
   document.addEventListener("keyup",mostrarMensaje); 
   document.getElementById("Objeto1").addEventListener("dblclick",function 
   (){ 
    alert("Código metido directamente"); });

//DRAG AND DROP

function allowDrop(ev) { 
    ev.preventDefault(); 
  } 
   
  function drag(ev) { 
    ev.dataTransfer.setData("text", ev.target.id); 
  } 
   
  function drop(ev) { 
    ev.preventDefault(); 
    var data = ev.dataTransfer.getData("text"); 
    ev.target.appendChild(document.getElementById(data)); 
  }