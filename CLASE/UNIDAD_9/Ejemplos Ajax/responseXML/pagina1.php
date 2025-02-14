<?php
if ($_REQUEST['pa']=='Madrid')
{
  $comida="Callos";	
  $superficie=2700000;
  $poblacion=38000000;
}
if ($_REQUEST['pa']=='Castilla')
{
  $comida="Cochinillo";
  $superficie=8500000;
  $poblacion=163000000;
}
if ($_REQUEST['pa']=='Andalucia')
{
  $comida="Pescaito";
  $superficie=750000;
  $poblacion=15000000;
}

$xml="<?xml version=\"1.0\"?>\n";
$xml.="<comunidad>\n";
$xml.="<comida>$comida</comida>\n";
$xml.="<superficie>$superficie</superficie>\n";
$xml.="<poblacion>$poblacion</poblacion>\n";
$xml.="</comunidad>\n";
header('Content-Type: text/xml');
echo $xml;

?>