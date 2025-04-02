class Producto{
    constructor(id, modelo, descripcion, precio, color){
        this.id=id
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
        this.color = color

        this.cantidad = 1

    }

    mostrar(){
        return "<ul><li><h3>Modelo: " + this.modelo + "</h3></li>" + 
        "<li>Color: " + this.color + "</li>" + 
        "<li>Precio: " + this.precio + "</li>"+ 
        "<li>Cantidad: " + this.cantidad + "</li>"+ 
        "<li><button type='button' onclick='borrarArticulo("+this.id+this.color+")'>Borrar Articulo</button></li>"+"</ul>"
    }
    

}
