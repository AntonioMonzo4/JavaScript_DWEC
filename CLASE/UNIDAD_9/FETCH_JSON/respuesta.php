<?php

//Obtengo los datos enviados al servidor
$json = file_get_contents('php://input');
//Proceso el JSON y lo convierto en array asociativo (true). Acceso a valores $obj["campo"];
//Si quiero objeto no poner el true. Acceso a valores $obj->{'nombre'};
$obj = json_decode($json, true);

//Creo JSON de respuesta como Array Asociativo
$njson["recibido"] = "ok";
//Continuar para añadir los valores recibidos a la respuesta
sleep(5);
//Envío cabeceras
header("Content-type: application/json");

//Convierto el Array asociativo en JSON de texto y lo envío
echo json_encode($njson);
?>