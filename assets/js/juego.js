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
  puntosHTML[0].innerText = puntoJugador;
  console.log(puntoJugador);



})





//   const valorCarta = valorCarta(carta);
//   puntosJugadores[turno] = puntosJugadores[turno] + valorCarta;
//   puntosHTML[turno].innerText = puntosJugadores[turno];
//   crearCarta(carta, turno);
//   if (puntosJugadores[turno] > 21) {
//     console.warn('Lo siento mucho, perdiste');
//     btnPedir.disabled = true;
//     btnDetener.disabled = true;
//     turnoSiguiente();
//   } else if (puntosJugadores[turno] === 21) {
//     console.warn('21, genial!');
//     btnPedir.disabled = true;
//     btnDetener.disabled = true;
//     turnoSiguiente();
//   }
// });


