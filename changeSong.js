/**Nota: las variables y metodos que no veas declaradas aquí
 * están en el archivo script.js. Tendran un comentario que diga script.js
 */
let nextButton = document.getElementById('next_btn');
let previousButton = document.getElementById('previous_btn');
let artistName = document.getElementById('artist');
let songName = document.getElementById('song_name');
let reproductor = document.getElementById('reproductor');
let textoDuracion = document.getElementById('textoDuracion');
let textoTiempoTranscurrido = document.getElementById('textoTiempo');


let ifly = {ruta:"songs/bazzi.mp3",nombre:"I.F.L.Y.",artista:"Bazzi"};
let saveYourTears = {ruta:"songs/saveYourTears.mp3",nombre:"Save Your Tears",artista:"The Weeknd"};
let circles = {ruta:"songs/circles.mp3",nombre:"Circles",artista:"Post Malone"};

let songs = [ifly,saveYourTears,circles]

/**Posicion de la cancion actual en songs */
let current = 0;

/**Next */
nextButton.addEventListener('click', function(event){
    /**Detenemos la reproduccion de la cancion anterior */

    /**NOTA: la variable audio ya está definida en el archivo script. Y spi yo tampoco
     * puedo creer que sea capaz de leer la variable desde otro archivo
    */
    
    //Casos en los la cancion sea la ultima cancion del arreglo songs
    if(current==2){
        current=0;
    }else{
        current++;
    }
        
    console.log(songs[current].nombre)

    artistName.innerHTML = songs[current].artista;
    songName.innerHTML = songs[current].nombre;
    reproductor.src = songs[current].ruta;
    audio.load(); //script.js
    audio.play(); //script.js

    /**Antes de colocar este evento que se activa después de que 
     * al ejecutar la linea audio.load();. Teniamos el problema
     * de que queríamos imprimir la duracion del audio y ponerlo
     * en una etiqueta que lo muestre al usuario. Pero lo haciamos
     * de la siguiente manera:
     * 
     * audio.load();
     * audio.play();
     * textoDuracion.innerHTML = estableceDuracion(audio.duration);
     * 
     * Pero textoDuration mostraba NaN porque no se había 
     * establecido la duracion del audio. Pero al navegador 
     * no lde daba tiempo de cargar los metadatos del audio
     * que agregamos. Entonces este metodo inserta la duracion
     * del audio cuando se termina de cargar los metadatos del 
     * audio.
     */
    audio.addEventListener('loadedmetadata',function(){
        textoDuracion.innerHTML = estableceDuracion(audio.duration);
        /**Cuando cambiamos de cancion debemos cambiar el valor maximo de la
         * barra de reproduccion para que corresponda el recorrido de la barra
         * con el tiempo transcurrido
         */
        barra.max = audio.duration;
    });
    
});


/**Previous */
previousButton.addEventListener('click', function(event){

    //Casos en los la cancion sea la primer cancion del arreglo songs
    if(current==0){
        current=2;
    }else{
        current--;
    }

    console.log(songs[current].nombre) //Nombre de la cancion

    artistName.innerHTML = songs[current].artista;
    songName.innerHTML = songs[current].nombre;
    reproductor.src = songs[current].ruta;
    audio.load(); //script.js
    audio.play(); //script.js

    /**Antes de colocar este evento que se activa después de que 
     * al ejecutar la linea audio.load();. Teniamos el problema
     * de que queríamos imprimir la duracion del audio y ponerlo
     * en una etiqueta que lo muestre al usuario. Pero lo haciamos
     * de la siguiente manera:
     * 
     * audio.load();
     * audio.play();
     * textoDuracion.innerHTML = estableceDuracion(audio.duration);
     * 
     * Pero textoDuration mostraba NaN porque no se había 
     * establecido la duracion del audio. Pero al navegador 
     * no lde daba tiempo de cargar los metadatos del audio
     * que agregamos. Entonces este metodo inserta la duracion
     * del audio cuando se termina de cargar los metadatos del 
     * audio.
     */
     audio.addEventListener('loadedmetadata',function(){
        textoDuracion.innerHTML = estableceDuracion(audio.duration);
        /**Cuando cambiamos de cancion debemos cambiar el valor maximo de la
         * barra de reproduccion para que corresponda el recorrido de la barra
         * con el tiempo transcurrido
         */
        //barra.max = audio.duration;
    });

});


/**Metodo que regresa en un string la representacion
 * en minutos y segundos la duracion de una cancion.
*/
function estableceDuracion(duracion){
    //audio.duration regresa la duracion del audio en segundos
    let minutos =  parseInt(duracion/60,10);
    let segundos = parseInt(duracion-(minutos*60),10);
    let tiempo = `${minutos}:${segundos<10?"0"+segundos:segundos}`;
    return tiempo;
}

document.addEventListener('click',function(){
    
});