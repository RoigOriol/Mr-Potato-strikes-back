class patata {
  constructor(PosY) {
    this.node = document.createElement("img");
    this.node.id = "patata";
    this.node.src = "./Imagenes/patata.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth; // para que salgan detras de la imagen
    this.y = PosY;
    this.w = 50;
    this.h = 50;

    /*if (type === "arriba") {
      this.node.src = "./imagenes/patata.png"
    } else if (type === "abajo") {
      this.node.src = "./imagenes/patata.png"
    }*/

    this.node.style.position = "absolute"; // necesitamos primero posicionarlo de forma absoluta
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.speed = 2;
  }
  automaticMovementEffectPatata() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
    
  }
}
