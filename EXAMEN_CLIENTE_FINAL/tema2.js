//VARIABLES 

var edad=42;
let edadBloque=42;
const constante = 10;

//Pueden ser enteros/decimales/3e7(30000000)/0327/0xA3F2

var cadena = "Hola Mundo";

// \n es salto de línea, \t tabulador, \" comillas dobles, \' comilllas simples 

//Conversión 
parseInt("42");
parseFloat("34");
""+42;

//Operadores == != === !=== < > >= <= + - * / % ++ -- += && || ! 

//array 

var array = [];
a[0]="hola";
delete a[0];
"hola" in array;
array instanceof Array;
typeof array; //devuelve el tipo 
//Clonar array 
let clon ={...array};//Para hacer copias usar parse y stringify
array.join("separador");//devuelve cadena con todos los elementos del array
array.push(elemneto);//añade al final el elemento si son varios se añaden en el orden seleccionado 
array.pop()//devuelve el ultimo elemento de la fila y lo elimina 
array.reverse()//invierte el orden del array
//sort ordena alfabéticamnete
array.slice(0,4);//devuelve los elementos del inicio 0 hasta eñl final 4 si no se indica este es el fin 







if (condition) {
 //código   
}

if (condition) {
    //código
} else {
    //código
}

while (condition) {
    //código
}

do {
    //código
} while (condition);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

array.forEach(element => {
    //código
});

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const element of object) {
    //código
}

console.log("texto que se ve en consola");


"use strict";//obliga a que todas las variiables sean declaradas

alert("hola mundo");
let respuesta =confirm("¿pregunta?");
alert("respuesta");
variable=prompt("Introduce edad","edad");

function name(params) {
    //código
}

//intro dom 
document.getElementById('idElemento').src = "foto.jpg";