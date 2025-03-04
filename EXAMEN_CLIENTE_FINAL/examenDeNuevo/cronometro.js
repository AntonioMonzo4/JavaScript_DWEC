function actualizarR() {
    var hoy=new Date();
    var h=String(hoy.getHours()).padStart(2,0);
    var m=String(hoy.getMinutes()).padStart(2,0);
    var s=String(hoy.getSeconds()).padStart(2,0);

    document.getElementById("reloj").innerHTML=""+h+":"+m+":"+s; 
    

}

var tiempo=0;
var crono=false;
var intervalo;

function actualizarC(){
    var hc=String(Math.floor(tiempo/3600)).padStart(2,0);
    var mc=String(Math.floor((tiempo/3600)%60)).padStart(2,0);
    var sc=String(tiempo%60).padStart(2,0);

    document.getElementById("cronometro").innerHTML=""+hc+":"+mc+":"+sc; 
}

function iniciarC(){
    if(!crono){
        intervalo=setInterval(function(){
            tiempo++;
            actualizarC();
        }

        ,1000);
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


setInterval(actualizarR, 1000);
actualizarC();