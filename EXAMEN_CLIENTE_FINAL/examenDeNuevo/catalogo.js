window.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('btn');
    const datos = {
        nombre: "manolo", //document.getElementById("btn").value
        password: 12345
    };

    btn.addEventListener("click", function () {
        fetch("carga.php", {

            method: 'POST',
            body: JSON.stringify(datos)
        })

            .then(response => {
                if (!response.ok) {
                    console.log("ERROR EN LA CONEXION A LA BBDD");
                }
                return response.json();
            })

            .then(data => {
                console.log(data);
                var tdb=document.getElementsByTagName("tbody")[0];
                data["CD"].forEach(element => {
                    var t = document.createElement("tr");
                    Object.values(element).forEach(s => {

                        var d=document.createElement("td");
                        d.textContent=s;
                        t.appendChild(d);
                    })

                    tdb.appendChild(t);
                    btn.style.display="none";

                
                });
            })
            .catch(error => {
                console.log("djaiodu");
            })
    })


})