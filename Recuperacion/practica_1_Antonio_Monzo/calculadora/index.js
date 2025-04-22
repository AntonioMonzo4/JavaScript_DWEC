// index.js

// Esperamos a que la página cargue
window.onload = function() {
    // Elementos de la calculadora
    var valorAnterior = document.getElementById('valor-anterior');
    var valorActual = document.getElementById('valor-actual');
    
    // Todos los botones
    var botones = document.getElementsByTagName('button');
    
    // Variables para los cálculos
    var numeroActual = '';
    var numeroAnterior = '';
    var operacion = '';
    var resultado = '';

    // Recorremos todos los botones
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            // Si es un número
            if (this.className.includes('numero')) {
                numeroActual += this.textContent;
                valorActual.textContent = numeroActual;
            }
            
            // Si es el punto decimal
            else if (this.id === 'decimal') {
                if (!numeroActual.includes('.')) {
                    numeroActual += '.';
                    valorActual.textContent = numeroActual;
                }
            }
            
            // Si es un operador (+, -, etc.)
            else if (this.className.includes('operador')) {
                // Si no es el botón igual ni los de área
                if (this.id !== 'igual' && this.id !== 'areaT' && this.id !== 'areaC') {
                    operacion = this.value;
                    numeroAnterior = numeroActual;
                    valorAnterior.textContent = numeroAnterior + ' ' + this.textContent;
                    numeroActual = '';
                    valorActual.textContent = '';
                }
                // Botón igual
                else if (this.id === 'igual') {
                    calcular();
                }
                // Área triángulo
                else if (this.id === 'areaT') {
                    operacion = 'areaT';
                    numeroAnterior = numeroActual;
                    valorAnterior.textContent = 'Base: ' + numeroAnterior;
                    numeroActual = '';
                    valorActual.textContent = '';
                }
                // Área círculo
                else if (this.id === 'areaC') {
                    calcularAreaCirculo();
                }
            }
            
            // Botón borrar (←)
            else if (this.id === 'borrar') {
                numeroActual = numeroActual.slice(0, -1);
                valorActual.textContent = numeroActual;
            }
            
            // Botón borrar todo (C)
            else if (this.id === 'borrarTodo') {
                numeroActual = '';
                numeroAnterior = '';
                operacion = '';
                valorActual.textContent = '';
                valorAnterior.textContent = '';
            }
        });
    }

    // Función para calcular
    function calcular() {
        var num1 = parseFloat(numeroAnterior);
        var num2 = parseFloat(numeroActual);
        
        
        switch (operacion) {
            case 'sumar':
                resultado = num1 + num2;
                break;
            case 'restar':
                resultado = num1 - num2;
                break;
            case 'multiplicar':
                resultado = num1 * num2;
                break;
            case 'dividir':
                if (num2 === 0) {
                    alert("No se puede dividir por cero");
                    return;
                }
                resultado = num1 / num2;
                break;
            case 'areaT':
                // Área triángulo: (base * altura) / 2
                resultado = (num1 * num2) / 2;
                break;
            default:
                return;
        }
        
        numeroActual = resultado.toString();
        valorActual.textContent = numeroActual;
        operacion = '';
        numeroAnterior = '';
        valorAnterior.textContent = '';
    }

    // Función especial para área del círculo
    function calcularAreaCirculo() {
        var radio = parseFloat(numeroActual);
        if (isNaN(radio)) return;
        
        // Área = π * radio²
        resultado = Math.PI * Math.pow(radio, 2);
        
        // Mostrar con 4 decimales
        numeroActual = resultado.toFixed(4);
        valorActual.textContent = numeroActual;
        valorAnterior.textContent = 'Área círculo';
    }
};