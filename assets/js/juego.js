let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntoJugador = 0;
let puntoComputadora = 0;

// referencia ddel html 

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#Computadora-cartas');


const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
}

crearDeck();

// pedir carta 

const pedirCarta = () => {
  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}
pedirCarta();

// valor de la carta

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
};
const valor = valorCarta(pedirCarta());

// evento click 
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntoJugador = puntoJugador + valorCarta(carta);
  puntosHtml[0].innerText = puntoJugador;

  // logica de pedir carta 
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);



  //logica para los 21 puntos 
  // condicion hasta 21 puntos 
  if (puntoJugador > 21) {
    console.warn('Perdiste');
    btnPedir.disabled = true;

  }
});









