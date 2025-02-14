addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ref=document.getElementById('formulario');
  ref.addEventListener('submit',enviarDatos,false);
}

function enviarDatos(e)
{
  e.preventDefault();
  enviarFormulario();
}


function retornarDatos()
{
  var cad='';
  var nom=document.getElementById('nombre').value;
  var com=document.getElementById('comentarios').value;
  cad='nombre='+encodeURIComponent(nom)+'&comentarios='+encodeURIComponent(com);
  return cad;
}

var conexion1;
function enviarFormulario() 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  conexion1.open('POST','pagina1.php', true);
  conexion1.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
  conexion1.send(retornarDatos());  
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    if (conexion1.status==200)
      resultados.innerHTML = 'Gracias.';
    else
      alert(conexion1.statusText);
  } 
  else 
  {
    resultados.innerHTML = '<img src="../cargando.gif">';
  }
}
