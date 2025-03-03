class Objeto{
    constructor(num,nombre) {
        this.num=num;
        this.nombre=nombre;
        this.arrayAlgo=[];
    }

    
}
function nuevoObjeto(){
        var datos=JSON.parse(localStorage.getItem("datos")) || [];
        console.log(datos);
        var nuevo= new Objeto(42,"Hola");
        datos.push(nuevo);
        localStorage.setItem("datos",JSON.stringify(datos));

}

nuevoObjeto();