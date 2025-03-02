var usuarioCompleto = "Antonio:Monzó Ansuátegui:42059:Real Madrid:Capi";
console.log(usuarioCompleto);
var arrayDatos = usuarioCompleto.split(":");
console.log(arrayDatos);
var apellidos= arrayDatos[1].split(" ");
var apellidos1=apellidos[0];
var apellidos2=apellidos[1];
var num=arrayDatos[2];

console.log(apellidos2)
var nombreUsuario=arrayDatos[0].slice(0,3).toLowerCase()+apellidos2.slice(7).toLocaleUpperCase()+num;
console.log(nombreUsuario);