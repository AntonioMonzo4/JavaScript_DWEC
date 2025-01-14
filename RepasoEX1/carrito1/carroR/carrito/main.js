let articulos;
function recuperar(){
    
    let JSONart = localStorage.getItem('Articulos');
    if(JSONart != null){
        articulos = JSON.parse(JSONart);
        for(let i = 0; i < articulos.length; i++){
            articulos[i].__proto__ = new Producto();
        }
    }else{
        articulos = new Array();
    }
}

function guardar(){
    localStorage.setItem('Articulos', JSON.stringify(articulos));
}

function actualizarCantidadTotal(){
recuperar()
let cantidadTotal = 0;
    for (let i = 0; i < articulos.length; i++) {
        

        cantidadTotal += articulos[i].cantidad
    }

document.getElementById('n_articulos').innerHTML = cantidadTotal;

}

function cesta(id_producto) {
    recuperar();

    let inputModelo = document.getElementById('modelo' + id_producto).textContent;
    let inputDescripcion = document.getElementById('descripcion' + id_producto).textContent;
    let inputPrecio = document.getElementById('precio' + id_producto).textContent;
    let inputColor = document.getElementById('color' + id_producto).value;
    let productoExistente = false
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].id == id_producto) {
            articulos[i].cantidad = articulos[i].cantidad + 1;
            productoExistente = true
            break;
        }
    }

    if (productoExistente != true) {
        let nuevoProducto = new Producto(id_producto, inputModelo, inputDescripcion, inputPrecio, inputColor);
        nuevoProducto.cantidad = 1;
        articulos.push(nuevoProducto);
    }
    
    guardar();
    actualizarCantidadTotal();
}

