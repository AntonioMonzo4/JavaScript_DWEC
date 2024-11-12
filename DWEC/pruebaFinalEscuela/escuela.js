class Escuela {
    constructor(nombre, localidad, responsable) {
      this.nombre = nombre;
      this.localidad = localidad;
      this.responsable = responsable;
    }
  }
  
  function guardarEscuela(escuela) {
    let escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];
    escuelas.push(escuela);
    localStorage.setItem('escuelas', JSON.stringify(escuelas));
  }
  
  function mostrarEscuelas() {
    let escuelas = JSON.parse(localStorage.getItem('escuelas')) || [];
    console.table(escuelas);
    
    
  }
  