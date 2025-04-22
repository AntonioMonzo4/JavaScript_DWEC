let Usuarios=["Manolo$Lama Sánchez$999000000$lama@cope.es$28200$04/03/1969","Manu$Carreño López$666000000$carreno@ser.es$12001$04/12/1975","Maria Teresa$Molina Fernández$666000000$mteresa@extra.es$12001$21/08/1982"] 

var nombre;
var apellido1;
var apellido2;
var telefono;
var email;
var cp;
var fecha_nacimiento;

for(i=0;i<Usuarios.length;i++){
    var usuario=Usuarios[i].split("$");
    nombre=usuario[0];
    apellidos=usuario[1].split(" ");
    apellido1=apellidos[0];   
    apellido2=apellidos[1];
    telefono=usuario[2];
    email=usuario[3];
    cp=usuario[4];
    fecha_nacimiento=usuario[5];

    var nombreUsuario=nombre.charAt(0).toLocaleLowerCase()+apellido1.slice(-3).toLowerCase()+(nombre+apellido1+apellido2).length;
    console.log("Nombre de usuario: "+nombreUsuario);
    
    nombreSinEspacios=nombre.split(" ");
    var claveUsuario=nombreSinEspacios[0].toUpperCase()+Math.floor(Math.random()*9000+1000);
    console.log("Clave de usuario: "+claveUsuario);
    console.log("Cumple. "+edadYcumple(fecha_nacimiento)); 
}

function edadYcumple(fecha){
    partesFecha=fecha.split("/");
    const hoy = new Date();
    const cumple = new Date(partesFecha[2], partesFecha[1]-1, partesFecha[0]);
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mes = hoy.getMonth() - cumple.getMonth();
    const cumpleanos= new Date(hoy.getFullYear(), cumple.getMonth(), cumple.getDate());

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }

    if(edad<18){
        return false;
    } 
    else if(edad>18 && cumpleanos.getDay()===1){
        return true;

    }else if(edad>18 && cumpleanos.getDay()!==1){
        return false;}
}