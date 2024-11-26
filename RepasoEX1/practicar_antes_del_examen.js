// Fechas de ejemplo
const fecha1 = new Date("2024-11-01");
const fecha2 = new Date("2024-11-26");

// Calcular la diferencia en milisegundos
const diferenciaMs = fecha2.getTime() - fecha1.getTime();

// Convertir de milisegundos a días
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24);

console.log(`La diferencia es de ${diferenciaDias} días.`);
