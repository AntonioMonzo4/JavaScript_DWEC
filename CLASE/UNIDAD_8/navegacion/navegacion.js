window.addEventListener("load", inicio);

function inicio() {
    for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
        document.getElementsByTagName("h2")[i].addEventListener("click", recorrerAdelante);
    }
}

function recorrerAdelante(e) {
    let texto = "";
    let h2 = e.target;
    texto += "Has elegido " + h2.textContent;

    //Seleccionamos el padre
    let padre = h2.parentElement;
    texto += " que está situada en el " + padre.id + "<br/>";

    //Seleccionamos el hermano
    let ul = h2.nextElementSibling;

    //Mostrar el número de hijos
    //¡OJO! .childNodes incluye texto y comentarios; children no.
    texto += "El número de provincias es " + ul.children.length + ": ";

    let hijo = ul.firstChild;
    //Si quisiéramos seleccionar el último hijo, pondríamos .lastChild.

    while (hijo != null) {
        texto += " " + hijo.textContent;
        hijo = hijo.nextElementSibling;
        //Si quisiéramos seleccionar el hermano anterior, pondríamos .previousElementSibling
    }

    //Mostramos el texto
    document.getElementById("texto").innerHTML = texto;
    //Si ponemos .textContent mostraríamos texto plano, y no coge etiquetas html.
}