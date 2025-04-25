window.onload = function() {
    var valorAnterior = document.getElementById('valor-anterior');
    var valorActual = document.getElementById('valor-actual');
    var botones = document.getElementsByTagName('button');
    
    var numeroActual = '';
    var numeroAnterior = '';
    var operacion = '';
    var resultadoMostrado = false;
    var baseTriangulo = '';

    function actualizarDisplay() {
        valorActual.textContent = numeroActual || '0';
        
        if (baseTriangulo !== '') {
            valorAnterior.textContent = 'Base: ' + baseTriangulo;
        } else if (operacion && numeroAnterior) {
            valorAnterior.textContent = numeroAnterior + ' ' + operacion;
        } else {
            valorAnterior.textContent = '';
        }
    }

    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            if (this.className.includes('numero')) {
                if (resultadoMostrado) {
                    numeroActual = '';
                    resultadoMostrado = false;
                }
                numeroActual += this.textContent;
                valorActual.textContent = numeroActual;
                return;
            }
            
            if (this.id === 'decimal') {
                if (!numeroActual.includes('.')) {
                    numeroActual += numeroActual === '' ? '0.' : '.';
                    valorActual.textContent = numeroActual;
                }
                return;
            }
            
            if (this.className.includes('operador')) {
                if (this.id === 'igual') {
                    calcular();
                    return;
                }
                
                if (this.id === 'areaT') {
                    if (baseTriangulo === '') {
                        baseTriangulo = numeroActual || '0';
                        numeroActual = '';
                    } else {
                        var base = parseFloat(baseTriangulo);
                        var altura = parseFloat(numeroActual || '0');
                        numeroActual = (base * altura / 2).toString();
                        valorAnterior.textContent = 'Área Triángulo: ' + base + ' × ' + altura;
                        baseTriangulo = '';
                        resultadoMostrado = true;
                    }
                    actualizarDisplay();
                    return;
                }
                
                if (this.id === 'areaC') {
                    var radio = parseFloat(numeroActual || '0');
                    numeroActual = (Math.PI * radio * radio).toFixed(4);
                    valorAnterior.textContent = 'Área Círculo (r=' + radio + ')';
                    resultadoMostrado = true;
                    actualizarDisplay();
                    return;
                }
                
                if (numeroAnterior !== '' && numeroActual === '') {
                    operacion = this.textContent;
                    actualizarDisplay();
                    return;
                }
                
                
                if (numeroActual !== '') {
                    if (numeroAnterior !== '') {
                        calcular();
                    }
                    numeroAnterior = numeroActual;
                    operacion = this.textContent;
                    numeroActual = '';
                    resultadoMostrado = false;
                    actualizarDisplay();
                }
                return;
            }
            
            if (this.id === 'borrar') {
                numeroActual = numeroActual.slice(0, -1);
                actualizarDisplay();
                return;
            }
            
            if (this.id === 'borrarTodo') {
                numeroActual = '';
                numeroAnterior = '';
                operacion = '';
                baseTriangulo = '';
                resultadoMostrado = false;
                actualizarDisplay();
            }
        });
    }

    function calcular() {
        if (numeroAnterior === '' || operacion === '') return;
        
        var num1 = parseFloat(numeroAnterior);
        var num2 = parseFloat(numeroActual || '0');
        var resultado;
        
        switch (operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case 'X':
                resultado = num1 * num2;
                break;
            case '%':
                if (num2 === 0) {
                    alert("No se puede dividir por cero");
                    return;
                }
                resultado = num1 / num2;
                break;
            default:
                return;
        }
        
        numeroActual = resultado.toString();
        numeroAnterior = '';
        operacion = '';
        resultadoMostrado = true;
        actualizarDisplay();
    }
};