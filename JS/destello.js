class destello {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "destello";
    this.node.src = "./Imagenes/destello.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    this.x = 100;
    this.y = 400;
    this.node.style.position = "absolute";
    this.node.style.visibility = "hidden";
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.transform = "translate(-50%, -50%)";
    this.node.style.zIndex = "9999";
  }
}
