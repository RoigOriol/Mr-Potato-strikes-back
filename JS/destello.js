class destello {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "destello";
    this.node.src = "./Imagenes/destello.png";
    this.node.alt = "test";
    
    gameBoxNode.append(this.node);

    this.node.style.position = "absolute";
    this.node.style.visibility = "hidden";
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.transform = "translate(0%, -250%)";
    this.node.style.zIndex = "9999";
  }
}
