<?php
$car=$_REQUEST['cod'];
if ($car==1)
{
  $materias=array('ISO','PAR','MARCAS','BBDDD','FH','SRI','IAW','ASO','ASGBBDD','SAD');
}
if ($car==2)
{
  $materias=array('PROGRAMACION','BBDD','SSII','EED','MARCAS','DWEC','DWES','DESPLIEGUES','DIW');
}
if ($car==3)
{
  $materias=array('PROGRAMACION','BBDD','SSII','EED','MARCAS','SGE','PROCESOS','ANDROID','INTERFACES','MULTIMEDIA');
}


$xml="<?xml version=\"1.0\"?>\n";
$xml.="<materias>\n";
for($f=0;$f<count($materias);$f++)
{
  $xml.="<materia>".$materias[$f]."</materia>\n";
}
$xml.="</materias>\n";
header('Content-Type: text/xml');
echo $xml;

?>