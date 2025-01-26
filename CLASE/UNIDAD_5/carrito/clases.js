class Producto {
    constructor(id, modelo, descripcion, precio, color) {
        this.id = id;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.color = color;
        this.cantidad = 1;
    }

    get precioFloat() {
        let partes = this.precio.split(" ");
        let precioNum = partes[1];
        return parseFloat(precioNum.replace(",", "."));
    }

    mostrar() {
        return "<tr><td>" + this.modelo + "</td><td>" + this.descripcion + "</td><td>" + this.precio + "</td><td>" + this.color + "</td><td>" + this.cantidad + "</td><td><button onclick=\"borrar(" + this.id + ",'" + this.color + "')\">Eliminar</button></td></tr>";
    }
}