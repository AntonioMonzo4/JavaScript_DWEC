document.addEventListener('DOMContentLoaded', function() {
    const solicitarBtn = document.getElementById('solicitar');
    const numeroInput = document.getElementById('numero');
    const postsDiv = document.getElementById('posts');
    const eliminarBtn = document.getElementById('eliminar');
    const eliminadosSelect = document.getElementById('eliminados');

    // Función para mostrar el estado de carga
    function mostrarCargando() {
        postsDiv.innerHTML = '';
        
        const loadingImg = document.createElement('img');
        loadingImg.src = 'loading.gif';
        loadingImg.alt = 'Cargando...';
        
        const cargandoText = document.createElement('p');
        cargandoText.textContent = 'Cargando usuarios...';
        cargandoText.style.color = 'red';
        
        postsDiv.appendChild(loadingImg);
        postsDiv.appendChild(cargandoText);
    }

    // Función para mostrar los posts
    function mostrarPosts(posts) {
        postsDiv.innerHTML = '';
        
        if (!posts || posts.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.textContent = 'No se encontraron posts';
            mensaje.className = 'info';
            postsDiv.appendChild(mensaje);
            return;
        }
        
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post';
            article.id = post.id;
            
            const h2 = document.createElement('h2');
            h2.textContent = post.title;
            
            const pBody = document.createElement('p');
            pBody.textContent = post.body;
            
            const pUser = document.createElement('p');
            pUser.textContent = `Usuario: ${post.userId}`;
            
            article.appendChild(h2);
            article.appendChild(pBody);
            article.appendChild(pUser);
            
            postsDiv.appendChild(article);
        });
    }

    // Evento para solicitar posts
    solicitarBtn.addEventListener('click', function() {
        const numero = numeroInput.value.trim();
        
        if (!numero || isNaN(numero)) {
            alert('Por favor, introduce un número válido');
            return;
        }
        
        mostrarCargando();
        
        // Crear el objeto JSON que espera el servidor
        const datos = {
            numero: numero
        };
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        }
        
        // Configurar la petición fetch
        fetch('posts.php',option )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data); // Para depuración
            mostrarPosts(data);
        })
        .catch(error => {
            console.error('Error:', error);
            postsDiv.innerHTML = `<p class="info">Error al cargar los posts: ${error.message}</p>`;
        });
    });

    // Evento para eliminar un post
    eliminarBtn.addEventListener('click', function() {
        const idAEliminar = eliminadosSelect.value;
        
        if (!idAEliminar) {
            alert('Por favor, selecciona un post para eliminar');
            return;
        }
        
        const postAEliminar = document.getElementById(idAEliminar);
        
        if (postAEliminar) {
            postAEliminar.remove();
            eliminadosSelect.value = '';
        } else {
            alert(`No se encontró el post con ID ${idAEliminar}`);
        }
    });
});