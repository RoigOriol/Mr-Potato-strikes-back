class MrPotato {
  constructor() {
    this.node = document.createElement("img");
    this.node.id = "MrPotato";
    this.node.src = "./Imagenes/Mr_Potato.png";
    this.node.alt = "test";
    gameBoxNode.append(this.node);

    this.x = 30;
    this.y = 550;

    this.w = 200;
    this.h = 136;
    this.movementSpeed = 50;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }

  //METODOS
  movementUpEffect() {
    if (this.y > 0) {
      this.y -= this.movementSpeed;
      this.node.style.top = `${this.y}px`;
    }
  }
  movementDownEffect() {
    if (this.y + this.h < 650) {
      this.y += this.movementSpeed;
      this.node.style.top = `${this.y}px`;
    }
  }
  movementRightEffect() {
    if (this.y + this.h < 650) {
      this.y += this.movementSpeed;
      this.node.style.top = `${this.y}px`;
    }
  }
  movementLeftEffect() {
    if (this.y + this.h < 650) {
      this.y += this.movementSpeed;
      this.node.style.top = `${this.y}px`;
    }
  }
}
