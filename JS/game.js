class Game {
  constructor() {
    this.MrPotato = new MrPotato();
    //this.patata = new patata();
    this.patataArr = [];
   // this.brocoli = new brocoli();
    this.brocoliArr = [];
   // this.tomate = new tomate();
    this.tomateArr = [];

    //ids de intervalos

    this.gameIntervalId;
    this.patataIntervalId;
    this.brocoliIntervalId;
    this.tomateIntervalId;
  }

  //METODOS /ACCIONES

  //PATATA
  patataAparece() {
    let randomPosY = Math.floor(Math.random() * 600); // nos da el valor aleatorio de la salida en altura de las patatas

    let nuevaPatata = new patata(randomPosY); // este valor 0 viene determinado por el cambio en la class
    this.patataArr.push(nuevaPatata); //añadimos la patata

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
        //al eliminar elementos del juego debo de considerar dos cosas: 1 debo eliminar el objeto ()o eliminarlo del array.
        this.patataArr.splice(index, 1); //remueve ese elemento del array
        //2. Debo eliminar el nodo del DOM img
        cadaPatata.node.remove();
      }
    });
  }


  //BROCOLI

  brocoliAparece() {
    let randomPosY = Math.floor(Math.random() * 600); // nos da el valor aleatorio de la salida en altura del brocoli

    let nuevaBrocoli = new brocoli(randomPosY); // este valor 0 viene determinado por el cambio en la class
    this.brocoliArr.push(nuevaBrocoli); //añadimos el brocoli
    console.log("brocoli");
  }

  iniciarFrecuenciaDeBrocoli() {
    this.brocoliIntervalId = setInterval(() => {
      this.brocoliAparece();
    }, 5000);
  }
  //efecto de que el brocoli desaparece
  eliminarBrocoliAlSalirDeLaPantalla() {
    this.brocoliArr.forEach((cadaBrocoli, index) => {
      if (cadaBrocoli.x + cadaBrocoli.w < 0) {
        //al eliminar elementos del juego debo de considerar dos cosas: 1 debo eliminar el objeto ()o eliminarlo del array.
        this.brocoliArr.splice(index, 1); //remueve ese elemento del array
        //2. Debo eliminar el nodo del DOM img
        cadaBrocoli.node.remove();
      }
    });
  }

  //TOMATE

  tomateAparece() {
    let randomPosY = Math.floor(Math.random() * 600); // nos da el valor aleatorio de la salida en altura de las patatas

    //las tomates van a aparecer de 2 en 2/
    let nuevaTomate1 = new tomate(randomPosY); // este valor 0 viene determinado por el cambio en la class
    this.tomateArr.push(nuevaTomate1); //añadimos el tomate
    console.log("tomate");
  }

  iniciarFrecuenciaDeTomate() {
    this.tomateIntervalId = setInterval(() => {
      this.tomateAparece();
    }, 4000);
  }
  //efecto de que el tomate desaparece
  eliminarTomateAlSalirDeLaPantalla() {
    this.tomateArr.forEach((cadaTomate, index) => {
      if (cadaTomate.x + cadaTomate.w < 0) {
        //al eliminar elementos del juego debo de considerar dos cosas: 1 debo eliminar el objeto ()o eliminarlo del array.
        this.tomateArr.splice(index, 1); //remueve ese elemento del array
        //2. Debo eliminar el nodo del DOM img
        cadaTomate.node.remove();
      }
    });
  }


  colisionMrPotatoPatata() {
    this.patataArr.forEach((cadaPatata) => {
      
      if (
        this.MrPotato.x < cadaPatata.x + cadaPatata.w &&
        this.MrPotato.x + this.MrPotato.w > cadaPatata.x &&
        this.MrPotato.y < cadaPatata.y + cadaPatata.h &&
        this.MrPotato.y + this.MrPotato.h > cadaPatata.y
      ) {
        // Collision detected!
        console.log("choque patata");
        this.gameOver(); //invocar función de game over
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
        // Collision detected!
        console.log("choque brocoli");
        this.gameOver(); //invocar función de game over
      }
    });
  }

colisionTomateMrPotato(){
   this.tomateArr.forEach((cadaTomate) => {
      
      if (
        this.MrPotato.x < cadaTomate.x + cadaTomate.w &&
        this.MrPotato.x + this.MrPotato.w > cadaBrocoli.x &&
        this.MrPotato.y < cadaTomate.y + cadaTomate.h &&
        this.MrPotato.y + this.MrPotato.h > cadaTomate.y
      ) {
        // Collision detected!
        console.log("choque tomate");
        this.gameOver(); //invocar función de game over
      }
    });
  }
}

//funcionPuntos(){}

/*
gameLoop() {
  //this.patata.automaticMovementEffectPatata();
  this.patataArr.forEach((cadaPatata) => {
    cadaPatata.automaticMovementEffectPatata();
  });
   //this.brocoli.automaticMovementEffectBrocoli();
    this.brocoliArr.forEach((cadaBrocoli) => {
      cadaBrocoli.automaticMovementEffectBrocoli();
    });
     // this.tomate.automaticMovementEffectTomate();
      this.tomateArr.forEach((cadaTomate) => {
        cadaTomate.automaticMovementEffectTomate();
  });
  this.colisionMrPotatoPatata()
  this.colisionMrPotatoBrocoli()
  this.colisionTomateMrPotato()
  }


  // GAME OVER
  gameOver() {
    //1. todos los intervalos deberian detenerse
    clearInterval(this.gameIntervalId);
    clearInterval(this.patataIntervalId);
    clearInterval(this.brocoliIntervalId);
    clearInterval(this.tomateIntervalId);
    //2. ocultar la pantalla de juego
    gameScreenNode.style.display = "none";

    //3. mostrar la pantalla final

    gameOverScreenNode.style.display = "flex";
  }



  start() {

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
      console.log("juego andando");
    }, Math.round(1000 / 60)); //60 fps
  }
*/
