iniciar();




function iniciar() {

    var inici = confirm("Quieres realizar una operación");
    if (inici) {
        var n1 = prompt("introduce el primer operador");
        var operación = prompt("introduce la operacion +.-,*,/,areaT,areaC");
        var n2 = prompt("introduce el segundo operador");


        switch (operación) {

            case "+":
                document.getElementById("resultados").innerHTML += "<p>" + suma(n1, n2) + "</p>";
                break;
            case "-":
                document.getElementById("resultados").innerHTML += "<p>" + resta(n1, n2) + "</p>";
                break;
            case "*":
                document.getElementById("resultados").innerHTML += "<p>" + multiplicacion(n1, n2) + "</p>"             ;
                break;
            case "/":
                document.getElementById("resultados").innerHTML += "<p>" + division(n1, n2) + "</p>";
                break;
            case "areaT":
                document.getElementById("resultados").innerHTML += "<p>" + areaTriangulo(n1, n2) + "</p>";
                break;
            case "areaC":
                document.getElementById("resultados").innerHTML += "<p>" + areaCirculo(n1) + "</p>";
                break;
        }

    }
    var reiniciar = confirm("Quieres realizar otra operación");
    if (reiniciar) {
        iniciar();
    }
}



function suma(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

function resta(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

function multiplicacion(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function division(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

function areaTriangulo(base, altura) {
    return (parseFloat(base) * parseFloat(altura)) / 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(parseFloat(radio), 2);
}