

function toggleList() {
    var characterList = document.getElementById("characterList");
    characterList.style.display = (characterList.style.display === 'none') ? 'block' : 'none';
}

function toggleList2() {
    var characterList = document.getElementById("characterList2");
    characterList.style.display = (characterList.style.display === 'none') ? 'block' : 'none';
}

function toggleList3() {
    var characterList = document.getElementById("characterList3");
    characterList.style.display = (characterList.style.display === 'none') ? 'block' : 'none';
}

function toggleList4() {
    var characterList = document.getElementById("characterList4");
    characterList.style.display = (characterList.style.display === 'none') ? 'block' : 'none';
}

function toggleList5() {
    var characterList = document.getElementById("characterList5");

    // Alternar la visibilidad de la lista
    characterList.style.display = (characterList.style.display === 'grid') ? 'none' : 'grid';

    // Restablecer la visibilidad de otras listas
    var otherLists = document.querySelectorAll('.grid-container:not(#characterList5)');
    otherLists.forEach(function (list) {
        list.style.display = 'grid';
    });
}

/*-----------------------------------------*/

const sonidos = ["Sonido0.mp3", "Sonido1.mp3", "Sonido2.mp3", "Sonido3.mp3", "Sonido4.mp3", "Sonido5.mp3", "Sonido6.mp3"];
let sonidoActivo = false;

/**
 * Muestra el reloj actualizado cada segundo.
 */
function mostrarReloj() {
    // Código de la función
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var tiempo = hora + ":" + minutos + ":" + segundos;

    document.getElementById("reloj").innerHTML = tiempo;

    setTimeout(mostrarReloj, 1000);
}

/**
 * Reproduce un sonido de forma aleatoria.
 */
function reproducirSonido() {
    // Código de la función
    var reproductor = document.getElementById("sonido");
    var botonMusica = document.querySelector(".boton_4");

    var indiceAleatorio = Math.floor(Math.random() * sonidos.length);

    reproductor.src = sonidos[indiceAleatorio];
    reproductor.play();

    sonidoActivo = true;

    // Activar animación solo si no está activa
    if (!botonMusica.classList.contains("moviendo")) {
        botonMusica.classList.add("moviendo");
    }

    // Activar animación del botón MUSICA
    document.querySelector(".boton_5").classList.add("moviendo");

    // Escuchar el evento de finalización del sonido
    reproductor.addEventListener("ended", sonidoTerminado);
}

function alternarAnimacion() {
    var reproductor = document.getElementById("sonido");
    var botonMusica = document.querySelector(".boton_4");

    if (sonidoActivo) {
        reproductor.pause();
        sonidoActivo = false;

        // Detener la animación solo si está activa
        if (botonMusica.classList.contains("moviendo")) {
            botonMusica.classList.remove("moviendo");
        }

        // Detener animación del botón MUSICA
        document.querySelector(".boton_5").classList.remove("moviendo");
    } else {
        reproducirSonido();
    }
}

function sonidoTerminado() {
    sonidoActivo = false;
    var botonMusica = document.querySelector(".boton_4");

    // Detener la animación solo si está activa
    if (botonMusica.classList.contains("moviendo")) {
        botonMusica.classList.remove("moviendo");
    }

    // Detener animación del botón MUSICA
    document.querySelector(".boton_5").classList.remove("moviendo");
}

function moverReloj() {
    var reloj = document.getElementById("reloj");

    function animar() {
        if (sonidoActivo) {
            reloj.style.transform = "rotate(" + (parseInt(reloj.style.transform.replace("rotate(", "").replace("deg)", "")) + 1) + "deg)";
            requestAnimationFrame(animar);
        }
    }

    animar();
}

mostrarReloj();

/*-------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen"); // Cambié la clase a la nueva clase común
    let indiceImagenActual = 0;
  
    function cambiarImagen() {
      imagenes.forEach((imagen) => {
        imagen.style.opacity = 0;
        imagen.style.transform = "translate(-50%, -50%) scale(0.3)";
      });
  
      indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
      
      imagenes[indiceImagenActual].style.opacity = 0.95;
      imagenes[indiceImagenActual].style.transform = "translate(-50%, -50%) scale(1)";
    }
  
    setInterval(cambiarImagen, 8000); // Cambia la imagen cada 6 segundos
  });
  
  
/*-----------------------------------------------------------*/



  
