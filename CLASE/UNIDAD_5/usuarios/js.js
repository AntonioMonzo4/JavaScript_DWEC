function recuperar(){
    jsonUsuarios=localStorage.getItem("arrayUsuarios");
    if(jsonUsuarios!=null){
        arrayUsuarios=JSON.parse(jsonUsuarios);
        for(let i=0;i<arrayUsuarios.length;i++){
            arrayUsuarios[i].__proto__=new Usuario();
        }
    }else{
        arrayUsuarios= new Array();
    }
}

function guardar(){

    localStorage.setItem("arrayUsuarios",JSON.stringify(arrayUsuarios));

}

function registrar(){
    usuario=document.getElementById("usuario").value;
    nombreCompleto=document.getElementById("nombre").value;
    contrasenha=document.getElementById("clave").value;

    usuarioNuevo=new Usuario(usuario,nombreCompleto,contrasenha);

    arrayUsuarios.push(usuarioNuevo);
}

function mostrar(){
    recuperar();
    arrayUsuarios.forEach(element => {
        console.log(element.mostrar);
    });
}

function borrar(){
    localStorage.removeItem()
}