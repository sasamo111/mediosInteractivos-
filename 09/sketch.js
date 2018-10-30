// Estado 0 = Introducción
// Estado 1 = Juego
// Estado 2 = Perdio
var q = 1
var colores;
var posXbot1 = 100;
var posYbot1 = 170;
var tamBot1 = 198;
var tamBot2 = 40;
var estado = 0;
var fuente;
var musica;
var dur;
var analizador;
var nave;
var titulo;
var rocas = [];
var bonus = [];
var tituloX = 0;
var naveX = 0;
var naveY = 230;
var navTamX = 150;
var navTamY = 75;
var posX;
var posY;
var texX = 300;


function preload() {

  musica = loadSound('Assets/1.mp3');
  cancion = loadSound('Assets/2.mp3');
  evil = loadSound('Assets/evil.mp3');
  nave = loadImage('Assets/Nave.png');
  logo = loadImage('Assets/logo.png');
  titulo = loadImage('Assets/titulo.png');
  roca = loadImage('Assets/roca.png');

}

function setup() {

  //crea un canvas del tamano de la ventana

  createCanvas(windowWidth, windowHeight);

  tituloX = width + 200
  naveX = width + 200

  analizador = new p5.Amplitude();
  analizador.setInput(musica);

  musica.loop();
  musica.rate(1);

  score = 0


  //pintar las rocas lunares.

  for (var i = 0; i < 10; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(-1000, -10);

    rocas[i] = new meto(tempX, tempY, 1);
  }

  //Bonus

  for (var i2 = 0; i2 < 1; i2 = i2 + 1) {
    var tempX = random(0, width);
    var tempY = random(-1000, -10);

    bonus[i2] = new bon(tempX, tempY, 1);
  }
}

function draw() {
  background(0);


  dur = musica.duration();
  tiempoC = musica.currentTime();

  imageMode(CENTER);


  //estrellas

  for (var i = 0; i < 10; i = i + 3) {
    var posX = random(0, width);
    var posY = random(0, height);

    stroke(255);
    strokeWeight(10);
    point(posX, posY);
  }

  // Estado 0: Presentación

  if (estado == 0) {

    //titulo "Spaceship"
    noTint();
    image(titulo, tituloX, height / 2 - 200, 400, 90);

    tituloX = tituloX - 1.5
    if (tituloX <= width / 2) {
      tituloX = width / 2;
    }

    if (frameCount >= 410) {

      //titulo "Toca para jugar"

      strokeWeight(1);
      fill(255);
      textSize(30);
      textFont('Audiowide');
      textAlign(CENTER);
      text("Toca para jugar", width / 2, height / 2 + 200);

    }

    //movimiento Nave 

    noTint();
    image(nave, naveX, height / 2, 300, 150);
    naveX = naveX - 1.5;

    if (naveX <= width / 2) {
      naveX = width / 2;
    }
  }

  // Estado 1: Jugar
  else if (estado == 1) {
    
    rojo = random(0,255);
    verde = random(0,255);
    azul = random(0,255);
  
    //Destellos de luz

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();
      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 650, nivel * 650);
        ellipse(posX, posY, nivel * 350, nivel * 350);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 650, nivel * 650);
        ellipse(posX, posY, nivel * 350, nivel * 350);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 250, nivel * 250);

      }
    }

    //Nave para controlar 

    noTint();
    imageMode(CENTER);
    image(nave, mouseX, mouseY, navTamX, navTamY);

    //Efecto de volumen y paneo

    var vol = map(height - mouseY, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(mouseX, 0, width, -1, 1);
    musica.pan(paneo);

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);

    //dibuja las rocas lunares
  

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseY();
      
      if(score % 100 == 0 && score >= 100){
    
    rocas[i].vel = rocas[i].vel + 0.2
    //rocas.push(new meto());
      
    } 

      if (rocas[i].y >= height + 50) {

        rocas[i].y = random(-300, -50);
        rocas[i].x = random(0, width)

        score = score + 1
      }

      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 3;
      }
    }
    
    //dibuja los bonus
    
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {
      bonus[i2].dibujarse();
      bonus[i2].moverseY();

      if (bonus[i2].y2 >= height + 50) {

        bonus[i2].y2 = random(-1000, -900);
        bonus[i2].x2 = random(0, width)
      }

      if (dist(bonus[i2].x2, bonus[i2].y2, mouseX, mouseY) < 50) {

        score = score + 30;

        bonus[i2].y2 = random(-1000, -900);
        bonus[i2].x2 = random(0, width)

      }
    }
  }

  //Perdiste
  
  else if (estado == 3) {
    
    //musica.pause();
    
    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:",width / 2 - 25 , height / 2 + 50 );
    textAlign(LEFT);
    text((score), width / 2 + 35, height / 2 + 50);


    //titulo "GAME OVER"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2 - 200);
    textSize(30);
    text("Reintentar", width / 2, height / 2 + 200);
    

    strokeWeight(3);
    stroke(255);
    noFill();
    rect(width/2 - posXbot1, height/2 + posYbot1, tamBot1, tamBot2);

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(-500, -50);
      rocas[i].x = random(0, width);
      rocas[i].vel = random(6,7);
    }
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1)  {
     
     bonus[i2].y2 = random(-1000, -900);
     bonus[i2].x2 = random(0, width) 
    }
  }
}


function nav(mouseX, mouseY) {

  this.x2 = mouseY
  this.y2 = mouseY

  this.dibujarse = function() {

    noTint();
    imageMode(CENTER);
    image(nave, this.x2, this.y2, 150, 75);

  }

}


function meto(rocaX, rocaY) {

  this.x = rocaX
  this.y = rocaY
  this.vel = random(6,7);


  this.dibujarse = function() {

    imageMode(CENTER);
    image(roca, this.x, this.y, 50, 50);

  }

  this.moverseY = function() {

    this.y = this.y + this.vel;

  }

  this.moverseX = function() {

    this.x = this.x + this.vel;

  }

}


function bon(bonusX, bonusY) {

  this.x2 = bonusX
  this.y2 = bonusY
  this.vivo = true


  this.dibujarse = function() {



    imageMode(CENTER);
    image(logo, this.x2, this.y2, 50, 55);

  }

  this.moverseY = function() {

    this.y2 = this.y2 + random(1, 2);

    if (this.y2 >= height / 2 - 200) {

      this.y2 = this.y2 + random(9, 10)

    }
  }
}
//esta funcion se activa cuando el dispositivo reconoce que se movio un toque en la pantalla
function touchMoved() {

  for (var i2 = 0; i2 < touches.length; i2++) {

    //revisa si se estaba tocando la bola
    //se usa touches[0] porque se asume que solo hay un toque a la vez
    if (dist(touches[i2].x, touches[i2].y, x, y) < tam / 2) {

      //actualiza la posicion de la elipse con la posicion del toque
      x = touches[i2].x;
      y = touches[i2].y;
    }
  }
  return false;
}

function mouseReleased() {
  
  if (estado == 0) {
    estado = 1;
  } else if (estado == 3) {
    if (mouseX > width/2 - posXbot1 && mouseX < width/2 -  posXbot1 + tamBot1 &&
    mouseY > height/2 + posYbot1 && mouseY < height/2 + posYbot1 + tamBot2) {
   
   estado = 1;
   score = 0;
   musica.playMode('restart');
   musica.play();
  }
  
}
}

function mouseDragged() {
  //prevent default

  return false;

}

function touchMoved() {

  // prevent default
  return false;
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount

  //uncomment to block page scrolling
  return false;
}
