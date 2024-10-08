class brocoli {
  constructor(PosY) {
    this.node = document.createElement("img");
    this.node.id = "brocoli";
    this.node.src = "./Imagenes/Brocoli.png";
    this.node.alt = "brocoli";
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    this.y = PosY;
    this.w = 50;
    this.h = 50;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.speed = 0.5;
  }

  //METODOS
  automaticMovementEffectBrocoli() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
