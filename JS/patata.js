class patata {
  constructor(PosY) {
    this.node = document.createElement("img");
    this.node.id = "patata";
    this.node.src = "./Imagenes/patata.png";
    this.node.alt = "test";
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

    this.speed = 2;
  }

  //METODOS
  automaticMovementEffectPatata() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`;
  }
}
