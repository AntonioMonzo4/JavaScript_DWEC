const imagenesCartas = [
    '10b.jpg', '10b.jpg',
    
    '4b.jpg', '4b.jpg',
    
    '6b.jpg', '6b.jpg',
    
    '8b.jpg', '8b.jpg'
];
const reversoImagen = 'rever.jpg';
let objetosCartas = [];
let puntos = 0;

function mezclarCartas() {
    for (let i = imagenesCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagenesCartas[i], imagenesCartas[j]] = [imagenesCartas[j], imagenesCartas[i]];
    }
}

function crearObjetosCartas() {
    for (let i = 0; i < imagenesCartas.length; i++) {
        objetosCartas.push({
            imagen: imagenesCartas[i],
            volteada: false,
            emparejada: false,
            indice: i,
            elemento: null
        });
    }
}

function actualizarContador() {
    document.getElementById('contador').textContent = `Puntos: ${puntos}`;
}

function voltearCarta(elementoCarta, indice) {
    const carta = objetosCartas[indice];
    if (carta.volteada || carta.emparejada) return;

    carta.volteada = true;
    elementoCarta.classList.add('volteada');

    const cartasVolteadas = objetosCartas.filter(c => c.volteada && !c.emparejada);

    if (cartasVolteadas.length === 2) {
        const [carta1, carta2] = cartasVolteadas;

        if (carta1.imagen === carta2.imagen) {
            carta1.emparejada = true;
            carta2.emparejada = true;
            carta1.elemento.classList.add('emparejada');
            carta2.elemento.classList.add('emparejada');
            puntos++;
            actualizarContador();

            if (objetosCartas.every(c => c.emparejada)) {
                setTimeout(() => {
                    document.getElementById('mensajeVictoria').style.display = 'block';
                }, 500);
            }
        } else {
            setTimeout(() => {
                carta1.volteada = false;
                carta2.volteada = false;
                carta1.elemento.classList.remove('volteada');
                carta2.elemento.classList.remove('volteada');
            }, 1000);
        }
    }
}

function inicializarJuego() {
    mezclarCartas();
    crearObjetosCartas();

    const tablero = document.getElementById('tablero');
    let contenidoHTML = '';

    for (let i = 0; i < objetosCartas.length; i++) {
        const carta = objetosCartas[i];
        contenidoHTML += `
            <div class="carta">
                <img src="${reversoImagen}" class="reverso">
                <img src="${carta.imagen}" class="frente">
            </div>
        `;
    }

    tablero.innerHTML = contenidoHTML;

    const cartasElementos = document.getElementsByClassName('carta');
    for (let i = 0; i < cartasElementos.length; i++) {
        cartasElementos[i].addEventListener('click', () => voltearCarta(cartasElementos[i], i));
        objetosCartas[i].elemento = cartasElementos[i];
    }
}

function reiniciarJuego() {
    objetosCartas = [];
    puntos = 0;
    actualizarContador();
    document.getElementById('mensajeVictoria').style.display = 'none';
    inicializarJuego();
}

// Asignar evento al botón de reinicio
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);

inicializarJuego();
