//Tras la carga empieza el Script
window.addEventListener("load", function(){

    let resultado = document.getElementById("resultado");

    //Variables señal de cancelación del envío
    let controller;
    let signal;

    document.getElementById("cancelar").addEventListener("click", function(){
        console.log('Petición cancelada');
        controller.abort();
        resultado.innerHTML="Petición Cancelada";
    });

    //Al hacer clic en enviar envío los datos al servidor
    document.getElementById("enviar").addEventListener("click", function(){

        resultado.innerHTML = "Enviando...";
        //Creación controlador de señal de cancelación. Hay que crear una nueva en cada petición.
        controller = new AbortController();
        signal = controller.signal;

        //Preparo el JSON que se enviará con cada campo
        const jsonData = {
            nombre: document.getElementById("nombre").value
        };

        //Preparo las opciones de la petición
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            signal: signal,
            body: JSON.stringify(jsonData)
        };

        //Lanzo la petición
        fetch("respuesta.php",options)
            //Proceso la respuesta
            .then(response => {
                if (response.ok)
                    return response.text();
                throw new Error(response.status);
            })
            //Proceso los datos
            .then(data => {
                console.log(data);
                resultado.innerHTML="Petición Correcta";
                resultado.innerHTML+="<br>Respuesta: "+data;
            })
            //En caso de error en la petición, lo gestiono
            .catch(err => {
                console.error("ERROR: ", err.message);
                resultado.innerHTML="ERROR: "+err.message;
            }
        );

    });
});