// Fechas de ejemplo
const fecha1 = new Date("2024-11-01");
const fecha2 = new Date("2024-11-26");

// Calcular la diferencia en milisegundos
const diferenciaMs = fecha2.getTime() - fecha1.getTime();

// Convertir de milisegundos a días
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);

console.log(`La diferencia es de ${diferenciaDias} días.`);

class Persona {
    #edad; // Campo privado

    constructor(nombre, edad) {
        this.nombre = nombre; // Propiedad pública
        this.#edad = edad; // Propiedad privada
    }

    obtenerEdad() {
        return this.#edad;
    }

    cumplirAños() {
        this.#edad++;
    }
}

const persona = new Persona("María", 30);
console.log(persona.nombre); // María
console.log(persona.obtenerEdad()); // 30
persona.cumplirAños();
console.log(persona.obtenerEdad()); // 31

// Array de nombres
const nombres = ["Ana", "Luis", "María"];

// Usamos for...in para recorrer los índices del array
for (let indice in nombres) {
    console.log(`Índice ${indice}: ${nombres[indice]}`);
}

// Resultado:
// Índice 0: Ana
// Índice 1: Luis
// Índice 2: María
// Objeto con propiedades
const personaa = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Desarrollador",
    ciudad: "Madrid"
};

// Usamos for...in para recorrer el objeto
for (let propiedad in personaa) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// Resultado:
// nombre: Carlos
// edad: 30
// profesion: Desarrollador
// ciudad: Madrid

var tiwmpo = setInterval(()=>{
    console.log("tiempo");
},1000)