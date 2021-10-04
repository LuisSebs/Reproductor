/**Obtenemos el elemento input="range" */
var track = document.querySelector('.player__level');
/*ESTAS LINEAS DE CODIGO PERMITEN DETERMINAR CUANDO UN <input type="range"> ha sido cambiado*/
/*Me ayudo a entenderlo las siguientes paginas*/
/*https://developer.mozilla.org/es/docs/Web/Events*/ //Referencia de eventos(Todos los eventos)
/*https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event*/ //Evento input
/*https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range */ //Todo a cerca de <input> tag
track.addEventListener('input',function(){
    /*console.log(track.value);*/ //Descomenta esta linea para mostrar el valor de la barra
});

   
/*Llamamos al audio*/
const audio = document.getElementById('audio');
/*Contenedor del los iconos de reproducción*/
const play = document.getElementById('play');
/*Evento cuando se quiere detener el audio*/
play.addEventListener('click', playAudioButton);

/*Funcion para reproducir el audio y a la vez cambiar los iconos de reproduccion*/
function playAudioButton(){
    if(audio.paused||audio.onended){
        play.querySelector(".play-btn").classList.toggle('hide'); /*Recordemos que classList.toggle('nombreClase') verifica si un elemento tiene la clase que pasa como parametro en caso de que la tenga la quita y si no la tiene se la pone al elemento*/
        play.querySelector(".pause-btn").classList.toggle('hide');
        audio.play();
    }
    else{
        audio.pause();
        /*En este caso ya no es necesario colocar document.querySelector() porque queremos ser m'as especificos
        al decir que dentro del elemento play hay un elemento con la clase ".pause-btn". Por eso play.querySelector(".pause-btn");*/
        play.querySelector(".pause-btn").classList.toggle('hide');
        play.querySelector(".play-btn").classList.toggle('hide');
    }
}


/*Poner pausa con barra espaciadora*/
document.addEventListener('keydown', function(event){
    const tecla = event.code;

    if(tecla==='Space'){
        playAudioButton(); 
    }
    console.log(audio.duration); /*muestra la duracion en terminal*/
});

/*Controlar por slide de reproduccion (barra) parecido a lo que esta en las primeras lineas de codigo de este archivo*/
let barra = document.querySelector(".player__level"); /*Barra desplazadora*/
barra.addEventListener('change', function(event){
    /*MUCHO OJO, el evento que puse fue 'change' en lugar de 'input' ya que 'change' toma el valor depués de 
    que se suelta la barra del input ="range", en cambio el evento 'input' toma cada valor por el que se pasa al arrastrar la 
    barra*/
    let valorBarra = barra.value; /*Valor de la barra*/
    let audio = document.querySelector('#audio'); /*Cancion*/
    /*let tiempoActualCancion = audio.currentTime;*//*Tiempo actual de la cancion*/
    audio.currentTime = valorBarra;  /*Asignamos el valor de la barra con el tiempo del audio*/
    /**Detenemos el avance de la barra de reproduccion */
});
/**Detenemos el avance de la barra de reproduccion cuando se mantiene presionado el click del mouse en el elemento */
barra.addEventListener('mousedown', function (event){
    clearInterval(ajustarBarra); //Esta funcion detiene un setInterval
})

/**Continuamos el avance de la barra de reproducción cuando se suelta el click del mouse */
barra.addEventListener('mouseup',function name(event) {
    ajustarBarra = setInterval(movimientoBarra,500); //Volvemos a asignar el valor a ajustarBarra
})
 
/*Funcion que agrega el valor del tiempo de reproduccion del audio a la barra de reproduccion */
function movimientoBarra(){
    barra.value = audio.currentTime;
}

/**Funcion que actualiza el tiempo transcurrido de la cancion en textoTiempoTranscurrido
 * que se encuentra en el archivo changeSong.js
*/
function actualizaTiempo(){
    textoTiempoTranscurrido.innerHTML = estableceDuracion(audio.currentTime);
}

/**Esta variable acutaliza el tiempo transcurrido de la cancion cada cierto tiempo */
let ajustaTiempo = setInterval(actualizaTiempo,100);
/**Esta variable ajusta el circulo que muestra el avance de la cancion */
let ajustarBarra = setInterval(movimientoBarra, 500);

/**NOTAS: PARA MEJORAR EL CODIGO DEBES DE CORREGIR LO SIGUIENTE:
 * 
 * 1.- Que no se lleve a cabo la funcion setInterval cada vez que quieres desplazar la
 * barra de reproduccion
 */