//TEMA 4 - CLASES Y OBJETOS

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}`);
    },
};

console.log(persona.nombre); // "Juan"
console.log(persona.edad);   // 30
persona.saludar();           // "Hola, me llamo Juan"

persona.edad = 31; // Modificar propiedad
persona.apellido = "Pérez"; // Agregar nueva propiedad
console.log(persona); // { nombre: 'Juan', edad: 31, saludar: [Function], apellido: 'Pérez' }


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear instancias
const juan = new Persona("Juan", 30);
juan.saludar(); // "Hola, soy Juan y tengo 30 años."


class Producto {
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio; // Usamos un guion bajo para indicar que es "privado"
    }

    // Método getter para obtener el precio
    get precio() {
        return `$${this._precio}`;
    }

    // Método setter para modificar el precio
    set precio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            console.log("El precio no puede ser negativo.");
        } else {
            this._precio = nuevoPrecio;
        }
    }
}

const producto = new Producto("Laptop", 1000);
console.log(producto.precio); // "$1000"

producto.precio = 1200; // Cambiar el precio
console.log(producto.precio); // "$1200"

producto.precio = -500; // Intenta asignar un precio negativo
// "El precio no puede ser negativo."


//JSON

const usuario = {
    id: 1,
    nombre: "Ana",
    activo: true,
};

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); // '{"id":1,"nombre":"Ana","activo":true}'


const datos = '{"id":1,"nombre":"Ana","activo":true}';
const usuarioObjeto = JSON.parse(datos);
console.log(usuarioObjeto); // { id: 1, nombre: 'Ana', activo: true }

// Simula recibir datos de un servidor en formato JSON
const respuestaServidor = '{"productos":[{"id":1,"nombre":"Café"},{"id":2,"nombre":"Té"}]}';

// Convertir JSON a objeto
const datosServidor = JSON.parse(respuestaServidor);
console.log(datosServidor.productos[0].nombre); // "Café"

// Convertir objeto a JSON antes de enviar al servidor
const nuevoProducto = { id: 3, nombre: "Chocolate" };
const jsonProducto = JSON.stringify(nuevoProducto);
console.log(jsonProducto); // '{"id":3,"nombre":"Chocolate"}'
