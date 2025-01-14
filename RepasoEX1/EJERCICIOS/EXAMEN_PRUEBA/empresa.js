localStorage.setItem('clientes', JSON.stringify([
    { nombre: "Juan", apellido: "Pérez", fecha: "2000-01-01" },
    { nombre: "Ana", apellido: "Gómez", fecha: "1995-05-15" }
]));

localStorage.setItem('work', JSON.stringify([
    { nombre: "Pedro", apellido: "López", fecha: "1985-03-10" },
    { nombre: "Luisa", apellido: "Martínez", fecha: "1990-07-20" }
]));



class Empresa {


    constructor() {
        this.arrayClientes = [];
        this.arrayWork = [];
    }

    cargarClientes() {

        var listaC = "";
        this.arrayClientes = JSON.parse(localStorage.getItem('clientes')) || [];
        for (var i = 0; i < this.arrayClientes.length; i++) {

            listaC += "<div>" + i + " Nombre: " + this.arrayClientes[i].nombre + " Apellido :" + this.arrayClientes[i].apellido + " fecha: " + this.arrayClientes[i].fecha + "</div>";
        }
        document.getElementById('listaC').innerHTML = listaC;

    }

    cargarWork() {


        var listaW = "";
        this.arrayWork = JSON.parse(localStorage.getItem('work')) || [];
        for (var i = 0; i < this.arrayWork.length; i++) {

            listaW += "<div>" + i + " Nombre: " + this.arrayWork[i].nombre + " Apellido :" + this.arrayWork[i].apellido + " fecha: " + this.arrayWork[i].fecha + "</div>";
        }
        document.getElementById('listaW').innerHTML = listaW;


    }



    aPersona() {
        this.arrayClientes = JSON.parse(localStorage.getItem('clientes')) || [];
        this.arrayWork = JSON.parse(localStorage.getItem('work')) || [];

        // Obtener los valores del formulario
        var n = document.getElementById('nombre').value;
        var a = document.getElementById('apellido').value;
        var f = document.getElementById('fecha').value;
        var w = document.getElementById('work').value;

        if (w.toUpperCase() === "WORK") {
            // Crear y añadir un nuevo trabajador
            var nw = new Work(n, a, f);
            this.arrayWork.push(nw);
            localStorage.setItem('work', JSON.stringify(this.arrayWork));
        } else {
            // Crear y añadir un nuevo cliente
            var nc = new Cliente(n, a, f);
            this.arrayClientes.push(nc);
            localStorage.setItem('clientes', JSON.stringify(this.arrayClientes));
        }

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('work').value = '';
    }



}