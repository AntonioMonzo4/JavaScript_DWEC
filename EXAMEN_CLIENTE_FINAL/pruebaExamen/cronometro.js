function actualizarR(){
    var texto = document.getElementById("reloj");
    var hoy= new Date();
    var hora=hoy.getHours().toString().padStart(2,0);
    var min=hoy.getMinutes().toString().padStart(2,0);
    var seg=hoy.getSeconds().toString().padStart(2,0);

    texto.innerHTML=""+hora+":"+min+":"+seg;
}
var tiempo=0;
var crono=false;
var intervalo;

function actualizarC(){
    var horaC=String(Math.floor(tiempo/3600)).padStart(2,0);
    var minC=String(Math.floor((tiempo%3600)/60)).padStart(2,0);
    var segC=String((tiempo%60)).padStart(2,0);
    document.getElementById("cronometro").innerHTML=""+horaC+":"+minC+":"+segC;
}

function iniciarC(){

    if(!crono){
        intervalo=setInterval(()=>{
            tiempo++;
            actualizarC();
        },1000);
        crono=true;
    }
}

function pararC(){
    clearInterval(intervalo);
    crono=false;

}

function reiniciarC(){
    pararC();
    tiempo=0;
    actualizarC();

}