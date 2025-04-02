function mostrar() {
    recuperar();
    let productos = '';
    for (let i = 0; i < articulos.length; i++) {
        productos += articulos[i].mostrar();
    }
    document.getElementById('productos').innerHTML = productos;
}

setInterval(mostrar, 5000);

