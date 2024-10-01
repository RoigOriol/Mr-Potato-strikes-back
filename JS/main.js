//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

const splashScreenNode = document.querySelector("#header");
const splashScreenNode3 = document.querySelector("#img-fondo");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");

const gameBoxNode = document.querySelector("#game-box");
let game;


//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  console.log("iniciando el juego");

  splashScreenNode.style.display = "none"; // Ocultar pantalla de inicio
  splashScreenNode3.style.display = "none"; // Ocultar fondo

  gameScreenNode.style.display = "flex"; // Mostrar pantalla de juego

  //3. iniciar el juego
  game = new Game(); 
  console.log("newgame");
  game.start();
  game.iniciarFrecuenciaDePatata();
  console.log("salepatata");
  game.iniciarFrecuenciaDeBrocoli();
  console.log("salebrocoli");
  game.iniciarFrecuenciaDeTomate();
  console.log("saletomate");
}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", startGame); // Inicia el juego cuando se pulsa el botón

restartBtnNode.addEventListener("click", () => {
  window.location.reload(); // Reinicia la página al pulsar restart
});

// Control de movimiento de Mr. Potato mediante las teclas de flecha
window.addEventListener("keydown", (event) => {
  if (game && game.MrPotato) { 
    if (event.key === "ArrowUp") {
      game.MrPotato.movementUpEffect(); 
    } else if (event.key === "ArrowDown") {
      game.MrPotato.movementDownEffect(); 
    } else if (event.key === "ArrowLeft") {
      game.MrPotato.movementLeftEffect();  
    } else if (event.key === "ArrowRight") {
      game.MrPotato.movementRightEffect(); 
    }
  }
});

//* CONTROL DE AUDIO
const audio = document.getElementById("audio");
const audioControl = document.getElementById("audio-control");

audioControl.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audioControl.src = "./Imagenes/pause.png"; 
  } else {
    audio.pause();
    audioControl.src = "./Imagenes/play.png"; 
  }
});
