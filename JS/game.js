let score = 0;

class Game {
  constructor() {
    this.MrPotato = new MrPotato();

    this.patataArr = [];

    this.brocoliArr = [];

    this.tomateArr = [];
    this.destello = new destello();

    this.gameIntervalId;
    this.patataIntervalId;
    this.brocoliIntervalId;
    this.tomateIntervalId;
    this.scoreIntervalId;
  }

  patataAparece() {
    let randomPosY = Math.floor(Math.random() * 600);

    let nuevaPatata = new patata(randomPosY);
    this.patataArr.push(nuevaPatata);

    console.log("patata");
  }

  iniciarFrecuenciaDePatata() {
    this.patataIntervalId = setInterval(() => {
      this.patataAparece();
    }, 2000);
  }

  eliminarPatataiAlSalirDeLaPantalla() {
    this.patataArr.forEach((cadaPatata, index) => {
      if (cadaPatata.x + cadaPatata.w < 0) {
        this.patataArr.splice(index, 1);

        cadaPatata.node.remove();
      }
    });
  }

  eliminarPatataAlChocarMrPotato() {
    this.patataArr.forEach((cadaPatata, index) => {
      if (cadaPatata.x + cadaPatata.w < 0) {
        this.patataArr.splice(index, 1);

        cadaPatata.node.remove();
      }
    });
  }

  brocoliAparece() {
    let randomPosY = Math.floor(Math.random() * 600);
    let nuevaBrocoli = new brocoli(randomPosY);
    this.brocoliArr.push(nuevaBrocoli);
    console.log("brocoli");
  }

  iniciarFrecuenciaDeBrocoli() {
    this.brocoliIntervalId = setInterval(() => {
      this.brocoliAparece();
    }, 3000);
  }

  eliminarBrocoliAlSalirDeLaPantalla() {
    this.brocoliArr.forEach((cadaBrocoli, index) => {
      if (cadaBrocoli.x + cadaBrocoli.w < 0) {
        this.brocoliArr.splice(index, 1);

        cadaBrocoli.node.remove();
      }
    });
  }

  tomateAparece() {
    let randomPosY = Math.floor(Math.random() * 600);

    let nuevaTomate1 = new tomate(randomPosY);
    this.tomateArr.push(nuevaTomate1);
    console.log("tomate");
  }

  iniciarFrecuenciaDeTomate() {
    this.tomateIntervalId = setInterval(() => {
      this.tomateAparece();
    }, 4000);
  }

  eliminarTomateAlSalirDeLaPantalla() {
    this.tomateArr.forEach((cadaTomate, index) => {
      if (cadaTomate.x + cadaTomate.w < 0) {
        this.tomateArr.splice(index, 1);

        cadaTomate.node.remove();
      }
    });
  }

  scoreFunction() {
    score++;
    console.log("suma puntos");
    document.querySelector("#counter-btn").innerHTML = `${"Score: "}` + score;
  }

  colisionMrPotatoPatata() {
    this.patataArr.forEach((cadaPatata) => {
      if (
        !cadaPatata.tocaMrPotato &&
        this.MrPotato.x < cadaPatata.x + cadaPatata.w &&
        this.MrPotato.x + this.MrPotato.w > cadaPatata.x &&
        this.MrPotato.y < cadaPatata.y + cadaPatata.h &&
        this.MrPotato.y + this.MrPotato.h > cadaPatata.y
      ) {
        cadaPatata.tocaMrPotato = true;
        cadaPatata.node.remove();
        this.destello.node.style.visibility = "visible";
        setTimeout(() => {
          this.destello.node.style.visibility = "hidden";
        }, 1000);
        this.scoreFunction();
        setTimeout(() => {
          this.destello.node.style.visibility = "hidden";
        }, 1000);
      }
    });
  }

  colisionMrPotatoBrocoli() {
    this.brocoliArr.forEach((cadaBrocoli) => {
      if (
        this.MrPotato.x < cadaBrocoli.x + cadaBrocoli.w &&
        this.MrPotato.x + this.MrPotato.w > cadaBrocoli.x &&
        this.MrPotato.y < cadaBrocoli.y + cadaBrocoli.h &&
        this.MrPotato.y + this.MrPotato.h > cadaBrocoli.y
      ) {
        this.gameOver();
      }
    });
  }

  colisionTomateMrPotato() {
    this.tomateArr.forEach((cadaTomate) => {
      if (
        this.MrPotato.x < cadaTomate.x + cadaTomate.w &&
        this.MrPotato.x + this.MrPotato.w > cadaTomate.x &&
        this.MrPotato.y < cadaTomate.y + cadaTomate.h &&
        this.MrPotato.y + this.MrPotato.h > cadaTomate.y
      ) {
        console.log("choque tomate");
        this.gameOver();
      }
    });
  }
  gameLoop() {
    this.patataArr.forEach((cadaPatata) => {
      cadaPatata.automaticMovementEffectPatata();
    });

    this.brocoliArr.forEach((cadaBrocoli) => {
      cadaBrocoli.automaticMovementEffectBrocoli();
    });

    this.tomateArr.forEach((cadaTomate) => {
      cadaTomate.automaticMovementEffectTomate();
    });
    this.colisionMrPotatoPatata();
    this.colisionMrPotatoBrocoli();
    this.colisionTomateMrPotato();
  }

  gameOver() {
    clearInterval(this.gameIntervalId);
    clearInterval(this.patataIntervalId);
    clearInterval(this.brocoliIntervalId);
    clearInterval(this.tomateIntervalId);

    gameScreenNode.style.display = "none";

    gameOverScreenNode.style.display = "flex";
  }

  start() {
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
      console.log("juego andando");
    }, Math.round(1000 / 60));
  }
}
