
class Producto {
    constructor(id, modelo, descripcion, precio, color, cantidad) {
        this.id = id;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.precio = parseFloat(precio.replace('€', '').trim());
        this.color = color;
        this.cantidad = cantidad || 1;
    }


    mostrar() {
        return (
            '<div class="producto">' +
            '<h3>' + this.modelo + ' (' + this.color + ')</h3>' +
            '<p>' + this.descripcion + '</p>' +
            '<p>Precio: ' + this.precio + '€</p>' +
            '<p>Cantidad: ' + this.cantidad + '</p>' +
            '<p>Total: ' + (this.precio * this.cantidad).toFixed(2) + '€</p>' +
            '<button onclick="eliminarProducto(' + this.id + ', \'' + this.color + '\')">Eliminar</button>' +
            '</div>'
        );
    }
}
