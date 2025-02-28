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
        data["CD"].forEach(disco => {
            let tbody = document.querySelector("#catalogo tbody");
            let row = tbody.insertRow();
            Object.values(disco).forEach(text => row.insertCell().textContent = text);
        });
    })
    .catch(error => {
        document.getElementById("error").style.display = "block";
        console.error("Error al cargar el catálogo:", error);
    });
});
