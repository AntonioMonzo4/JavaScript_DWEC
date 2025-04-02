
function actualizarR(){
    var hoy= new Date();
    var h= String(hoy.getHours()).padStart(2,0);
    var m= String(hoy.getMinutes()).padStart(2,0);
    var s= String(hoy.getSeconds()).padStart(2,0);

    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;

}

var tiempo=0;
var inter;
var crono= false;

function actualizarC(){

    var hc=Math.floor(tiempo/3600).toString().padStart(2,0);
    var mc=Math.floor((tiempo%3600)/60).toString().padStart(2,0);
    var sc=Math.floor(tiempo%60).toString().padStart(2,0);
    document.getElementById('crono').innerHTML=hc+":"+mc+":"+sc;
}

function iniciarC(){
    if(!crono){
        inter=setInterval(()=>{
            tiempo++;

            actualizarC();
        },10)        

        crono=true;
    }


}

function reiniciar(){
    pausar();
    tiempo=0;
    actualizarC();

}

function pausar(){

    clearInterval(inter);
    crono=false;
}