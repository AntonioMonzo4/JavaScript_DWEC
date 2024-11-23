class Usuario{
    constructor(usuario,nombreCompleto,contrasenha){

        this.usuario=usuario;
        this.nombreCompleto=nombreCompleto;
        this.contrasenha=contrasenha;

        this.arrayUsuarios= new Array();
    }

    mostrar() {
    
        return "Usuario: "+this.usuario+" Nombre Completo: "+this.nombreCompleto+" ";
    }
}

