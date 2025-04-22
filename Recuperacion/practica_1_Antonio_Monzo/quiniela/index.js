const resultados = {};
for (let i = 1; i <= 14; i++) {
    const random = Math.random();
    resultados[`Encuentro ${i}`] = random < 0.33 ? '1' : random < 0.66 ? 'X' : '2';
}
resultados['Pleno al 15'] = Math.random() < 0.33 ? '1' : Math.random() < 0.66 ? 'X' : '2';


const partidosBody = document.getElementById('partidos');
for (let i = 1; i <= 14; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${i}</td>
        <td><input type="checkbox" name="partido${i}" value="1"></td>
        <td><input type="checkbox" name="partido${i}" value="X"></td>
        <td><input type="checkbox" name="partido${i}" value="2"></td>
    `;
    partidosBody.appendChild(row);
}

const plenoRow = document.createElement('tr');
plenoRow.innerHTML = `
    <td>Pleno al 15</td>
    <td><input type="checkbox" name="pleno15" value="1"></td>
    <td><input type="checkbox" name="pleno15" value="X"></td>
    <td><input type="checkbox" name="pleno15" value="2"></td>
`;
partidosBody.appendChild(plenoRow);


const resultadosBody = document.getElementById('resultados');
for (const partido in resultados) {
    const row = document.createElement('tr');
    const value = resultados[partido];
    
    row.innerHTML = `
        <td>${partido}</td>
        <td><input type="checkbox" ${value === '1' ? 'checked' : ''} disabled></td>
        <td><input type="checkbox" ${value === 'X' ? 'checked' : ''} disabled></td>
        <td><input type="checkbox" ${value === '2' ? 'checked' : ''} disabled></td>
    `;
    resultadosBody.appendChild(row);
}