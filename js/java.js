var title = document.getElementById("tituloPuesto");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.tituloUsado').innerHTML= inputtext;
});
var title = document.getElementById("subtitulo");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.subtituloUsado').innerHTML= inputtext;
});
var title = document.getElementById("nombre");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.autor').innerHTML= inputtext;
});
var title = document.getElementById("mensaje");
title.addEventListener('keyup',(event) =>{
    var inputtext = event.path[0].value;
    document.querySelector('.textoUsado').innerHTML= inputtext;
});

function ocultarElementos(){
    document.getElementById("ocultarLista").style.display="block";
}
var fecha = new Date();
document.getElementById("fechaCambiar").innerHTML = fecha;

function anaranjado(){
    document.getElementById("ocultarLista").style.backgroundColor="rgb(211, 94, 27)";
}
function morado(){
    document.getElementById("ocultarLista").style.backgroundColor="#8a2be2";
}
function rojo(){
    document.getElementById("ocultarLista").style.backgroundColor="#a52a2a";
}


function mandarFoto(nombreFoto){
    document.getElementById("imagenSeleccionada").src = "./imagenes/" + nombreFoto + ".jpg";
}
function valentin(){
    document.getElementById("ocultarLista").classList.remove("cumpleaños");
    document.getElementById("ocultarLista").classList.remove("motivacion");
    document.getElementById("ocultarLista").classList.add("valentin");
}
function cumpleaños(){
    document.getElementById("ocultarLista").classList.remove("valentin");
    document.getElementById("ocultarLista").classList.add("cumpleaños");
}
function motivacion(){
    document.getElementById("ocultarLista").classList.remove("valentin");
    document.getElementById("ocultarLista").classList.add("motivacion");
}