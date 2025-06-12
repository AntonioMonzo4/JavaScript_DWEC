document.addEventListener('DOMContentLoaded', function () {
    const solicitarBtn = document.getElementById("solicitar");
    const numero = document.getElementById("numero");
    const postsdiv = document.getElementById("posts");
    const eliminarBtn = document.getElementById("eliminar");
    const eliminadosSelect = document.getElementById("eliminados");

    function mostrarCargando() {
        postsdiv.innerHTML = "";
        const loadingImg = document.createElement('img');
        loadingImg.src = "loading.gif";

        const cargandoText = document.createElement('p');
        cargandoText.textContent = "Cargando usuarios...";

        postsdiv.appendChild(loadingImg);
        postsdiv.appendChild(cargandoText);

    }

    function mostrarPosts(posts) {
        postsdiv.innerHTML = "";
        if (!posts || posts.length === 0) {
            return alert("x");
        }

        posts.forEach(post => {
            const art = document.createElement('article');
            
            art.className = "post";
            art.id = post.id;

            const h2 = document.createElement("h2");
            h2.textContent = post.title;

            const pbody = document.createElement('p');
            pbody.textContent = post.body;

            const pUser = document.createElement('p');
            pUser.textContent = post.userId;

            art.appendChild(h2);
            art.appendChild(pbody);
            art.appendChild(pUser);

            postsdiv.appendChild(art);

        });
    }

    solicitarBtn.addEventListener('click', function () {

        const num = numero.value;
        if (!num) {
            return alert("no número ");
        }

        mostrarCargando();

        const datos = {
            numero: num
        };

        const option = {
            method: 'POST',
            body: JSON.stringify(datos)
        };

        fetch("posts.php", option)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No tenemos respuesta");
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                mostrarPosts(data);
            })
            .catch(error => {

                console.log("ERROR", error);
            })
    })

    eliminarBtn.addEventListener('click', function(){

        let idEliminar= eliminadosSelect.value;
        let postAEliminar = document.getElementById(idEliminar);

        if(postAEliminar){
            postAEliminar.remove();
            eliminadosSelect.value="";
        }

    })

})