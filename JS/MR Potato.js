class MrPotato {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "MrPotato";
    this.node.src = "./Imagenes/mr_Potato.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    // coordenadas y tamaño del personaje
    this.x = 20;
    this.y = 385;

    this.w = 125;
    this.h = 125;
    this.Speed = 30;
    this.node.style.position = "absolute"; // necesitamos primero posicionarlo de forma absoluta
    this.node.style.top =
    this.node.style.bottom = `${this.y}px`;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }
}
// movimiento personaje

/*moverMrPotato(event) {
  if (event.key === "ArrowUp") {
    this.y += this.Speed;
    this.node.style.top = `${this.y}px`; 
    console.log("subepotato");
  } else if (event.key === "ArrowDown") {
    this.y -= this.Speed;
    this.node.style.top = `${this.y}px`;
    console.log("bajapotato");
  }
}*/







/*let MrPotatoX = 100;
let MrPotatoY = 100;
let MrPotatoSpeed = 20;

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    console.log("Quiero mover potato arriba");
    MrPotatoY -= MrPotatoSpeed; // Restar MrPotatoSpeed para mover hacia arriba
    MrPotatoNode.style.top = `${MrPotatoY}px`; // Establecer la posición en la parte superior
  } else if (event.code === "ArrowDown") {
    console.log("Quiero mover potato abajo");
    MrPotatoY += MrPotatoSpeed; // Sumar MrPotatoSpeed para mover hacia abajo
    MrPotatoNode.style.top = `${MrPotatoY}px`; // Establecer la posición en la parte superior
  }
});*/
