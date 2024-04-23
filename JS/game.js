class Game {
  constructor() {
    this.MrPotato = new MrPotato();
    this.patata = new patata();
    this.patataArr = [];

    //ids de intervalos

    this.gameIntervalId;
    this.patataIntervalId;
  }

  //METODOS /ACCIONES

  patataAparece() {
    let randomPosY = Math.floor(Math.random() * -200); // nos da el valor aleatorio de la salida en altura de las tuberias
    let distanciaEntrePatatas = 350;

    /*las patatas van a aparecer de 2 en 2*/
    let nuevaPatata1 = new patata(); // este valor 0 viene determinado por el cambio en la class
    this.patataArr.push(nuevaPatata1); //añadimos la patata

    /* let nuevapatata2 = new patata(
        "abajo",
        randomPosY + distanciaEntrePatatas
      ); //valor aleatorio de la salida en altura de las tuberias*/

    //this.patataArr.push(nuevapatata2);

    console.log("hola");
  }

  iniciarfrecuenciaDePatata() {
    this.patataIntervalId = setInterval(() => {
      this.patataAparece();
    }, 2000);
  }
  iniciarfrecuenciaDeTomate() {
    this.tomateIntervalId = setInterval(() => {
      this.patataAparece();
    }, 3000);
  }
  iniciarfrecuenciaDeBrocoli() {
    this.tomateIntervalId = setInterval(() => {
      this.brocoliAparece();
    }, 4000);
  }


  //efecto de que las patatas desaparecen
  eliminarPatatasAlSalirDeLaPantalla() {
    this.patataArr.forEach((cadaPatata, index) => {
      if (cadaPatata.x + cadaPatata.w < 0) {
        //al eliminar ellemntos del juego debo de considerar dos cosas: 1 debo eliminar el objeto ()o eliminarlo del array.
        this.patataArr.splice(index, 1); //remueve ese elemento del array
        //2. Debo eliminar el nodo del DOM img
        cadaPatata.node.remove();
      }
    });
  }

  gameLoop() {
    //este espacio es lo que ocurre 60 pfs
    // le decimos al codigo que deve continuamente mover el pollito hacia abajo (gravityeffect)
    //this.pollito.gravityEffect();
    this.patata.automaticMovementEffect();
    this.patataArr.forEach((cadaPatata) => {
      cadaPatata.automaticMovementEffect();
    });

    // this.eliminarTuberiasAlSalirDeLaPantalla();
    // this.colisionPollitoTuberias();
  }

  start() {
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
      console.log("juego andando");
    }, Math.round(1000 / 60)); //60 fps
  }
}
