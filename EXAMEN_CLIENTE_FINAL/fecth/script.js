document.addEventListener("DOMContentLoaded",function () {

    var btn = document.getElementById("btn");
const datos = {
    nombre: "manolo", //document.getElementById("btn").value
    password: 12345
};
btn.onclick = function () {
    fetch('carga.php', {

        method: 'POST',
        body: JSON.stringify(datos)
    })
        .then(response => {
            if (!response.ok) {
                console.log("ERROR EN LA CARGA DE DATOS");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let tbody = document.getElementById("catalogo").getElementsByTagName("tbody")[0]; // Obtener tbody
        
            data["CD"].forEach(disco => {
                let row = document.createElement("tr"); // Crear fila manualmente
                
                Object.values(disco).forEach(text => {
                    let cell = document.createElement("td"); // Crear celda manualmente
                    cell.textContent = text; // Asignar texto
                    row.appendChild(cell); // Agregar celda a la fila
                });
    
                tbody.appendChild(row); // Agregar fila al tbody
            });
            btn.style.display= "none";
        })
        .catch(error => {

            console.log("ERROR")
        })
}
    
});

