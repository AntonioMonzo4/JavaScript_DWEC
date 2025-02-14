addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
  var ref=document.getElementById('votofoto1');
  var vec= ref.getElementsByTagName('li');
  var vec2=ref.getElementsByTagName('a');
  for(var f=0;f<vec2.length;f++)
  {
    vec[f].addEventListener('mouseover',entrar,false);
    vec[f].addEventListener('mouseout',salir,false);
    vec2[f].addEventListener('click',presionBoton,false);
  }
}

function entrar(e)
{
  var ref=e.target;
  var ob=document.getElementById('votofoto1');
  var vec=ob.getElementsByTagName('li');
  for(var f=0;f<ref.firstChild.nodeValue;f++)
  {
    vec[f].firstChild.style.background='#f00';
    vec[f].firstChild.style.color='#fff';
  }    
}

function salir(e)
{
  var ref=e.target;
  var ob=document.getElementById('votofoto1');
  var vec=ob.getElementsByTagName('li');
  for(var f=0;f<ref.firstChild.nodeValue;f++)
  {
    vec[f].firstChild.style.background='#f7f8e8';
    vec[f].firstChild.style.color='#f00';
  }  
}


function presionBoton(e)
{
  e.preventDefault();
  var ref=e.target;
  cargarVoto(ref.firstChild.nodeValue);
}


var conexion1;
function cargarVoto(voto) 
{
  conexion1=new XMLHttpRequest(); 
  conexion1.onreadystatechange = procesarEventos;
  var aleatorio=Math.random();
  conexion1.open('GET','pagina1.php?voto='+voto+"&aleatorio="+aleatorio, true);
  conexion1.send();
}

function procesarEventos()
{
  var resultados = document.getElementById("resultados");
  if(conexion1.readyState == 4)
  {
    resultados.innerHTML = 'Gracias.';
  } 
  else 
  {
    resultados.innerHTML = 'Procesando...';
  }
}

