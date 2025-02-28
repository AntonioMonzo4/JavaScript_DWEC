//Objeto FEChA
let d = new Date();
let da= new Date(14254662);//en milisegundos
let day= new Date("Cadena de fecha");
let dias = new Date(año,mes,dia,hora,min,seg,milisegundos)//ENERO COMIENZA EN 0

d.getDate(); //devuelve el día des mes
d.getDay(); //día de la semana entre 0-6
d.getFullYear(); //devuelve el año en cuatro dígitos 
d.getHours(); //hora de 0-23
d.getMilliseconds();//devuelve los millisegundos 0-999
d.getMinutes();//0-59
d.getMonth();//0-11
d.getSeconds();//0-59
d.toDateString();//CONVIERTE A UNA CADENA 


d.getTime();//devuelve los milisegundos desde media noche hasta 1 de enero de 1970
d.getTimezoneOffset(); //diferencia de tiempo entre GMT y la hora local
//lo mismo con UTC

//Objeto Math métodos básicos de todas las clases math 
//Number ->toFixed(numDecimales), valueOf(), toExponential()->convierte a su notación exponencial, toString() 

//STRING
var strg="Pruebas";

strg.charAt(2);//devuelve en la posición 2
strg.indexOf("r");//devuelve la posición en r 
//concat 
strg.match("busca coincidencias entre una expresión rwegular y una cadena");
strg.replace("busca","sustituye");
strg.slice("extrae parte");//extrae parte de una cadena y devuelve una nueva cadena 
strg.split(" ",3);//divida la cadena en un array de subcadenas 
strg.substring(4,7);
//toLower toUpper Case

//SET TIMEOUT 
console.log("Inicio...");

setTimeout(() => {
    console.log("Esto se muestra después de 2 segundos");
}, 2000); // Se ejecuta después de 2000 ms (2 segundos)

console.log("Fin del script");
let timeoutID = setTimeout(() => {
    console.log("Esto nunca se mostrará");
}, 3000);

// Cancelamos el timeout antes de que se ejecute
clearTimeout(timeoutID);

console.log("El setTimeout ha sido cancelado.");

//CLEAR INTERVAL 

let contador = 0;

let intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);

    if (contador === 5) {
        clearInterval(intervalo); // Detiene el intervalo después de 5 ejecuciones
        console.log("Intervalo detenido");
    }
}, 1000); // Se ejecuta cada 1 segundo

/*
<button onclick="detenerIntervalo()">Detener</button>
<script>
    let id = setInterval(() => {
        console.log("Ejecutando cada 2 segundos...");
    }, 2000);

    function detenerIntervalo() {
        clearInterval(id);
        console.log("Intervalo detenido.");
    }
</script> */
