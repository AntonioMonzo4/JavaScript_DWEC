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

var conexion1;
function enviarFormulario() 
{
  conexion1=new XMLHttpRequest();
  conexion1.onreadystatechange = procesarEventos;
  var num=document.getElementById('nro').value;
  alert('Valor de la propiedad readyState:'+conexion1.readyState);
  conexion1.open('GET','pagina1.php?numero='+num, true);
  conexion1.send();
}

function procesarEventos()
{
  alert('Valor de la propiedad readyState:'+conexion1.readyState);
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    resultados.innerHTML = conexion1.responseText;
  } 
  else
    if (conexion1.readyState==1 || conexion1.readyState==2 || conexion1.readyState==3)
    {
      resultados.innerHTML = 'Procesando...';
    }
}
