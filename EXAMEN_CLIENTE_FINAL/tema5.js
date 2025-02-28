//COOKIES Y LOCAL  STORAGE 

var textoJSON  = JSON.stringify(objeto);

var objeto = JSON.parse(textoJSON);

localStorage.setItem("apellido", "Garcia"); 
alert(localStorage.getItem("apellido")); 
localStorage.removeItem("apellido"); 
alert(localStorage.getItem("apellido")); 
