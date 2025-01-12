//TEMA 2- Sintaxis JAVASCRIPT ES6

//Esto es un comentario 

//HOLA MUNDO 
<script>
    console.log ("Hola mundo"); //Muestra en consola
/* Esto es un comentario en 
Javascript multilínea */
</script>

alert("Hola Mundo");//Sale en forma de ventana 

//VARIABLES CONSTANTES Y ARRAYS

//Las variables pueden almacenar distints valores en cada momento las declaramos con let o var

let variable1; //Solo se puede acceder a ella dentro del bloque declarado {} MEJOR
var variable2; //En cualquier parte de la función donde ha sido declarada, si esta ha sido declara fuera de una función el ámbito es todo el código

//Si no se declara equivale a todo el código

//TIPOS DE DATOS 
/*
Numéricos --> number
Enteros grandes --> bigint
Booleanos
Cadenas -->String


Para comprobar el tipo de una variable usaremos la estructura typeof variable === "tipo"

Otros tipos primitivos: 
null
undefined
symbol
object
function
*/

//COERCIÓN: pasar de un tipo de datos a otro
var num = 42;

console.log(num);
console.log(num.toString());

//Normas

a === n; a !== n; //Igualdad estricta
a > n; a < n; a <= n; a >= n; a == n; a != n; //Comparadores 
//al hacer coerción a boolean asigna como false: undefined, null, 0, "" y NaN.

//ARRAY

var array1 = [];
var array2 = new Array();

array1.length // nos dice su tamaño
array1.map // crea un nuevo array tras pasarlos por funnción

const numeros = [1, 2, 3, 4];
const doblados = numeros.map(num => num * 2);

console.log(doblados); // [2, 4, 6, 8]

array1.reduce // itera sobre el arrya para juntar en un único resultado 

numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // 10

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "Luis", edad: 25 }
];

const agrupadosPorEdad = personas.reduce((acumulador, persona) => {
    if (!acumulador[persona.edad]) {
        acumulador[persona.edad] = [];
    }
    acumulador[persona.edad].push(persona);
    return acumulador;
}, {});

console.log(agrupadosPorEdad);
// {
//   25: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 25 }],
//   30: [{ nombre: "Juan", edad: 30 }]
// }

const letras = ["a", "b", "a", "c", "b", "a"];
const ocurrencias = letras.reduce((acumulador, letra) => {
    acumulador[letra] = (acumulador[letra] || 0) + 1;
    return acumulador;
}, {});

console.log(ocurrencias); // { a: 3, b: 2, c: 1 }

//CLONAR ARRAYS

array1 = { ...array2 };
array1 = JSON.parse(JSON.stringify(array2));

//CONVERSIONES ENTRE TIPOS 
var n = "42"; //Esto es una cadena
var nd = "42.04"; //Esto es una cadena
var n2 = parseInt(n); //Esto es un entero
var nd2 = parseFloat(nd2); //Esto es un decimal

//CONSTANTES; permiten almacenar un valor pero una vez creado este es invariable 
//con los arrays solo almacena la dirección de memoria pero nos permite cambiar los valores

//MODO ESTRICTO: obliga a todas las variables a ser declaradas
"use strict";

//ENTRADA Y SALIDA DE NAVEGADORES 
alert("Hoal Mondu");
console.log("Ahlo Domun");
var respuesta = confirm("Indique su respuesta");//aceptar true -- cancelar false
var x = prompt("Introduzca su respuesta", "Espacio para respuesta");

//OPERADORES 

/*Asignación
=
+=
-=
*=
/=
*/

/*Aritmeticos
+
-
*
/
%
++ Antes y después de la asignación
-- Antes y después de la asignación
*/

/*Lógicos
&& -> AND: lo uno y lo otro
|| -> OR: lo uno o lo otro
! -> negación 
*/

//CONDICIONALES

const numero = 10;

if (numero > 10) {
    console.log("El número es mayor que 10.");
} else if (numero === 10) {
    console.log("El número es igual a 10.");
} else {
    console.log("El número es menor que 10.");
}


const dia = "martes";

switch (dia) {
    case "lunes":
        console.log("Es lunes.");
        break;
    case "martes":
        console.log("Es martes.");
        break;
    case "miércoles":
        console.log("Es miércoles.");
        break;
    default:
        console.log("Es otro día.");
}

//BUCLES

for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}
// Salida: 0, 1, 2, 3, 4

let i2 = 0;
while (i < 5) {
    console.log("Iteración:", i);
    i++;
}
// Salida: 0, 1, 2, 3, 4

let i3 = 0;
do {
    console.log("Iteración:", i);
    i++;
} while (i < 5);
// Salida: 0, 1, 2, 3, 4

const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
for (let clave in persona) {
    console.log(clave, ":", persona[clave]);
}
// Salida:
// nombre : Ana
// edad : 25
// ciudad : Madrid
//Se usa para propiedades enumeradas de un objeto

const frutas = ["manzana", "banana", "pera"];
for (let fruta of frutas) {
    console.log(fruta);
}
// Salida:
// manzana
// banana
// pera
//Se usa para valores iterables de un array, mapa...

const numerosFE = [1, 2, 3, 4];
numerosFE.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});
// Salida:
// Índice 0: 1
// Índice 1: 2
// Índice 2: 3
// Índice 3: 4
//Se usa para arrays para aplicar una función por cada índice

//PARA ROMPER ESTAS ESTRUCTURAS SALVO LA ÚLTIMA USAMOS BREAK Y CONTINUE PARA SEGUIR

//FUNCIONES

function nombreF(parametro1, parametro2 = "Valor por defecto") {
    console.log("Lo que quieres que ocurra");
    return valor; //no obligatorio
}
nombreF(x, y); //llamada

//FUNCIONES FLECHA

(par1, par2) => { alert("Algo") };
() => { alert("Algo") }; //anónimas 
parametro => sentencia;


//PRESENTACIÓN

//TIPOS DE NÚMEROS 

const entero = 42;
const negativoEntero = -8;
const decimal = 3.14;
const decimalNegativo = -0.567;
const grande = 1.23e5;  // 1.23 × 10⁵ = 123000 EXPONENCIAL
const pequeño = 4.56e-3; // 4.56 × 10⁻³ = 0.00456
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
const numeroGrande = 1234567890123456789012345678901234567890n; // BigInt
const otroBigInt = BigInt(9876543210123456789);

const hex1 = 0x1A; // 26 en decimal
const hex2 = 0xFF; // 255 en decimal
const hex3 = 0xACDC; // 44252 en decimal

console.log(hex1); // 26
console.log(hex2); // 255
console.log(hex3); // 44252

const oct1 = 0o10; // 8 en decimal
const oct2 = 0o77; // 63 en decimal
const oct3 = 0o123; // 83 en decimal

console.log(oct1); // 8
console.log(oct2); // 63
console.log(oct3); // 83

const bin1 = 0b1010; // 10 en decimal
const bin2 = 0b1111; // 15 en decimal
const bin3 = 0b100000; // 32 en decimal

console.log(bin1); // 10
console.log(bin2); // 15
console.log(bin3); // 32

//CONVERSIÓN DE BASES

const decimal2 = 255;

console.log(decimal2.toString(16)); // "ff" (hexadecimal)
console.log(decimal2.toString(8));  // "377" (octal)
console.log(decimal2.toString(2));  // "11111111" (binario)

const hex = "FF";
const oct = "377";
const bin = "11111111";

console.log(parseInt(hex, 16)); // 255 (de hexadecimal a decimal)
console.log(parseInt(oct, 8));  // 255 (de octal a decimal)
console.log(parseInt(bin, 2));  // 255 (de binario a decimal)


