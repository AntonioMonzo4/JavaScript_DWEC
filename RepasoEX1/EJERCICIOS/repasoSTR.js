function generarDatos(){




var datos= prompt("Escribe tu nombre, apellidos y fecha de nacimiento (separados por espacio)");

var separado = datos.split(" ");

var nombre= separado[0];
var ape1= separado[1];
var ape2= separado[2];
var cumple= separado[3];

document.getElementById("datos").innerHTML=" Nombre: "+nombre+" Apellido 1: "+ape1+" Apellido 2: "+ape2+" Cumple: "+cumple;

document.getElementById("mayus").innerHTML=nombre.toUpperCase();

document.getElementById("nombreU").innerHTML=nombre.slice(0,1)+ape1+cumple.slice(-2);
}