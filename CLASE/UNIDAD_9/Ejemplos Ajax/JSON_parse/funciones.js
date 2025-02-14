addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('boton1');
  ob.addEventListener('click',presionBoton,false);
}

var conexion1;
function presionBoton(e)
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','pagina1.php', true);
  conexion1.send();
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    var datos=JSON.parse(conexion1.responseText);
    var salida='';
    for(var f=0;f<datos.length;f++)
    {
      salida += 'Codigo:'+datos[f].codigo+"<br>";
      salida += 'Descripcion:'+datos[f].descripcion+"<br>";
      salida += 'Precio:'+datos[f].precio+"<br><br>";
    }
    resultados.innerHTML = salida;
  } 
  else 
  {
    resultados.innerHTML = "Cargando...";
  }
}
