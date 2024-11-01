// Definimos la clase Disco

class Disco{
	
	constructor(nombre, grupo, anyo, tipo, localizacion){
		this.nombre=nombre;
		this.grupo=grupo;
		this.anyo=anyo;
		this.tipo=tipo;
		this.localizacion=localizacion;
		prestado=false;
	}
	
	cambiarEstanteria(localizacion){
		this.localizacion=localizacion;
	}
	cambiarPrestado(prestado){
		this.prestado=prestado;
	}
	mostrar(){
		return "Nombre: "+this.nombre+" Grupo: "+this.grupo+" Año: "+this.anyo+" Tipo: "+this.tipo+" Localizacion: "+this.localizacion+" Prestado: "+this.prestado;
	}
	//Ejemplo de uso de get (igual que mostrar)
	get cadenaDisco(){
		return this.mostrar();
	}
}
