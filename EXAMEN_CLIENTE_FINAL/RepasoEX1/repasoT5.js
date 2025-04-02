//TEMA 5 - ALMACENAMIENTO EN JAVASCRIPT

// Guardar datos
localStorage.setItem("nombre", "Juan");
localStorage.setItem("edad", "30");

// Recuperar datos
const nombre = localStorage.getItem("nombre");
const edad = localStorage.getItem("edad");
console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Nombre: Juan, Edad: 30

// Guardar un objeto
const usuario = { id: 1, nombre: "Ana", activo: true };
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar el objeto
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // "Ana"

// Guardar datos
localStorage.setItem("color", "azul");
localStorage.setItem("pais", "México");

// Eliminar una clave específica
localStorage.removeItem("color");

// Limpiar todo el localStorage
localStorage.clear();

console.log(localStorage.getItem("pais")); // null
