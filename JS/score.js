class score {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "score";
    this.node.src = "./Imagenes/Mr_Potato.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    this.x = 1000;
    this.y = 15;
    this.w = 125;
    this.h = 125;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }
}
