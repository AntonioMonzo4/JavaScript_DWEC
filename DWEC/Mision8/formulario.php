!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Asíncrono</title>
    <style>
        #cargando {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Formulario Asíncrono</h1>
    <form id="formulario" action="formulario.php" method="POST">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="apellidos">Apellidos:</label><br>
        <input type="text" id="apellidos" name="apellidos" required><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="comentarios">Comentarios:</label><br>
        <textarea id="comentarios" name="comentarios" required></textarea><br>

        <button type="submit" id="enviar">Enviar</button>
    </form>

    <div id="cargando">
        <img src="cargando.gif" alt="Cargando...">
    </div>

    <script src="script.js"></script>
</body>
</html>