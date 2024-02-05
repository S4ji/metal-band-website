let myArrow = document.getElementById('arrow1');
let myArrow2 = document.getElementById('arrow2');
const slider = document.getElementById('slide');

// FAIRE ATTENTION AUX GUILLEMENTS POUR ETRE SUR QU'IL PREND LA BONNE CHAINE DE CHARACTERE

const slide = [
    "'./img/j1M83KAjd3Y0H4Kranfv--1--2x3w4.jpg'",
    "'./img/9gF5cOwztX7xdcaGUXpQ--1--o5tht.jpg'",
    "'./img/0CXSue4tnJROYNYkXZIX--1--qr2ox.jpg'",
];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0) numero = slide.length - 1;
    if (numero > slide.length - 1) numero = 0;

    document.getElementById('slide').style.backgroundImage =
        'url(' + slide[numero] + ')';
}

slider.style.backgroundImage = 'url(' + slide[numero] + ')';

myArrow.addEventListener('click', () => ChangeSlide(-1));
myArrow2.addEventListener('click', () => ChangeSlide(1));
setInterval(() => ChangeSlide(1), 3000);
