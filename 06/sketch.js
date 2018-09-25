var fuente;
var musica;
var dur;
var analizador;
var nave;
var titulo;
var roca;
var rocaY = -10;
var rocaY2 = -10;
var rocaY3 = -10;
var rocaY4 = -10;
var rocaY5 = -10;
var rocaY6 = -10;
var rocaY7 = -10;
var rocaY8 = -10;
var rocaY9 = -10;
var rocaY10 = -10;
var rocaY11 = -10;
var rocaY12 = -10;
var rocaY13 = -10;
var rocaY14 = -10;
var rocaY15 = -10;
var rocaY16 = -10;
var rocaY17 = -10;
var rocaY18 = -10;
var rocaY19 = -10;
var rocaY20 = -10;
var rocaY21 = -10;
var rocaY22 = -10;
var rocaY23 = -10;
var rocaY24 = -10;
var rocaY25 = -10;
var rocaY26 = -10;
var rocaY27 = -10;
var rocaY28 = -10;
var rocaY29 = -10;
var rocaY30 = -10;
var rocaY31 = -10;
var rocaY32 = -10;
var rocaY33 = -10;
var rocaY34 = -10;
var rocaY35 = -10;
var rocaY36 = -10;
var rocaY37 = -10;
var rocaY38 = -10;
var rocaY39 = -10;
var rocaY40 = -10;
var rocaY41 = -10;
var rocaY42 = -10;
var rocaY43 = -10;
var rocaY44 = -10;
var rocaY45 = -10;
var rocaY46 = -10;
var rocaX = -10;
var rocaX2 = -10;
var rocaX3 = -10;
var rocaX4 = -10;
var rocaX5 = -10;
var rocaX6 = -10;
var rocaX7 = -10;
var rocaX8 = -10;
var rocaX9 = -10;
var rocaX10 = -10;
var rocaX11 = -10;
var rocaX12 = -10;
var rocaX13 = -10;
var rocaX14 = -10;
var rocaX15 = -10;
var rocaX16 = -10;
var rocaX17 = -10;
var rocaX18 = -10;
var rocaX19 = -10;
var rocaX20 = -10;
var rocaX21 = -10;
var rocaX22 = -10;
var rocaX23 = -10;
var rocaX24 = -10;
var rocaX25 = -10;
var rocaX26 = -10;
var rocaX27 = -10;
var rocaX28 = -10;
var rocaX29 = -10;
var rocaX30 = -10;
var rocaX31 = -10;
var rocaX32 = -10;
var rocaX33 = -10;
var rocaX34 = -10;
var rocaX35 = -10;
var tituloX = 500;
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
  createCanvas(500, 500);

  analizador = new p5.Amplitude();
  analizador.setInput(musica);

  musica.play();
  musica.rate(1);
}

function draw() {
  background(220);


  dur = musica.duration();
  tiempoC = musica.currentTime();

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

  if (tiempoC > 0 && tiempoC < 15) {

    //titulo spaceships

    noTint();
    image(titulo, tituloX, 120, 260, 60);
    tituloX = tituloX - 1.5
    if (tituloX <= 130) {
      tituloX = 130;
    }
    if (tiempoC > (5)) {

      //movimiento Nave 

      noTint();
      image(nave, naveX, 230, 200, 100);
      naveX = naveX - 1.5;

      if (naveX <= 160) {
        naveX = 160;
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

  if (tiempoC > 20 && tiempoC < 170){
  if (mouseIsPressed ) {
    
    //Efecto de volumen y paneo
    
    if (tiempoC > 20 && tiempoC < 120){

    
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
    
    if (tiempoC > 120 && tiempoC < 170){
    
      var vol = map(height - mouseX, height, 0, 0, 1);
    musica.setVolume(vol);

    var paneo = map(mouseX, 0, width, -1, 1);
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
  
  //Rocas espaciles Verticales

  imageMode(LEFT);

  if (tiempoC > 20 && tiempoC < 170) {

    image(roca, 100, rocaY, 50, 50);
    rocaY = rocaY + 1.5;
  }

  if (tiempoC > 24 && tiempoC < 170) {

    image(roca, 300, rocaY6, 50, 50);
    rocaY6 = rocaY6 + 4;
  }

  if (tiempoC > 27 && tiempoC < 170) {

    image(roca, 340, rocaY2, 50, 50);
    rocaY2 = rocaY2 + 1.5;
  }

  if (tiempoC > 29 && tiempoC < 170) {

    image(roca, 400, rocaY3, 50, 50);
    rocaY3 = rocaY3 + 5;
  }

  if (tiempoC > 30 && tiempoC < 170) {

    image(roca, 120, rocaY4, 50, 50);
    rocaY4 = rocaY4 + 1.5;
  }

  if (tiempoC > 32 && tiempoC < 170) {

    image(roca, 239, rocaY5, 50, 50);
    rocaY5 = rocaY5 + 1.5;
  }

  if (tiempoC > 33 && tiempoC < 170) {

    image(roca, 139, rocaY7, 50, 50);
    rocaY7 = rocaY7 + 3;
  }

  if (tiempoC > 35 && tiempoC < 170) {

    image(roca, 209, rocaY8, 50, 50);
    rocaY8 = rocaY8 + 1.5;
  }

  if (tiempoC > 36 && tiempoC < 170) {

    image(roca, 439, rocaY9, 50, 50);
    rocaY9 = rocaY9 + 1.5;
  }

  if (tiempoC > 38 && tiempoC < 170) {

    image(roca, 270, rocaY10, 50, 50);
    rocaY10 = rocaY10 + 1.5;
  }

  if (tiempoC > 40 && tiempoC < 170) {

    image(roca, 300, rocaY11, 50, 50);
    rocaY11 = rocaY11 + 4;
  }

  if (tiempoC > 41 && tiempoC < 170) {

    image(roca, 99, rocaY12, 50, 50);
    rocaY12 = rocaY12 + 2;
  }

  if (tiempoC > 43 && tiempoC < 170) {

    image(roca, 319, rocaY13, 50, 50);
    rocaY13 = rocaY13 + 3;
  }

  if (tiempoC > 45 && tiempoC < 170) {

    image(roca, 400, rocaY14, 50, 50);
    rocaY14 = rocaY14 + 1.5;
  }

  if (tiempoC > 46 && tiempoC < 170) {

    image(roca, 130, rocaY15, 50, 50);
    rocaY15 = rocaY15 + 2;
  }

  if (tiempoC > 48 && tiempoC < 170) {

    image(roca, 245, rocaY16, 50, 50);
    rocaY16 = rocaY16 + 1.5;
  }

  if (tiempoC > 50 && tiempoC < 170) {

    image(roca, 439, rocaY17, 50, 50);
    rocaY17 = rocaY17 + 5;
  }

  if (tiempoC > 51 && tiempoC < 170) {

    image(roca, 338, rocaY18, 50, 50);
    rocaY18 = rocaY18 + 3;
  }

  if (tiempoC > 53 && tiempoC < 170) {

    image(roca, 48, rocaY19, 50, 50);
    rocaY19 = rocaY19 + 2;
  }

  if (tiempoC > 55 && tiempoC < 170) {

    image(roca, 459, rocaY20, 50, 50);
    rocaY20 = rocaY20 + 1.5;
  }

  if (tiempoC > 56 && tiempoC < 170) {

    image(roca, 123, rocaY21, 50, 50);
    rocaY21 = rocaY21 + 6;
  }

  if (tiempoC > 58 && tiempoC < 170) {

    image(roca, 275, rocaY22, 50, 50);
    rocaY22 = rocaY22 + 4;
  }

  if (tiempoC > 60 && tiempoC < 170) {

    image(roca, 100, rocaY23, 50, 50);
    rocaY23 = rocaY23 + 1.5;
  }

  if (tiempoC > 61 && tiempoC < 170) {

    image(roca, 420, rocaY24, 50, 50);
    rocaY24 = rocaY24 + 2;
  }

  if (tiempoC > 63 && tiempoC < 170) {

    image(roca, 362, rocaY25, 50, 50);
    rocaY25 = rocaY25 + 3;
  }

  if (tiempoC > 65 && tiempoC < 170) {

    image(roca, 154, rocaY26, 50, 50);
    rocaY26 = rocaY26 + 4;
  }

  if (tiempoC > 67 && tiempoC < 170) {

    image(roca, 263, rocaY27, 50, 50);
    rocaY27 = rocaY27 + 2;
  }

  if (tiempoC > 69 && tiempoC < 170) {

    image(roca, 412, rocaY28, 50, 50);
    rocaY28 = rocaY28 + 3;
  }

  if (tiempoC > 70 && tiempoC < 170) {

    image(roca, 50, rocaY29, 50, 50);
    rocaY29 = rocaY29 + 1.5;
  }

  if (tiempoC > 72 && tiempoC < 170) {

    image(roca, 385, rocaY30, 50, 50);
    rocaY30 = rocaY30 + 5;
  }

  if (tiempoC > 74 && tiempoC < 170) {

    image(roca, 280, rocaY31, 50, 50);
    rocaY31 = rocaY31 + 1.5;
  }

  if (tiempoC > 75 && tiempoC < 170) {

    image(roca, 175, rocaY32, 50, 50);
    rocaY32 = rocaY32 + 3;
  }

  if (tiempoC > 77 && tiempoC < 170) {

    image(roca, 450, rocaY33, 50, 50);
    rocaY33 = rocaY33 + 5;
  }

  if (tiempoC > 78 && tiempoC < 170) {

    image(roca, 250, rocaY34, 50, 50);
    rocaY34 = rocaY34 + 3;
  }

  if (tiempoC > 79 && tiempoC < 170) {

    image(roca, 124, rocaY35, 50, 50);
    rocaY35 = rocaY35 + 2;
  }

  if (tiempoC > 80 && tiempoC < 170) {

    image(roca, 418, rocaY36, 50, 50);
    rocaY36 = rocaY36 + 3;
  }

  if (tiempoC > 81 && tiempoC < 170) {

    image(roca, 197, rocaY37, 50, 50);
    rocaY37 = rocaY37 + 3;
  }

  if (tiempoC > 82 && tiempoC < 170) {

    image(roca, 164, rocaY38, 50, 50);
    rocaY38 = rocaY38 + 2;
  }

  if (tiempoC > 83 && tiempoC < 170) {

    image(roca, 373, rocaY39, 50, 50);
    rocaY39 = rocaY39 + 1.5;
  }

  if (tiempoC > 84 && tiempoC < 170) {

    image(roca, 246, rocaY40, 50, 50);
    rocaY40 = rocaY40 + 2;
  }

  if (tiempoC > 85 && tiempoC < 170) {

    image(roca, 98, rocaY41, 50, 50);
    rocaY41 = rocaY41 + 2;
  }

  if (tiempoC > 86 && tiempoC < 170) {

    image(roca, 460, rocaY42, 50, 50);
    rocaY42 = rocaY42 + 6;
  }

  if (tiempoC > 87 && tiempoC < 170) {

    image(roca, 306, rocaY43, 50, 50);
    rocaY43 = rocaY43 + 2;
  }

  if (tiempoC > 88 && tiempoC < 170) {

    image(roca, 40, rocaY44, 50, 50);
    rocaY44 = rocaY44 + 3;
  }

  if (tiempoC > 120 && tiempoC < 170) {

    if (tiempoC > 120 && tiempoC < 170) {

      image(roca, rocaX, 100, 50, 50);
      rocaX = rocaX + 5;
    }

    if (tiempoC > 121 && tiempoC < 170) {

      image(roca, rocaX6, 300, 50, 50);
      rocaX6 = rocaX6 + 2;
    }

    
    //Rocas Horizontales
    
    
    if (tiempoC > 120 && tiempoC < 170) {

      image(roca, rocaX2, 340, 50, 50);
      rocaX2 = rocaX2 + 8;
    }

    if (tiempoC > 124 && tiempoC < 170) {

      image(roca, rocaX3, 400, 50, 50);
      rocaX3 = rocaX3 + 8;
    }

    if (tiempoC > 126 && tiempoC < 170) {

      image(roca, rocaX4, 120, 50, 50);
      rocaX4 = rocaX4 + 8;
    }

    if (tiempoC > 127 && tiempoC < 170) {

      image(roca, rocaX5, 239, 50, 50);
      rocaX5 = rocaX5 + 9;
    }

    if (tiempoC > 129 && tiempoC < 170) {

      image(roca, rocaX7, 139, 50, 50);
      rocaX7 = rocaX7 + 9;
    }

    if (tiempoC > 130 && tiempoC < 170) {

      image(roca, rocaX8, 209, 50, 50);
      rocaX8 = rocaX8 + 8;
    }

    if (tiempoC > 131 && tiempoC < 170) {

      image(roca, rocaX9, 439, 50, 50);
      rocaX9 = rocaX9 + 9;
    }

    if (tiempoC > 133 && tiempoC < 170) {

      image(roca, rocaX10, 270, 50, 50);
      rocaX10 = rocaX10 + 7;
    }

    if (tiempoC > 135 && tiempoC < 170) {

      image(roca, rocaX11, 300, 50, 50);
      rocaX11 = rocaX11 + 8;
    }

    if (tiempoC > 137 && tiempoC < 170) {

      image(roca, rocaX12, 99, 50, 50);
      rocaX12 = rocaX12 + 9;
    }

    if (tiempoC > 138 && tiempoC < 170) {

      image(roca, rocaX13, 319, 50, 50);
      rocaX13 = rocaX13 + 8;
    }

    if (tiempoC > 139 && tiempoC < 170) {

      image(roca, rocaX14, 400, 50, 50);
      rocaX14 = rocaX14 + 7;
    }

    if (tiempoC > 141 && tiempoC < 170) {

      image(roca, rocaX15, 130, 50, 50);
      rocaX15 = rocaX15 + 8;
    }

    if (tiempoC > 142 && tiempoC < 170) {

      image(roca, rocaX16, 245, 50, 50);
      rocaX16 = rocaX16 + 9;
    }

    if (tiempoC > 144 && tiempoC < 170) {

      image(roca, rocaX17, 439, 50, 50);
      rocaX17 = rocaX17 + 9;
    }

    if (tiempoC > 145 && tiempoC < 170) {

      image(roca, rocaX18, 338, 50, 50);
      rocaX18 = rocaX18 + 9;
    }

    if (tiempoC > 147 && tiempoC < 170) {

      image(roca, rocaX19, 48, 50, 50);
      rocaX19 = rocaX19 + 9;
    }

    if (tiempoC > 148 && tiempoC < 170) {

      image(roca, rocaX20, 459, 50, 50);
      rocaX20 = rocaX20 + 8;
    }

    if (tiempoC > 56 && tiempoC < 170) {

      image(roca, rocaX21, 149, 50, 50);
      rocaX21 = rocaX21 + 9;
    }

    if (tiempoC > 150 && tiempoC < 170) {

      image(roca, rocaX22, 275, 50, 50);
      rocaX22 = rocaX22 + 8;
    }

    if (tiempoC > 152 && tiempoC < 170) {

      image(roca, rocaX23, 100, 50, 50);
      rocaX23 = rocaX23 + 9;
    }

    if (tiempoC > 153 && tiempoC < 170) {

      image(roca, rocaX24, 420, 50, 50);
      rocaX24 = rocaX24 + 9;
    }

    if (tiempoC > 155 && tiempoC < 170) {

      image(roca, rocaX25, 362, 50, 50);
      rocaX25 = rocaX25 + 9;
    }

    if (tiempoC > 156 && tiempoC < 170) {

      image(roca, rocaX26, 154, 50, 50);
      rocaX26 = rocaX26 + 8;
    }

    if (tiempoC > 158 && tiempoC < 170) {

      image(roca, rocaX27, 263, 50, 50);
      rocaX27 = rocaX27 + 9;
    }

    if (tiempoC > 159 && tiempoC < 170) {

      image(roca, rocaX28, 412, 50, 50);
      rocaX28 = rocaX28 + 9;
    }

    if (tiempoC > 160 && tiempoC < 170) {

      image(roca, rocaX29, 50, 50, 50);
      rocaX29 = rocaX29 + 9;
    }

    if (tiempoC > 161 && tiempoC < 170) {

      image(roca, rocaX30, 385, 50, 50);
      rocaX30 = rocaX30 + 9;
    }

    if (tiempoC > 162 && tiempoC < 170) {

      image(roca, rocaX31, 280, 50, 50);
      rocaX31 = rocaX31 + 8;
    }

    if (tiempoC > 163 && tiempoC < 170) {

      image(roca, rocaX32, 175, 50, 50);
      rocaX32 = rocaX32 + 9;
    }

    if (tiempoC > 164 && tiempoC < 170) {

      image(roca, rocaY33, 450, 50, 50);
      rocaY33 = rocaY33 + 9;
    }

    if (tiempoC > 165 && tiempoC < 170) {

      image(roca, rocaX34, 250, 50, 50);
      rocaX34 = rocaX34 + 8;
    }

    if (tiempoC > 166 && tiempoC < 170) {

      image(roca, rocaX35, 124, 50, 50);
      rocaX35 = rocaX35 + 9;
    }
  }
}
