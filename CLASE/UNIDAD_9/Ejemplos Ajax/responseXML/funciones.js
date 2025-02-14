addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ob=document.getElementById('boton1');
  ob.addEventListener('click',presionBoton,false);
}

function presionBoton(e)
{
  var ob1=document.getElementById('comunidad');
  recuperarDatos(ob1.value);
}

var conexion1;
function recuperarDatos(comunidad) 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('GET','pagina1.php?pa='+comunidad, true);
  conexion1.send();
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");

  if(conexion1.readyState == 4)
  {
    var xml = conexion1.responseXML;
    var comida=xml.getElementsByTagName('comida');
    var superficie=xml.getElementsByTagName('superficie');
    var poblacion=xml.getElementsByTagName('poblacion');
    resultados.innerHTML='comida='+comida[0].firstChild.nodeValue + '<br>' +
                         'superficie='+superficie[0].firstChild.nodeValue + '<br>' +
                         'poblacion='+poblacion[0].firstChild.nodeValue ;                       
  } 
  else 
  {
    resultados.innerHTML = 'Cargando...';
  }
}
