// Función para generar un número de la Lotería Nacional
function ln() {
    return Math.floor(Math.random() * 99999).toString().padStart(5, "0");
}

// Función para generar un resultado de Quiniela
function quiniela() {
    var Resultado = [];
    for (var i = 0; i < 10; i++) {
        var resultadoPartido = Math.floor(Math.random() * 3); // 0 Victoria local , 1 Empate , o 2 Victoria visitante

        // Convertir los números en el resultado
        if (resultadoPartido === 0) {
            Resultado.push("-Partido " + (i+1) + ": 1\n");
        } else if (resultadoPartido === 1) {
            Resultado.push("-Partido " + (i+1) + ": X\n");
        } else if (resultadoPartido === 2) {
            Resultado.push("-Partido " + (i+1) + ": 2\n");
        }
    }
    return Resultado;
}

// Función para generar un resultado de Primitiva
function primitiva() {
    var resultadoPrimitiva = [];
    while (resultadoPrimitiva.length < 6) {
        var num = Math.floor(Math.random() * 49) + 1;
        if (!resultadoPrimitiva.includes(num)) {
            resultadoPrimitiva.push(num);
        }
    }
    var complementario = Math.floor(Math.random() * 49) + 1;
    var reintegro = Math.floor(Math.random() * 10);
    var resultadoTotal = "Primitiva: " + resultadoPrimitiva.join(", ") + "\nComplementario: " + complementario + "\nReintegro: " + reintegro;
    return resultadoTotal;
}

// Función para mostrar el menú y ejecutar la opción elegida
function generarLoteria() {
    var tipoLoteria = prompt("Elija el tipo de lotería: \n1. Lotería Nacional \n2. Quiniela\n3. Primitiva");
    var resultado;
    switch (tipoLoteria) {
        case "1":
            resultado = "Lotería Nacional: " + ln();
            break;
        case "2":
            resultado = "Quiniela: \n" + quiniela();
            break;
        case "3":
            resultado = primitiva();

            break;
        default:
            resultado = "Opción no válida.";
    }
    alert(resultado);
}




