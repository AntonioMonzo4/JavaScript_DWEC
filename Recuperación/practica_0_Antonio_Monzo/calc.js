while (confirm("¿Quieres realizar una nueva operación?")) {
    
    var operador1 = parseFloat(prompt("Introduce el primer número:"));
    var operacion = prompt("Introduce la operación (+, -, *, /, areaT, areaC):");
    var resultado;

    if (operacion === "areaC") {
        resultado = Math.PI * Math.pow(operador1, 2);
    } else {
        var operador2 = prompt("Introduce el segundo número:");
        
        switch (operacion) {
            case "+":
                resultado = operador1 + operador2;
                break;
            case "-":
                resultado = operador1 - operador2;
                break;
            case "*":
                resultado = operador1 * operador2;
                break;
            case "/":
                resultado = operador1 / operador2;
                break;
            case "areaT":
                resultado = (operador1 * operador2) / 2;
                break;
            default:
                alert("Operación no válida");
                continue;
        }
    }

    alert("El resultado es: " + resultado);
    document.getElementById("resultados").innerHTML += "<p>Resultado: " + resultado + "</p>";
}
