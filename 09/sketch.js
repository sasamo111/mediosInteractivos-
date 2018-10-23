// Estado 0 = Introducción
// Estado 1 = Juego
// Estado 2 = Perdio

var estado = 0;
var fuente;
var musica;
var dur;
var analizador;
var nave;
var titulo;
var rocas = [];
var tituloX = 500
var naveX = 500;
var naveY = 230;
var navTamX = 200;
var navTamY = 100;
var posX;
var posY;
var texX = 600;


function preload() {
  musica = loadSound('Assets/1.mp3');
  nave = loadImage('Assets/Nave.png');
  titulo = loadImage('Assets/titulo.png');
  roca = loadImage('Assets/roca.png');

}

function setup() {
  
  //crea un canvas del tamano de la ventana
  
  createCanvas(windowWidth, windowHeight);
  
  tituloX = width + 200

  analizador = new p5.Amplitude();
  analizador.setInput(musica);

  musica.play();
  musica.rate(1);


  //pintar las rocas lunares.

  for (var i = 0; i < 30; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(0, height);

    rocas[i] = new meto(tempX, tempY, 1);
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

  // Estado 0: Presenatcion
  
  if (estado == 0) {

    //titulo "Spaceship"
    noTint();
    image(titulo, tituloX, windowHeight / 2 - 200, 400, 90);

    tituloX = tituloX - 1.5
    if (tituloX <= windowWidth / 2) {
      tituloX = windowWidth / 2;
    }

    //movimiento Nave 

    noTint();
    image(nave, naveX, windowHeight/2, 300, 150);
    naveX = naveX - 1.5;

        if (naveX <= windowWidth / 2) {
      naveX = windowWidth / 2;
    }
  }

  // Estado 1
  
  if (estado == 1) {

    if (tiempoC > 20 && tiempoC < 170) {

      //dibuja las rocas lunares

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].dibujarse();
        rocas[i].moverseY();
        
        rocas[i].y = random(-50, -10);
        rocas[i].x = random(0, windowWidth);
        
        if(rocas[i].y >= windowHeight + 50){
        
        rocas[i].y = random(-50, -10);
        rocas[i].x = random(0, windowWidth)  
        
        
        }

      }
    }

  }

  if (tiempoC > 15 && tiempoC < 24) {

    noTint();
    image(nave, naveX, naveY, navTamX, navTamY);
    naveY = naveY + 1
    navTamX = navTamX - 0.4
    navTamY = navTamY - 0.2

    if (naveY >= 390) {
      naveY = 390;
    }
    if (naveX >= 250) {
      naveX = 250;
    }
    if (navTamX <= 150) {
      navTamX = 150;
    }
    if (navTamY <= 75) {
      navTamY = 75;
    }


    //titulo Spaceship moviendose


    noTint();
    image(titulo, tituloX, 120, 260, 60);
    tituloX = tituloX - 1.5
  }

  if (tiempoC > 20 && tiempoC < 170) {
    if (mouseIsPressed) {

      //Efecto de volumen y paneo

      if (tiempoC > 20 && tiempoC < 120) {


        var vol = map(height - mouseY, height, 0, 0, 1);
        musica.setVolume(vol);

        var paneo = map(mouseX, 0, width, -1, 1);
        musica.pan(paneo);
      }

      //Fondo Negro

      noStroke();
      fill(0);
      rect(0, 0, width, height);

      //estrellas

      for (var i = 0; i < 10; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        stroke(255);
        strokeWeight(10);
        point(posX, posY);
      }
      stroke(0);
      point(250, 250);

      //Destellos de luz

      if (tiempoC > 91.2 && tiempoC < 170) {
        var nivel = analizador.getLevel();
        for (var i = 0; i < 5; i = i + 3) {
          var posX = random(0, width);
          var posY = random(0, height);

          noStroke();
          fill(255);
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
      image(nave, mouseX, mouseY, 150, 75);

      //Efecto de volumen y paneo

      if (tiempoC > 120 && tiempoC < 170) {

        var vol = map(height - mouseX, height, 0, 0, 1);
        musica.setVolume(vol);

        var paneo = map(mouseY, 0, width, -1, 1);
        musica.pan(paneo);

      }
    }

    if (tiempoC > 100 && tiempoC < 110) {

      //titulo WARNING

      fill(255);
      textSize(50);
      textAlign(CENTER);
      text("WARNING", texX, 250);
      texX = texX - 1
      if (texX <= 250) {
        texX = 250
      }
    }
  }

  if (tiempoC > 110 && tiempoC < 120) {

    //titulo WARNING

    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("WARNING", texX, 250);
    texX = texX - 1
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


  this.dibujarse = function() {

    imageMode(LEFT);
    image(roca, rocaX, rocaY, 50, 50);

  }

  this.moverseY = function() {

    this.y = this.y + random(1, 5);

  }

  this.moverseX = function() {

    this.x = this.x + random(4, 9);

  }

}

function mouseDragged(){
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
