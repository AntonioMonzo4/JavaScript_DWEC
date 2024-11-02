class Vuelo {
    constructor(codigo, horaLlegada, horaSalida) {
        this.codigo = codigo;
        this.horaLlegada = horaLlegada;
        this.horaSalida = horaSalida;
    }

    comprobarHoras() {
        return this.horaSalida > this.horaLlegada;
    }
}

class Aeropuerto {
    constructor(nombre, ciudad, numVuelosDiarios) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numVuelosDiarios = numVuelosDiarios;
        this.vuelos = [];
    }

    añadirVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }

    mostrarVuelos() {
        this.vuelos.forEach(vuelo => {
            console.log("Vuelo: " + vuelo.codigo + ", Hora de Llegada: " + vuelo.horaLlegada + ", Hora de Salida: " + vuelo.horaSalida);
            console.log("¿Hora de salida posterior a hora de llegada? " + (vuelo.comprobarHoras() ? "Sí" : "No"));
        });
    }
}

// Ejemplo de uso
const aeropuerto = new Aeropuerto("Aeropuerto Internacional", "Madrid", 20);
const vuelo1 = new Vuelo("IB1234", "10:00", "10:30");
const vuelo2 = new Vuelo("IB5678", "12:00", "11:30");

aeropuerto.añadirVuelo(vuelo1);
aeropuerto.añadirVuelo(vuelo2);
aeropuerto.mostrarVuelos();
