class Alumno {
    constructor(nombre, curso, profesorResponsable) {
      this.nombre = nombre;
      this.curso = curso;
      this.profesorResponsable = profesorResponsable;
    }
  }
  
  function guardarAlumno(alumno) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }
  
  function mostrarAlumnos() {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    console.table(alumnos);
  }
  