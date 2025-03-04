document.addEventListener("DOMContentLoaded", function () {

    var btn = document.getElementById("btn");
    const datos = {
        nombre: "manolo", //document.getElementById("btn").value
        password: 12345
    };

    btn.onclick = function () {
        fetch("carga.php", {

            method: 'POST',
            body: JSON.stringify(datos)
        })
            .then(response => {
                if (!response.ok) {
                    console.log("Error al conectar");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                let tbody = document.getElementById("catalogo").getElementsByTagName("tbody")[0]; // Obtener tbody

                data["CD"].forEach(element => {
                    console.log(element);
                   let v= document.createElement('tr');
                    Object.values(element).forEach(e=>{
                        let t=document.createElement('td');

                        t.textContent=e;

                        v.appendChild(t);
                    })
                    tbody.appendChild(v);
                    
                });
                btn.style.display="none";

            })
            .catch(error => {

                console.log("ERROR",error);
            })
    }

});