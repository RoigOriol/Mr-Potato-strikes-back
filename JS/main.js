//* ELEMENTOS DE DOM Y VARIABLES GLOBALES

// pantallas
const splashScreenNode = document.querySelector("#pantalla-inicial");
const splashScreenNode2 = document.querySelector("#instrucciones");
const splashScreenNode3 = document.querySelector("#start-btn");
const splashScreenNode4 = document.querySelector("#titulo");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");
//instrucciones

// botones
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");
let game; //vacío pk no ha iniciado el juego

//* FUNCIONES GLOBALES DE CAMBIO DE ESTADO E INICIO
function startGame() {
  console.log("iniciando el juego");
  //1. ocultar pantalla de inicio
  splashScreenNode.style.display = "none";
  splashScreenNode2.style.display = "none";
  splashScreenNode3.style.display = "none";
  splashScreenNode4.style.display = "none";

  //2. mostrar la pantalla del juego
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
//gameBoxNode.addEventListener("ArrowUp", () =>{

//document.addEventListener("keydown", (event) => {
 // game.MrPotato.moverMrPotato(event);
  //game.MrPotato.jumpEffectMrPotato(event)

  window.addEventListener("keydown",event =>{
    if (event.key === 'w' || event.key === 'W') {
  
    game.MrPotato.movementUpEffect()
    } else if (event.key === 's' || event.key === 'S'){
        game.MrPotato.movementDownEffect()
      }})