document.addEventListener("DOMContentLoaded", function() {
    fetch("carga.php")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        return response.json(); // Convertir a JSON
    
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
    })
    .catch(error => {
        document.getElementById("error").style.display = "block";
        console.error("Error al cargar el catálogo:", error);
    });
});
