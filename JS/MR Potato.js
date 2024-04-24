class MrPotato {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "MrPotato";
    this.node.src = "./Imagenes/mr_Potato.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    // coordenadas y tamaño del personaje
    this.x = 30;
    this.y = 550;

    this.w = 125;
    this.h = 125;
    this.movementSpeed = 50;
    this.node.style.position = "absolute"; // necesitamos primero posicionarlo de forma absoluta
    this.node.style.top =`${this.y}px`;
    this.node.style.left =`${this.x}px`;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }
   /* moverMrPotato(event) {
    if (event.key === "ArrowUp") {
      this.y -= this.Speed;
      this.node.style.top = `${this.y}px`;
      console.log("subepotato");
    } else if (event.key === "ArrowDown") {
      this.y += this.Speed;
      this.node.style.top = `${this.y}px`;
      console.log("bajapotato");
    }
  }*/

// movimiento personaje


/*jumpEffectMrPotato() {
  if (this.y < 550){
    this.y -= this.Speed;
    this.node.style.top = `${this.y}px`;
  }
  if(this.y > 400){
  this.y += this.Speed;
  this.node.style.top = `${this.y}px`;
}
}
*/
movementUpEffect(){
  if (this.y > 0){
    this.y -= this.movementSpeed
    this.node.style.top = `${this.y}px`
  }
}

movementDownEffect(){
  if  ((this.y + this.h) < 650){
    this.y += this.movementSpeed
    this.node.style.top = `${this.y}px`
  }
}

}

