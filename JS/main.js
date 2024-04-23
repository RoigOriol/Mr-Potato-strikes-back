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
//let game; //vacío pk no ha iniciado el juego

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
 console.log("Hola")
 game.start();
 game.iniciarfrecuenciaDePatata()
  
}

//* EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
//gameBoxNode.addEventListener("ArrowUp", () =>{
// tenemos que hacer que el poliito salte accediendo a(no podemos acceder directamente a la clase hay que acceder al game.pollito): No la reconoce por temas de scope
document.addEventListener("keydown",(event) =>{
  game.MrPotato.moverMrPotato(event)
})







/* *** Event Listeners ***
// tambien podemos hacer document.addEventListener
window.addEventListener("keydown", (event) => {
  // console.log(event.code)
  // console.log("presionando teclas")
  if (event.code === "ArrowRight") {
    // console.log("quiero mover la paleta a la derecha")
    paddleX += paddleSpeed
    paddleNode.style.left = `${paddleX}px`
  } else if (event.code === "ArrowLeft") {
    // console.log("quiero moverl la paleta a la izquierda")
    paddleX -= paddleSpeed
    paddleNode.style.left = `${paddleX}px`
  }

  //! en nuestro codigo SOLO necesitamos un eventListener keydown. Todas las teclas van aqui mismo

})*/