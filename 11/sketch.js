// Estado 0 = Introducción
// Estado 1 = nivel 1
// Estado 2 = Perdio
// Estado 3 = Nivel 2
var numRocas = 12
var colores;
var posXbot1 = 100;
var posYbot1 = 170;
var tamBot1 = 198;
var tamBot2 = 40;
var posYbot2 = 240;
var posYbot3 = 320;
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
var rX;
var rY;
var dir = 1
var dirX = 1
var texX = 300;


function preload() {

  musica = loadSound('Assets/1.mp3');
  cancion = loadSound('Assets/2.mp3');
  evil = loadSound('Assets/evil.mp3');
  nave = loadImage('Assets/Nave.png');
  nave2 = loadImage('Assets/nave2.png');
  logo = loadImage('Assets/logo.png');
  titulo = loadImage('Assets/titulo.png');
  roca = loadImage('Assets/roca.png');

}

function setup() {

  //crea un canvas del tamano de la ventana

  createCanvas(windowWidth, windowHeight);

  //aca se define la posición inicial de la elipse
  x = width / 2; //posicion en x
  y = height - 100; //posicion en y

  x2 = width / 2; //posicion en x
  y2 = 100; //posicion en y


  rX = width / 2
  rY = height / 2

  mX = random(5, 7);
  mY = random(8, 10);


  tituloX = width + 200
  naveX = width + 200

  analizador = new p5.Amplitude();
  analizador.setInput(musica);

  musica.loop();
  musica.rate(1);

  score = 0

  //pintar las rocas lunares.

  for (var i = 0; i < numRocas; i = i + 1) {
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
    image(titulo, tituloX, height / 2 - 220, 465, 105);

    tituloX = tituloX - 1.5
    if (tituloX <= width / 2) {
      tituloX = width / 2;
    }

    if (frameCount >= 410) {

      //titulo "Jugar por niveles "

      strokeWeight(1);
      fill(255);
      textSize(30);
      textFont('Audiowide');
      textAlign(CENTER);
      text("Modo Niveles", width / 2, height / 2 + 200);
      text("Modo Infinito", width / 2, height / 2 + 270);
      text("Multijugador", width / 2, height / 2 + 340);

    }

    //movimiento Nave 

    noTint();
    image(nave, naveX, height / 2, 300, 150);
    naveX = naveX - 1.5;

    if (naveX <= width / 2) {
      naveX = width / 2;
    }
  }

  // Estado 1: Nivel 1
  else if (estado == 1) {

    numRocas = 12

    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de luz

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();
      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Nave para controlar 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Efecto de volumen y paneo

    var vol = map(height - y, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(x, 0, width, -1, 1);
    musica.pan(paneo);
    
    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);
    textSize(20);
    text("Objetivo: 250", 35, 83);


    //dibuja las rocas lunares.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseY();

      if (rocas[i].y >= height + 50) {

        rocas[i].y = random(-300, -50);
        rocas[i].x = random(0, width)

        score = score + 1
      }

      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 3;
      }
    }

    //Cada 100 puntaje suma aumenta la velocidad de las rocas. 
    
    if (score % 100 == 0 && score >= 100) {

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].vel = rocas[i].vel + 0.2;
        score = score + 1;
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
     
    //Objetivo al cumplir y cambio de estado.
    
    if (score >= 250) {
      estado = 2

    }
  } else if (estado == 2) {
    
    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", width / 2 - 25, height / 2 + 50);
    textAlign(LEFT);
    text((score), width / 2 + 35, height / 2 + 50);


    //titulo "WIN"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("WIN", width / 2, height / 2 - 200);
    textSize(30);
    text("Nivel 2", width / 2, height / 2 + 200);

    strokeWeight(3);
    stroke(255);
    noFill();
    rect(width / 2 - posXbot1, height / 2 + posYbot1, tamBot1, tamBot2);

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(0, height);
      rocas[i].x = random(-500, -50);
      rocas[i].vel = random(4, 6);
    }
    
    //Dibuja los bonus.
    
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {

      bonus[i2].y2 = random(0, height);
      bonus[i2].x2 = random(-1000, -900)
    }
  }


  // Estado 4: Nivel 2
  else if (estado == 4) {

    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de luz.

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();

      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Nave para controlar. 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Efecto de volumen y paneo.

    var vol = map(height - y, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(x, 0, width, -1, 1);
    musica.pan(paneo);

    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);
    textSize(20);
    text("Objetivo: 750", 35, 83);

    //dibuja las rocas lunares.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseX();
      
      //Comando para hacer correr el contador el puntaje.

      if (rocas[i].x >= width + 50) {

        rocas[i].y = random(0, height);
        rocas[i].x = random(-300, -50);

        score = score + 1
      }

      //Comando para perder y cambiar de estado.
      
      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 3;
      }
    }
    
    //Cada 150 aumenta la velocidad.

    if (score % 150 == 0 && score >= 150) {

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].vel = rocas[i].vel + 0.2;
        score = score + 1;
      }
    }

    //dibuja los bonus.

    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {
      bonus[i2].dibujarse();
      bonus[i2].moverseX();

      if (bonus[i2].y2 >= width + 50) {

        bonus[i2].y2 = random(0, height);
        bonus[i2].x2 = random(-1000, -900)
      }

      if (dist(bonus[i2].x2, bonus[i2].y2, mouseX, mouseY) < 50) {

        score = score + 30;

        bonus[i2].y2 = random(0, height);
        bonus[i2].x2 = random(-1000, -900)

      }
    }
    
    //Objetivo al cumplir y cambio de estado.

    if (score >= 750) {
      estado = 5

    }

  } else if (estado == 5) {

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", width / 2 - 25, height / 2 + 50);
    textAlign(LEFT);
    text((score), width / 2 + 35, height / 2 + 50);


    //titulo "WIN"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("WIN", width / 2, height / 2 - 200);
    textSize(30);
    text("Nivel 3", width / 2, height / 2 + 200);

    strokeWeight(3);
    stroke(255);
    noFill();
    rect(width / 2 - posXbot1, height / 2 + posYbot1, tamBot1, tamBot2);
    
    //REdibuja las rocas y bonus cuadno ya no esten en la pantalla.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(0, height);
      rocas[i].x = random(width + 500, width + 50);
      rocas[i].vel = random(4, 6);
    }
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {

      bonus[i2].y2 = random(0, height);
      bonus[i2].x2 = random(width + 1000, width + 900)
    }
  }


  // Estado 6: Nivel 3
  else if (estado == 6) {

    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de luz

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();

      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Nave para controlar 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Efecto de volumen y paneo

    var vol = map(height - y, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(x, 0, width, -1, 1);
    musica.pan(paneo);
    
    //Titulos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);
    textSize(20);
    text("Objetivo: 1000", 35, 83);

    //dibuja las rocas lunares

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseX2();

      if (rocas[i].x <= -50) {

        rocas[i].y = random(0, height);
        rocas[i].x = random(width + 300, width + 50);

        score = score + 1
      }

      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 3;
      }
    }
    
    //Cada 150 aumenta la velocidad de las rocas.

    if (score % 150 == 0 && score >= 150) {

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].vel = rocas[i].vel + 0.2;
        score = score + 1;
      }
    }

    //dibuja los bonus

    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {
      bonus[i2].dibujarse();
      bonus[i2].moverseX2();

      if (bonus[i2].y2 >= width + 50) {

        bonus[i2].y2 = random(0, height);
        bonus[i2].x2 = random(width + 1000, width + 900)
      }
      
      //Distancia de los bonus para activar su funcion.

      if (dist(bonus[i2].x2, bonus[i2].y2, mouseX, mouseY) < 50) {

        score = score + 30;

        bonus[i2].y2 = random(0, height);
        bonus[i2].x2 = random(width + 1000, width + 900)

      }
    }
    
    //Objetivo al cumplir y cambio de estado.

    if (score >= 1000) {

      estado = 7

    }

  } else if (estado == 7) {
    
    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", width / 2 - 25, height / 2 + 50);
    textAlign(LEFT);
    text((score), width / 2 + 35, height / 2 + 50);


    //titulo "WIN"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("WIN", width / 2, height / 2 - 200);
    textSize(30);
    text("Nivel 4", width / 2, height / 2 + 200);

    strokeWeight(3);
    stroke(255);
    noFill();
    rect(width / 2 - posXbot1, height / 2 + posYbot1, tamBot1, tamBot2);
    
    //Redibuja las rocas y bonus cuando ya no aparezcan en la pantalla

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(0, height);
      rocas[i].x = random(width + 500, width + 50);
      rocas[i].vel = random(4, 6);
    }

    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {

      bonus[i2].y2 = random(0, height);
      bonus[i2].x2 = random(width + 1000, width + 900)
    }
  }

  // Estado 8: Nivel 4.
  
  else if (estado == 8) {

    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de luz.

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();
      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Nave para controlar. 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Efecto de volumen y paneo.

    var vol = map(height - y, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(x, 0, width, -1, 1);
    musica.pan(paneo);

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);
    textSize(20);
    text("Objetivo: Infinito", 35, 83);

    //dibuja las rocas lunares.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseY2();

      if (rocas[i].y <= -50) {

        rocas[i].y = random(height + 300, height + 50);
        rocas[i].x = random(0, width);

        score = score + 1
      }

      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 3;
      }
    }
    
    //Cada 150 aumenta la velocidad.

    if (score % 150 == 0 && score >= 150) {

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].vel = rocas[i].vel + 0.2;
        score = score + 1;
      }
    }

    //dibuja los bonus

    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {
      bonus[i2].dibujarse();
      bonus[i2].moverseY2();

      if (bonus[i2].y2 <= -50) {

        bonus[i2].y2 = random(height + 1000, height + 900);
        bonus[i2].x2 = random(0, width)
      }
       
      //Distancia entre el bonus y la nave para activar el bonus.
      
      if (dist(bonus[i2].x2, bonus[i2].y2, mouseX, mouseY) < 50) {

        score = score + 30;

        bonus[i2].y2 = random(height + 1000, height + 900);
        bonus[i2].x2 = random(0, width)

      }
    }

  }

  // Estado 9: Modo Infinito.
  else if (estado == 9) {


    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de lu.z

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();
      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var posY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Nave para controlar. 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Efecto de volumen y paneo.

    var vol = map(height - y, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(x, 0, width, -1, 1);
    musica.pan(paneo);
    
    //Texto.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", 65, 50);
    textAlign(LEFT);
    text((score), 123, 50);


    //dibuja las rocas lunares.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].dibujarse();
      rocas[i].moverseY();

      if (rocas[i].y >= height + 50) {

        rocas[i].y = random(-300, -50);
        rocas[i].x = random(0, width)

        score = score + 1
      }

      //Distancia en la cual hace contacto la roca con la nave para perder.
      //y cambiar de estado.
      if (dist(rocas[i].x, rocas[i].y, mouseX, mouseY) < 50) {
        estado = 10;
      }
    }

    //Comando para que cada 150 aumente la velocidad de las rocas. 
    
    if (score % 50 == 0 && score >= 50) {

      for (var i = 0; i < rocas.length; i = i + 1) {
        rocas[i].vel = rocas[i].vel + 0.2;
        score = score + 1;
      }
    }
    
    //dibuja los bonus.

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

  // Estado 11: Multijugador.
  else if (estado == 11) {


    rojo = random(0, 255);
    verde = random(0, 255);
    azul = random(0, 255);

    //Destellos de luz.

    if (tiempoC > 91.2 && tiempoC < 170) {
      var nivel = analizador.getLevel();
      for (var i = 0; i < 5; i = i + 3) {
        var posX = random(0, width);
        var estrellaY = random(0, height);

        noStroke();
        fill(rojo, verde, azul);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 150);
        ellipse(posX, posY, nivel * 750, nivel * 750);
        ellipse(posX, posY, nivel * 450, nivel * 450);
        fill(255, 255, 255, 100);
        ellipse(posX, posY, nivel * 450, nivel * 450);

      }
    }

    //Roca para jugar. 

    noTint();
    imageMode(CENTER);
    image(roca, rX, rY, 50, 50);
    
    //Interaccion de la roca, para rebotar.

    rY = rY + mY * dir;
    rY = rY + 1 * dir;
    rX = rX + mX * dirX;

    if (dist(rX, rY, x, y) < navTamX / 2) {
      dir = -1;
      dirX = random(-1, 1);
      
    }

    if (dist(rX, rY, x2, y2) < navTamX / 2) {
      dir = 1;
      dirX = random(-1, 1);
    }

    if (rX > width - 25) {

      dirX = -1;

    }

    if (rX < 0) {

      dirX = 1;

    }

    if (rY > height) {

      estado = 12;

    }

    if (rY < 0) {

      estado = 13;

    }


    //Nave 1 para controlar 

    noTint();
    imageMode(CENTER);
    image(nave, x, y, navTamX, navTamY);

    //Nave 2 para controlar 

    noTint();
    imageMode(CENTER);
    image(nave2, x2, y2, navTamX, navTamY);


  }


  //Perdiste
  else if (estado == 3) {
    
    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", width / 2 - 25, height / 2 + 50);
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
    text("Modo Infinito", width / 2, height / 2 + 270);
    text("Inicio", width / 2, height / 2 + 340);
    
    //Establece las configuraciones iniciales.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(-500, -50);
      rocas[i].x = random(0, width);
      rocas[i].vel = random(4, 6);
    }
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {

      bonus[i2].y2 = random(-1000, -900);
      bonus[i2].x2 = random(0, width)
    }
  }

  //Perdiste
  else if (estado == 10) {

    numRocas = 10
    
    //Textos.

    textFont('Audiowide');
    strokeWeight(1);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Score:", width / 2 - 25, height / 2 + 50);
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
    text("Modo Niveles", width / 2, height / 2 + 270);
    text("Inicio", width / 2, height / 2 + 340);
    
    //Establece las configuraciones iniciales.

    for (var i = 0; i < rocas.length; i = i + 1) {
      rocas[i].y = random(-500, -50);
      rocas[i].x = random(0, width);
      rocas[i].vel = random(4, 6);
    }
    for (var i2 = 0; i2 < bonus.length; i2 = i2 + 1) {

      bonus[i2].y2 = random(-1000, -900);
      bonus[i2].x2 = random(0, width)
    }
  }

  //Perdiste
  else if (estado == 12) {

    //titulo "Ganador: jugador 1"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("Ganador:", width / 2, height / 2 - 200);
    textSize(50);
    text("Jugador 1", width / 2, height / 2 - 100);
    textSize(30);
    text("Volver a jugar", width / 2, height / 2 + 200);
    text("Inicio", width / 2, height / 2 + 270);

  }

  //Perdiste
  else if (estado == 13) {

    //titulo "Ganador: jugador 2"

    strokeWeight(1);
    fill(255);
    textSize(80);
    textFont('Audiowide');
    textAlign(CENTER);
    text("Ganador:", width / 2, height / 2 - 200);
    textSize(50);
    text("Jugador 2", width / 2, height / 2 - 100);
    textSize(30);
    text("Volver a jugar", width / 2, height / 2 + 200);
    text("Inicio", width / 2, height / 2 + 270);

  }
}


function nav(mouseX, mouseY) {

  this.x2 = mouseX;
  this.y2 = mouseY;

  this.dibujarse = function() {

    noTint();
    imageMode(CENTER);
    image(nave, this.x2, this.y2, 150, 75);

  }

}


function meto(rocaX, rocaY) {

  this.x = rocaX
  this.y = rocaY
  this.vel = random(4, 6);
  this.vel2 = random(6, 8);
  this.vel3 = random(7, 9);
  this.vel4 = random(8, 10);
  this.move = true


  this.dibujarse = function() {

    imageMode(CENTER);
    image(roca, this.x, this.y, 50, 50);

  }

  this.moverseY = function() {

    this.y = this.y + this.vel;
  }

  this.moverseY2 = function() {

    this.y = this.y - this.vel4;
  }

  this.moverseX = function() {


    this.x = this.x + this.vel2;

  }

  this.moverseX2 = function() {


    this.x = this.x - this.vel3;

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

  this.moverseY2 = function() {

    this.y2 = this.y2 - random(1, 2);

    if (this.y2 <= height / 2 + 200) {

      this.y2 = this.y2 - random(9, 10)

    }
  }

  this.moverseX = function() {

    this.x2 = this.x2 + random(1, 2);

    if (this.x2 >= width / 2 - 200) {

      this.x2 = this.x2 + random(9, 10)

    }
  }


  this.moverseX2 = function() {

    this.x2 = this.x2 - random(1, 2);

    if (this.x2 <= width / 2 + 200) {

      this.x2 = this.x2 - random(9, 10)

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
  
  //Botones para cambiar de estados.

  if (estado == 0) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 1;

    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot2 && mouseY < height / 2 + posYbot2 + tamBot2) {

      estado = 9;

    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot3 && mouseY < height / 2 + posYbot3 + tamBot2) {

      estado = 11;

    }

  } else if (estado == 12) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 11;
      
      //aca se define la posición inicial de la elipse
  x = width / 2; //posicion en x
  y = height - 100; //posicion en y

  x2 = width / 2; //posicion en x
  y2 = 100; //posicion en y

      rX = width / 2
      rY = height / 2


    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot2 && mouseY < height / 2 + posYbot2 + tamBot2) {

      estado = 0;
      
      //aca se define la posición inicial de la elipse
  x = width / 2; //posicion en x
  y = height - 100; //posicion en y

  x2 = width / 2; //posicion en x
  y2 = 100; //posicion en y
      
      rX = width / 2;
      rY = height / 2;

    }

  } else if (estado == 13) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 11;
      
      //aca se define la posición inicial de la elipse
  x = width / 2; //posicion en x
  y = height - 100; //posicion en y

  x2 = width / 2; //posicion en x
  y2 = 100; //posicion en y
      
      rX = width / 2;
      rY = height / 2;


    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot2 && mouseY < height / 2 + posYbot2 + tamBot2) {

      estado = 0;
      
      //aca se define la posición inicial de la elipse
  x = width / 2; //posicion en x
  y = height - 100; //posicion en y

  x2 = width / 2; //posicion en x
  y2 = 100; //posicion en y
      
      rX = width / 2;
      rY = height / 2;

    }

  } else if (estado == 3) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 1;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();
    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot2 && mouseY < height / 2 + posYbot2 + tamBot2) {

      estado = 9;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();

    }
    
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot3 && mouseY < height / 2 + posYbot3 + tamBot2) {

      estado = 0;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();

    }

  } else if (estado == 10) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 9;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();
    }

    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot2 && mouseY < height / 2 + posYbot2 + tamBot2) {

      estado = 1;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();

    }
    
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot3 && mouseY < height / 2 + posYbot3 + tamBot2) {

      estado = 0;
      numRocas = 12
      score = 0;
      musica.playMode('restart');
      musica.play();

    }

  } else if (estado == 2) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 4;
      musica.playMode('restart');
      musica.play();
    }

  } else if (estado == 5) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 6;
      musica.playMode('restart');
      musica.play();
    }

  } else if (estado == 7) {
    if (mouseX > width / 2 - posXbot1 && mouseX < width / 2 - posXbot1 + tamBot1 &&
      mouseY > height / 2 + posYbot1 && mouseY < height / 2 + posYbot1 + tamBot2) {

      estado = 8;
      musica.playMode('restart');
      musica.play();
    }

  }
}

function mouseDragged() {
  //prevent default

  //revisa si la posición del mouse es cercana a la posicion de la ellipse
  if (dist(mouseX, mouseY, x, y) < navTamX / 2) {

    //actualiza la posicion de la elipse con la posición del mouse
    x = mouseX;
    y = mouseY;
  }

  if (dist(mouseX, mouseY, x2, y2) < navTamX / 2) {

    //actualiza la posicion de la elipse con la posición del mouse
    x2 = mouseX;
    y2 = mouseY;
    
    return false;
  }



}

function touchMoved() {

  for (var t = 0; t < touches.length; t++) {
    // prevent default
    //return false;
    //revisa si la posición del mouse es cercana a la posicion de la ellipse
    if (dist(touches[t].x, touches[t].y, x, y) < navTamX / 2) {

      //actualiza la posicion de la elipse con la posición del mouse
      x = touches[t].x;
      y = touches[t].y;

    }

    if (dist(touches[t].x, touches[t].y, x2, y2) < navTamX / 2) {

      //actualiza la posicion de la elipse con la posición del mouse
      x2 = touches[t].x;
      y2 = touches[t].y;
    }
  }

}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount

  //uncomment to block page scrolling
  return false;

}
