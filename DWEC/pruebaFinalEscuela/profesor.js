class Profesor {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo; 
    }
  }
  
  function guardarProfesor(profesor) {
    let profesores = JSON.parse(localStorage.getItem('profesores')) || [];
    profesores.push(profesor);
    localStorage.setItem('profesores', JSON.stringify(profesores));
  }

  
  
  function mostrarProfesores() {
    let profesores = JSON.parse(localStorage.getItem('profesores')) || [];
    console.table(profesores);
  }
  