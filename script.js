// ============================================
// 1. MÚSICA - PLAYLIST AUTOMÁTICO
// ============================================

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const siguiente = document.getElementById('siguiente');

// Lista de canciones
const canciones = [
    "Amor_de_vago.mp3",
    "Un_senor.mp3",
    "Bla.mp3"
];

let indice = 0; // Número de canción actual

// Función para reproducir
function reproducir() {
    audio.src = canciones[indice];
    audio.play();
}

// Función para pasar a la siguiente canción
function siguienteCancion() {
    indice++;
    if (indice >= canciones.length) {
        indice = 0; // Volver al inicio
    }
    reproducir();
}

// Cuando termina una canción, pasa a la siguiente
audio.addEventListener('ended', siguienteCancion);

// Botón de play
play.addEventListener('click', reproducir);

// Botón de pausa
pause.addEventListener('click', function() {
    audio.pause();
});

// Botón de siguiente
siguiente.addEventListener('click', siguienteCancion);


// ============================================
// 2. ANIMACIÓN DE FRASES AL HACER SCROLL
// ============================================

const frases = document.querySelectorAll('.frase');

window.addEventListener('scroll', function() {
    frases.forEach(function(frase) {
        const posicion = frase.getBoundingClientRect().top;
        const pantalla = window.innerHeight;
        
        // Si la frase está visible
        if (posicion < pantalla - 100) {
            frase.classList.add('mostrar');
        }
    });
});


// ============================================
// 3. SCROLL SUAVE EN EL MENÚ
// ============================================

const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = this.getAttribute('href');
        document.querySelector(destino).scrollIntoView({ behavior: 'smooth' });
    });
});


// ============================================
// 4. BOTÓN "ENTRENA CON CORAZÓN"
// ============================================

const boton = document.querySelector('.boton');

boton.addEventListener('click', function() {
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});


