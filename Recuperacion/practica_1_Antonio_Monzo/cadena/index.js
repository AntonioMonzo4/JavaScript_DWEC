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
    apellido1=usuario[1];   
    apellido2=usuario[2];
    telefono=usuario[3];
    email=usuario[4];
    cp=usuario[5];
    fecha_nacimiento=usuario[6];

    var nombreUsuario=
}