class tomate {
  constructor(PosY) {
    this.node = document.createElement("img");
    this.node.id = "tomate";
    this.node.src = "./Imagenes/Tomate.png";
    this.node.alt = "tomate";
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

    this.speed = 0.9;
  }

//METODOS

  automaticMovementEffectTomate() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
