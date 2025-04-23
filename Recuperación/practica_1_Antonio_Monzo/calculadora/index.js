window.onload = function() {
    const displayAnterior = document.getElementById('valor-anterior');
    const displayActual = document.getElementById('valor-actual');
    const botones = document.querySelectorAll('button');
    
    let numeroActual = '0';
    let numeroAnterior = '';
    let operacion = undefined;
    let modoAreaTriangulo = false;

    function actualizarDisplay() {
        displayActual.textContent = numeroActual;
        if (operacion) {
            displayAnterior.textContent = numeroAnterior + ' ' + operacion;
        } else {
            displayAnterior.textContent = '';
        }
    }

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.classList.contains('numero')) {
                if (numeroActual === '0' || modoAreaTriangulo) {
                    numeroActual = boton.textContent;
                    modoAreaTriangulo = false;
                } else {
                    numeroActual += boton.textContent;
                }
                actualizarDisplay();
                return;
            }

            if (boton.id === 'decimal') {
                if (!numeroActual.includes('.')) {
                    numeroActual += '.';
                    actualizarDisplay();
                }
                return;
            }

            if (boton.classList.contains('operador')) {
                if (boton.id === 'igual') {
                    calcular();
                    return;
                }
                
                if (boton.id === 'areaT') {
                    if (!numeroAnterior) {
                        numeroAnterior = numeroActual;
                        displayAnterior.textContent = 'Base: ' + numeroAnterior;
                        numeroActual = '0';
                        modoAreaTriangulo = true;
                    } else {
                        const base = parseFloat(numeroAnterior);
                        const altura = parseFloat(numeroActual);
                        numeroActual = (base * altura / 2).toString();
                        displayAnterior.textContent = `Área Triángulo (${base}×${altura})`;
                        numeroAnterior = '';
                        actualizarDisplay();
                    }
                    return;
                }

                if (boton.id === 'areaC') {
                    const radio = parseFloat(numeroActual);
                    numeroActual = (Math.PI * radio * radio).toFixed(4);
                    displayAnterior.textContent = `Área Círculo (r=${radio})`;
                    actualizarDisplay();
                    return;
                }

                operacion = boton.textContent;
                numeroAnterior = numeroActual;
                numeroActual = '0';
                actualizarDisplay();
                return;
            }

            if (boton.id === 'borrar') {
                numeroActual = numeroActual.slice(0, -1);
                if (numeroActual === '') {
                    numeroActual = '0';
                }
                actualizarDisplay();
                return;
            }

            if (boton.id === 'borrarTodo') {
                numeroActual = '0';
                numeroAnterior = '';
                operacion = undefined;
                modoAreaTriangulo = false;
                actualizarDisplay();
            }
        });
    });

    function calcular() {
        let resultado;
        const anterior = parseFloat(numeroAnterior);
        const actual = parseFloat(numeroActual);

        switch (operacion) {
            case '+':
                resultado = anterior + actual;
                break;
            case '-':
                resultado = anterior - actual;
                break;
            case 'X':
                resultado = anterior * actual;
                break;
            case '%':
                resultado = anterior / actual;
                break;
            default:
                return;
        }

        numeroActual = resultado.toString();
        operacion = undefined;
        numeroAnterior = '';
        actualizarDisplay();
    }
};