// Importamos la clase Producto
import { Producto } from './clases.js';

// Inicializar el carrito desde localStorage o con un array vacío
var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Actualizar el número de artículos en la cesta
function actualizarCesta() {
    var totalArticulos = 0;
    for (var i = 0; i < carrito.length; i++) {
        totalArticulos += carrito[i].cantidad;
    }
    document.getElementById('n_articulos').innerText = totalArticulos;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para añadir producto al carrito
function cesta(id_producto) {
    var modelo = document.getElementById('modelo' + id_producto).innerText;
    var descripcion = document.getElementById('descripcion' + id_producto).innerText;
    var precio = document.getElementById('precio' + id_producto).innerText;
    var color = document.getElementById('color' + id_producto).value;

    var productoExistente = null;
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].id === id_producto && carrito[i].color === color) {
            productoExistente = carrito[i];
            break;
        }
    }

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        var nuevoProducto = new Producto(id_producto, modelo, descripcion, precio, color, 1);
        carrito.push(nuevoProducto);
    }

    actualizarCesta();
    alert('Producto añadido a la cesta');
}

// Mostrar productos en carrito.html
function mostrarCarrito() {
    var contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>No hay productos en la cesta.</p>';
        return;
    }

    var totalPrecio = 0;

    for (var i = 0; i < carrito.length; i++) {
        var prod = carrito[i];
        totalPrecio += prod.precio * prod.cantidad;

        var productoHTML = new Producto(
            prod.id,
            prod.modelo,
            prod.descripcion,
            prod.precio + '€',
            prod.color,
            prod.cantidad
        ).mostrar();
        contenedor.innerHTML += productoHTML;
    }

    contenedor.innerHTML += '<h2>Total: ' + totalPrecio.toFixed(2) + '€</h2>';
}

// Eliminar producto del carrito
function eliminarProducto(id_producto, color) {
    carrito = carrito.filter(function (prod) {
        return !(prod.id === id_producto && prod.color === color);
    });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Actualizar carrito cada 5 segundos
if (document.location.pathname.indexOf('carrito.html') > -1) {
    setInterval(mostrarCarrito, 5000);
}

// Inicializar eventos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('n_articulos')) {
        actualizarCesta();
    }

    if (document.getElementById('productos')) {
        mostrarCarrito();
    }
});
