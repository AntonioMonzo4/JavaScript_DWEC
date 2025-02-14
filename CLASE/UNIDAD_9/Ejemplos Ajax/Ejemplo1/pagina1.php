<?php
header('Content-Type: text/html; charset=utf-8');
if ($_REQUEST['cod']==1)
  echo "<strong>SMR:</strong> Ciclo formativo Sistemas Microinformáticos y Redes";
if ($_REQUEST['cod']==2)
  echo "<strong>ASIR:</strong> Ciclo formativo Administración de Sistemas y Redes";
if ($_REQUEST['cod']==3)
  echo "<strong>DAW:</strong> Ciclo formativo Desarrollo Aplicaciones Web";
if ($_REQUEST['cod']==4)
  echo "<strong>DAM:</strong> Ciclo formativo Desarrollo Aplicaciones Multiplataforma";
?>