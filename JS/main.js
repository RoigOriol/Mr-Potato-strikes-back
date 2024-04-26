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

  splashScreenNode.style.display = "none";

  splashScreenNode3.style.display = "none";

  gameScreenNode.style.display = "flex";

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

startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", () => {
  window.location.reload();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    game.MrPotato.movementUpEffect();
  } else if (event.key === "ArrowDown") {
    game.MrPotato.movementDownEffect();
  }
});
