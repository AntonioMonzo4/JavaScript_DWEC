// Definimos la clase Disco

function Disco(){
	this.nombre="";
	this.grupo="";
	this.anyo="";
	this.tipo="";
	this.localizacion=0;
	this.prestado=false;
	this.discoNuevo=function(nombre, grupo, anyo, tipo, localizacion){
		this.nombre=nombre;
		this.grupo=grupo;
		this.anyo=anyo;
		this.tipo=tipo;
		this.localizacion=localizacion;
	}
	this.cambiarEstanteria=function(localizacion){
		this.localizacion=localizacion;
	}
	this.cambiarPrestado=function(prestado){
		this.prestado=prestado;
	}
	this.mostrar=function(){
		return "Nombre: "+this.nombre+" Grupo: "+this.grupo+" Año: "+this.anyo+" Tipo: "+this.tipo+" Localizacion: "+this.localizacion+" Prestado: "+this.prestado;
	}
}
