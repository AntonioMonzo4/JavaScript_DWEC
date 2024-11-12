// Funciones generales para la gestión de datos
function borrarDatos(key) {
    localStorage.removeItem(key);
  }
  
  function modificarDatos(key, index, nuevoObjeto) {
    let datos = JSON.parse(localStorage.getItem(key)) || [];
    if (index >= 0 && index < datos.length) {
      datos[index] = nuevoObjeto;
      localStorage.setItem(key, JSON.stringify(datos));
    } else {
      console.error("Índice no válido.");
    }
  }
  
  function eliminarObjeto(key, index) {
    let datos = JSON.parse(localStorage.getItem(key)) || [];
    if (index >= 0 && index < datos.length) {
      datos.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(datos));
    } else {
      console.error("Índice no válido.");
    }
  }
  