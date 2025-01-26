function recuperar(){
    //Recupero para luego verificar si contiene algo o no
    let JSONcarrito = localStorage.getItem("carrito");

    //Si tiene algo (no es null), convierto lo que hay a objeto
    if (JSONcarrito != null) {
        carrito = JSON.parse(JSONcarrito);
        for (let i = 0; i < carrito.length; i++) {
            carrito[i].__proto__ = new Producto(); //Para recuperar las funciones de la clase ya que al volverlo a objeto se olvida de que clase es.
        }
    } else {//Si las cookies están vacias, lo inicializa como array
        carrito = new Array();
    }
}

function guardar(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cesta(id){
    recuperar();
    let modelo = document.getElementById("modelo" + id).innerHTML;
    let descripcion = document.getElementById("descripcion" + id).innerHTML;
    let precio = document.getElementById("precio" + id).innerHTML;
    let color = document.getElementById("color" + id).value;
    let existe = false;

    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].id === id && carrito[i].color === color){
            carrito[i].cantidad++;
            existe = true;
            break;
        } 
    }
    if(existe != true){
        carrito.push(new Producto(id, modelo, descripcion, precio, color));
    }

    guardar();
    
}

function mostrar(){
    recuperar();
    let total = 0;

    let txt = "<table><tr><th>Modelo</th><th>Descripción</th><th>Precio</th><th>Color</th><th>Cantidad</th><th>Borrar</th></tr>";

    for(let i = 0; i < carrito.length; i++){
        total += carrito[i].precioFloat * carrito[i].cantidad;
        txt += carrito[i].mostrar();
    }
    txt += "</table><br>Precio total: " + total + "€";
    
    document.getElementById("productos").innerHTML = txt;
    
}

function borrar(id, color){
    recuperar();
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].id === id && carrito[i].color === color){
            carrito.splice(i,1);
        }
    }
    guardar();
	mostrar();
}

function actualizarArticulos(){
    recuperar();
    
    let contador = 0;

    for(let i = 0; i < carrito.length;  i++){
        contador += carrito[i].cantidad;
    }
    if(contador != 0)document.getElementById("n_articulos").innerHTML = contador;
    
    
}

setInterval(mostrar,5000);
setInterval(actualizarArticulos,1000);
//numeros aleatorios, padstart, math, for in, setInterval, una tabla con un for