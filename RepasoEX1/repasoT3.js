//TEMA 3 OBJETOS PREDEFINIDOS 

//FUNCIONES PREDEFINIDAS
alert("Hola, mundo!");
const respuesta = confirm("¿Estás seguro?");
console.log(respuesta); // true o false
const nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);
console.log(parseInt("42")); // 42
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3.14px")); // 3.14
console.log(isNaN("texto")); // true
console.log(isNaN(42));      // false
console.log(isFinite(42));      // true
console.log(isFinite(Infinity));// false
console.log(Number("42"));   // 42
console.log(Number("3.14")); // 3.14
console.log(String(42));    // "42"
console.log(String(true));  // "true"
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Ejemplo: 0.5678
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1


//STRING
const texto = "  Hola Mundo  ";
// Mayúsculas y minúsculas
console.log(texto.toUpperCase()); // "  HOLA MUNDO  "
console.log(texto.toLowerCase()); // "  hola mundo  "
// Eliminar espacios al inicio y final
console.log(texto.trim()); // "Hola Mundo"
// Reemplazar texto
console.log(texto.replace("Mundo", "JavaScript")); // "  Hola JavaScript  "
console.log("JavaScript JavaScript".replace(/JavaScript/g, "JS")); // "JS JS"
// Repetir texto
console.log("Hola ".repeat(3)); // "Hola Hola Hola "

const texto2 = "Hola Mundo";
// Verificar si contiene otra cadena
console.log(texto2.includes("Mundo")); // true
console.log(texto2.includes("Adiós")); // false
// Verificar inicio o final
console.log(texto2.startsWith("Hola")); // true
console.log(texto2.endsWith("Mundo")); // true
// Buscar índices
console.log(texto2.indexOf("Mundo")); // 5
console.log("JavaScript es genial. JavaScript es poderoso.".lastIndexOf("JavaScript")); // 25

const texto3 = "Hola Mundo";
// Extraer porciones
console.log(texto3.slice(0, 4)); // "Hola"
console.log(texto3.slice(5));    // "Mundo"
console.log(texto3.slice(-5));   // "Mundo"
// Substring (similar a slice pero sin índices negativos)
console.log(texto3.substring(0, 4)); // "Hola"

const texto4 = "Manzana, Pera, Uva";
console.log(texto4.split(", ")); // ["Manzana", "Pera", "Uva"]
console.log("Hola Mundo".split("")); // ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"]


console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0

const texto5 = "Hola";
// Longitud de la cadena
console.log(texto5.length); // 4
// Acceder a caracteres
console.log(texto5[0]);       // "H"
console.log(texto5.charAt(0)); // "H"
// Código Unicode de un carácter
console.log(texto5.charCodeAt(0)); // 72 (código Unicode de 'H')

//DATE 

let fechaAhora = new Date();

const fechaS = new Date("2024-11-23");
console.log(fechaS); // Ejemplo: Sat Nov 23 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

const fecha3 = new Date("2024-11-23T10:30:00");
console.log(fecha3); // Ejemplo: Sat Nov 23 2024 10:30:00 GMT+0000 (Coordinated Universal Time)

var fecha = new Date(year, month, day, hours, minutes, seconds, ms);
var fechaMS = new Date(19616543687431867456);



// **1. Métodos para obtener información de la fecha**
const fecha = new Date();
console.log("Año:", fecha.getFullYear());      // Ejemplo: 2024
console.log("Mes (0-11):", fecha.getMonth()); // Ejemplo: 10 (noviembre)
console.log("Día del mes (1-31):", fecha.getDate()); // Ejemplo: 23
console.log("Día de la semana (0-6):", fecha.getDay()); // Ejemplo: 4 (jueves)

console.log("Hora (0-23):", fecha.getHours());        // Ejemplo: 10
console.log("Minutos (0-59):", fecha.getMinutes());   // Ejemplo: 30
console.log("Segundos (0-59):", fecha.getSeconds());  // Ejemplo: 15
console.log("Milisegundos (0-999):", fecha.getMilliseconds()); // Ejemplo: 250

console.log("Timestamp (ms desde 1970):", fecha.getTime()); // Ejemplo: 1700737015250
console.log("Desfase UTC (en minutos):", fecha.getTimezoneOffset()); // Ejemplo: -60

// **Obtener información en UTC**
console.log("Año UTC:", fecha.getUTCFullYear());      // Ejemplo: 2024
console.log("Mes UTC (0-11):", fecha.getUTCMonth());  // Ejemplo: 10
console.log("Día UTC (1-31):", fecha.getUTCDate());   // Ejemplo: 23
console.log("Hora UTC (0-23):", fecha.getUTCHours()); // Ejemplo: 15


// **2. Métodos para establecer información de la fecha**
const fecha2 = new Date();
fecha2.setFullYear(2025);
fecha2.setMonth(4); // Mayo (mes 4)
fecha2.setDate(15);
fecha2.setHours(14, 45, 30, 500); // Hora: 14:45:30.500
console.log("Fecha modificada:", fecha2); // Ejemplo: Thu May 15 2025 14:45:30 ...

// Establecer fecha usando timestamp
fecha2.setTime(1700737015250);
console.log("Fecha con timestamp:", fecha2); // Ejemplo: Thu Nov 23 2024 ...

// **3. Métodos para formatear fechas**
console.log("Formato toString:", fecha.toString());          // Ejemplo: "Thu Nov 23 2024 10:30:00 GMT+0000"
console.log("Formato toDateString:", fecha.toDateString());  // Ejemplo: "Thu Nov 23 2024"
console.log("Formato toTimeString:", fecha.toTimeString());  // Ejemplo: "10:30:00 GMT+0000"
console.log("Formato toUTCString:", fecha.toUTCString());    // Ejemplo: "Thu, 23 Nov 2024 10:30:00 GMT"
console.log("Formato toISOString:", fecha.toISOString());    // Ejemplo: "2024-11-23T10:30:00.000Z"
console.log("Formato toLocaleDateString:", fecha.toLocaleDateString("es-ES")); // Ejemplo: "23/11/2024"
console.log("Formato toLocaleTimeString:", fecha.toLocaleTimeString("es-ES")); // Ejemplo: "11:30:00"

// **4. Métodos estáticos de la clase Date**
console.log("Timestamp actual:", Date.now()); // Ejemplo: 1700737015250
console.log("Parse timestamp de cadena:", Date.parse("2024-11-23T10:30:00")); // Ejemplo: 1700737800000
console.log(
    "UTC timestamp:",
    Date.UTC(2024, 10, 23, 10, 30, 0) // Año, Mes (0-11), Día, Hora, Minuto, Segundo
); // Ejemplo: 1700737800000

// **Resumen completo en acción**
const resumen = new Date();
console.log(`
Año: ${resumen.getFullYear()}
Mes: ${resumen.getMonth()} (0 = enero)
Día: ${resumen.getDate()}
Día de la semana: ${resumen.getDay()} (0 = domingo)
Hora: ${resumen.getHours()}
Minutos: ${resumen.getMinutes()}
Segundos: ${resumen.getSeconds()}
Milisegundos: ${resumen.getMilliseconds()}
Timestamp: ${resumen.getTime()}
Desfase UTC: ${resumen.getTimezoneOffset()} minutos
Formato local: ${resumen.toLocaleString("es-ES")}
Formato UTC: ${resumen.toUTCString()}
`);

//ARRAYS 
// **1. Crear y trabajar con arrays**
const array = [1, 2, 3, 4, 5];
console.log("Array original:", array);

// Crear un array vacío
const arrayVacio = [];
console.log("Array vacío:", arrayVacio);

// Array con elementos inicializados
const arrayInicializado = Array(5).fill(0);
console.log("Array inicializado:", arrayInicializado);

// Comprobar si es un array
console.log("¿Es un array?", Array.isArray(array)); // true

// **2. Métodos de acceso**
console.log("Primer elemento:", array[0]);
console.log("Último elemento:", array[array.length - 1]);

// **3. Métodos para modificar arrays (mutables)**
// Añadir elementos
array.push(6); // Añade al final
console.log("Después de push(6):", array);
array.unshift(0); // Añade al principio
console.log("Después de unshift(0):", array);

// Eliminar elementos
array.pop(); // Elimina del final
console.log("Después de pop():", array);
array.shift(); // Elimina del principio
console.log("Después de shift():", array);

// Modificar o eliminar con splice
array.splice(2, 1, "nuevo"); // Reemplaza el tercer elemento con "nuevo"
console.log("Después de splice:", array);

// Copiar una parte con slice
const subArray = array.slice(1, 3); // Copia elementos 1 a 3 (sin incluir 3)
console.log("Sub-array con slice:", subArray);

// **4. Métodos para buscar en arrays**
console.log("Índice de 2:", array.indexOf(2)); // Devuelve el índice de 2
console.log("¿Incluye 'nuevo'?", array.includes("nuevo")); // true

// Búsqueda con find y findIndex
const encontrado = array.find((x) => typeof x === "string");
console.log("Primer string encontrado con find:", encontrado);
const indice = array.findIndex((x) => typeof x === "string");
console.log("Índice del string encontrado con findIndex:", indice);

// **5. Iteración y transformación**
// Recorrer con forEach
array.forEach((elemento, indice) => {
    console.log(`Elemento ${indice}: ${elemento}`);
});

// Crear un nuevo array con map
const arrayDoble = array.map((x) => (typeof x === "number" ? x * 2 : x));
console.log("Array transformado con map:", arrayDoble);

// Filtrar con filter
const soloNumeros = array.filter((x) => typeof x === "number");
console.log("Solo números con filter:", soloNumeros);

// Reducir el array
const suma = array.reduce((acumulador, valor) => {
    return typeof valor === "number" ? acumulador + valor : acumulador;
}, 0);
console.log("Suma de números con reduce:", suma);

// **6. Ordenar arrays**
// Ordenar números (ascendente)
const numeros = [3, 1, 4, 1, 5];
numeros.sort((a, b) => a - b);
console.log("Ordenados ascendente:", numeros);

// Invertir array
numeros.reverse();
console.log("Invertidos:", numeros);

// **7. Concatenar y unir arrays**
const otroArray = [6, 7, 8];
const concatenado = array.concat(otroArray);
console.log("Concatenado:", concatenado);

// Combinar elementos con join
const textoS = array.join(" - ");
console.log("Texto unido con join:", textosS);

// **8. Métodos estáticos de Array**
// Crear un array desde una estructura iterable
const desdeIterables = Array.from("Hola");
console.log("Array desde string con Array.from:", desdeIterables);

// Crear un array con valores generados
const generados = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Array generado con Array.from:", generados);

// **Resumen completo del array actual**
console.log("Array final:", array);
console.log("Longitud del array:", array.length);


//SETTIMEOUT SETINTERVAL CLEARTIMEOUT CLEAR INTERVAL

//Ejecuta la función despues de 2 segundos
console.log("Inicio");

const timeoutId = setTimeout(() => {
    console.log("Ejecutado después de 2 segundos");
}, 2000);

console.log("Fin");

//Retorna un id para parar la función 

let contador = 0;

const intervalId = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);
    if (contador === 5) {
        clearInterval(intervalId); // Detenemos el intervalo cuando llega a 5
        console.log("Intervalo detenido");
    }
}, 1000);


//cancela el intervalo de setTimeout

clearTimeout(id);
const timeoutId2 = setTimeout(() => {
    console.log("Esto no se ejecutará");
}, 3000);

clearTimeout(timeoutId2); // Cancela el temporizador
console.log("Temporizador cancelado");

//cancela el intervalo de setInterval

let contador2 = 0;

const intervalId2 = setInterval(() => {
    contador2++;
    console.log(`Contador: ${contador2}`);
    if (contador2 === 3) {
        clearInterval(intervalId2); // Detenemos el intervalo en el tercer ciclo
        console.log("Intervalo detenido");
    }
}, 1000);


//CASO PRÁCTICO 

// Temporizador con setTimeout
const timeoutIdF = setTimeout(() => {
    console.log("Esto se ejecuta una vez después de 3 segundos");
}, 3000);

// Intervalo con setInterval
const intervalIdF = setInterval(() => {
    console.log("Este mensaje se repite cada 1 segundo");
}, 1000);

// Cancelar ambos
setTimeout(() => {
    clearTimeout(timeoutIdF);
    clearInterval(intervalIdF);
    console.log("Ambos temporizadores cancelados");
}, 5000);


//FUNCIONES

//ANÓNIMAS: son aquellas que se declaran sin definir el nombre.
//AUTOEJECUTABLES: son aquellas que se ejecutan inmediatamente.(sin nombre)
//CLAUSURAS: encierra variables en su propio ambitro y siguen existiendo después de su ejecución
//CALLBACK: es pasar por parámetros una función a otra de mod que esta otra la ejecuta.


