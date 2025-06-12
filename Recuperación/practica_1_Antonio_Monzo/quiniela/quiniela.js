// Generar formulario de apuesta
const cuerpoFormulario = document.getElementById('cuerpo-formulario');

// Generar filas para los encuentros 1-14
for (let i = 1; i <= 14; i++) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td class="encuentro">Encuentro ${i}</td>
        <td><input type="checkbox" name="partido${i}" value="1"></td>
        <td><input type="checkbox" name="partido${i}" value="X"></td>
        <td><input type="checkbox" name="partido${i}" value="2"></td>
    `;
    cuerpoFormulario.appendChild(fila);
}

// Añadir fila para el Pleno al 15
const filaPleno = document.createElement('tr');
filaPleno.innerHTML = `
    <td class="encuentro">Pleno al 15</td>
    <td><input type="checkbox" name="pleno15" value="1"></td>
    <td><input type="checkbox" name="pleno15" value="X"></td>
    <td><input type="checkbox" name="pleno15" value="2"></td>
`;
cuerpoFormulario.appendChild(filaPleno);

// Generar y mostrar resultados aleatorios
const cuerpoResultados = document.getElementById('cuerpo-resultados');
const resultados = {};
const opciones = ['1', 'X', '2'];

// Generar resultados para los encuentros 1-14
for (let i = 1; i <= 14; i++) {
    resultados[`Encuentro ${i}`] = opciones[Math.floor(Math.random() * 3)];
}

// Generar resultado para el Pleno al 15
resultados['Pleno al 15'] = opciones[Math.floor(Math.random() * 3)];

// Mostrar resultados usando bucle for...in
for (const partido in resultados) {
    const resultado = resultados[partido];
    const fila = document.createElement('tr');
    
    fila.innerHTML = `
        <td class="encuentro">${partido}</td>
        <td>
            ${resultado === '1' ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>'} 1
            ${resultado === 'X' ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>'} X
            ${resultado === '2' ? '<input type="checkbox" checked disabled>' : '<input type="checkbox" disabled>'} 2
        </td>
    `;
    
    cuerpoResultados.appendChild(fila);
}