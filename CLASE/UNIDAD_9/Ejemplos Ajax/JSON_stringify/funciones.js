addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ref=document.getElementById('boton1');
  ref.addEventListener('click',mostrarConversion,false);
}

function mostrarConversion(e)
{
  var obj={
    nombre:'juan',
    edad:25,
    sueldos:[1200,1700,1990]
  };

  var cadena=JSON.stringify(obj);
  alert(cadena);
}
