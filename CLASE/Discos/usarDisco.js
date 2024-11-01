var discos = new Array();

function nuevo(){
	nombre=prompt("Dime el nombre:");
	grupo=prompt("Dime el grupo:");
	anyo=prompt("Dime el anyo:");
	tipo=prompt("Dime el tipo (“rock”,“pop”, “punk”o “indie”):");
	localizacion=prompt("Dime la localizacion:");
	prestado=confirm("¿Está prestado?");
	
	d1=new Disco();
	d1.discoNuevo(nombre,grupo,anyo,tipo,localizacion);
	d1.cambiarPrestado(prestado);
	discos.push(d1);
	
	destino=document.getElementById("destino");
	destino.innerHTML="";
	for(let i=0;i<discos.length;i++){
		destino.innerHTML+=discos[i].mostrar()+"<br>";
	}
	
}

