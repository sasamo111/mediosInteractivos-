
var peces = [];
var tiburones = [];
var globos = [];
var mantarrayas = [];
var tortugas = [];
var ballenas = [];
var medusas = [];
var comidas = [];
var numComidas = 0;
var vel = 0;


function preload() {

  fondo = loadImage('Assets/fondo.jpg');
  pescado = loadImage('Assets/pez.png');
  tiburon = loadImage('Assets/tiburon.jpg');
  normal = loadImage('Assets/globo.png');
  globo = loadImage('Assets/normal glo.png');
  mantarraya = loadImage('Assets/manta.png');
  tortuga = loadImage('Assets/torutga.png');
  ballena = loadImage('Assets/ballena.png');
  medusa = loadImage('Assets/medusa.png');
  comiamarillo = loadImage('Assets/comidaamarilla.png');
  comiroja = loadImage('Assets/Comidarojo.png');


}

function setup() {
  createCanvas(696, 460);

  for (var i = 0; i < 30; i = i + 1) {
    var tempX = random(-200, width);
    var tempY = random(0, height);

    peces[i] = new pez(tempX, tempY, 1);
  }
  for (var i3 = 0; i3 < 3; i3 = i3 + 1) {
    var tempX3 = random(0, 800);
    var tempY3 = random(0, height);

    tiburones[i3] = new tibu(tempX3, tempY3, 1);
  }

  for (var i4 = 0; i4 < 15; i4 = i4 + 1) {
    var tempX4 = random(-200, width);
    var tempY4 = random(0, height);

    globos[i4] = new glo(tempX4, tempY4, 1);
  }

  for (var i5 = 0; i5 < 5; i5 = i5 + 1) {
    var tempX5 = random(-200, width);
    var tempY5 = random(0, height);

    mantarrayas[i5] = new manta(tempX5, tempY5, 1);
  }
  for (var i6 = 0; i6 < 8; i6 = i6 + 1) {
    var tempX6 = random(0, 1000);
    var tempY6 = random(0, height);

    tortugas[i6] = new tortu(tempX6, tempY6, 1);
  }
  for (var i7 = 0; i7 < 2; i7 = i7 + 1) {
    var tempX7 = random(0, 1000);
    var tempY7 = random(0, height);

    ballenas[i7] = new balle(tempX7, tempY7, 1);
  }
  for (var i8 = 0; i8 < 15; i8 = i8 + 1) {
    var tempX8 = random(0, width);
    var tempY8 = random(0, height);

    medusas[i8] = new medu(tempX8, tempY8, 1);
  }
}

function draw() {
  background(220);

  noTint();
  image(fondo, 0, 0, width, height);

  //difX es la resta de la posicion x del mouse actual con la posicion del mouse anterior
  var difX = abs(mouseX - pmouseX);

  //difY es la resta de la posicion y del mouse actual con la posicion del mouse anterior
  var difY = abs(mouseY - pmouseY);

  //se elevan las diferencias a al poder de 2
  difX = pow(difX, 2);
  difY = pow(difY, 2);

  //la velocidad es dada por el teorema de pitagoras c = sqrt(a^2 + b^2)
  //con floor() se redondea la velocidad a un numero entero
  var vel = floor(sqrt(difX + difY));


  //texto que muestra la velocidad en la pantalla
  fill(100);
  text("Velocidad del ratón: " + vel, 30, 30);

  //llama a las funciones mostrar, mover y morir de cada una de las bolas en la lista
  for (var i9 = 0; i9 < numComidas; i9++) {
    comidas[i9].mostrar();
    comidas[i9].mover();

    for (var i = 0; i < peces.length; i = i + 1) {
      if (dist(peces[i].x, peces[i].y, comidas[i9].x8, comidas[i9].y8) < 30) {
        comidas[i9].comerse();
      }
    }
    for (var i4 = 0; i4 < globos.length; i4 = i4 + 1) {
      if (dist(globos[i4].x3, globos[i4].y3, comidas[i9].x8, comidas[i9].y8) < 30) {
        comidas[i9].comerse();
      }
    }

  }



  for (var i7 = 0; i7 < medusas.length; i7 = i7 + 1) {
    medusas[i7].dibujarse();
    medusas[i7].moverse();
  }

  for (var i = 0; i < peces.length; i = i + 1) {

    if (peces[i].x <= 700) {
      peces[i].dibujarse();
      peces[i].moverse();
    }


    if (peces[i].x >= 700) {

      peces[i].x = -100;
      peces[i].dibujarse


    }

    if (vel > 80) {

      peces[i].x = peces[i].x + 6

    }

    for (var i3 = 0; i3 < tiburones.length; i3 = i3 + 1) {
      if (dist(tiburones[i3].x2, tiburones[i3].y2, peces[i].x, peces[i].y) < 30) {
        peces[i].morir();
      }
    }

    for (var i5 = 0; i5 < mantarrayas.length; i5 = i5 + 1) {
      if (dist(mantarrayas[i5].x4, mantarrayas[i5].x4, peces[i].x, peces[i].y) < 50) {
        peces[i].morir();
      }
    }
  }

  for (var i2 = 0; i2 < tiburones.length; i2 = i2 + 1) {
    tiburones[i2].dibujarse();
    tiburones[i2].moverse();
    
    if (tiburones[i2].x2 <= -100) {

      tiburones[i2].x2 = 800;
      tiburones[i2].y2 = random(0, height);
      tiburones[i2].dibujarse


    }

    if (vel > 80) {

      tiburones[i2].x2 = tiburones[i2].x2 - 4

    }
  }
  if (frameCount > 500 && frameCount < 10000) {
    for (var i4 = 0; i4 < globos.length; i4 = i4 + 1) {
      globos[i4].dibujarse();
      globos[i4].moverse();

      if (vel > 80) {

        globos[i4].x3 = globos[i4].x3 + 5

      }

      for (var i3 = 0; i3 < tiburones.length; i3 = i3 + 1) {
        if (dist(tiburones[i3].x2, tiburones[i3].y2, globos[i4].x3, globos[i4].y3) < 50) {
          globos[i4].normal();
        }
      }
      for (var i7 = 0; i7 < ballenas.length; i7 = i7 + 1) {
        if (dist(ballenas[i7].x6, ballenas[i7].y6, globos[i4].x3, globos[i4].y3) < 50) {
          globos[i4].normal();
        }
      }
    }
  }
  if (frameCount > 700 && frameCount < 10000) {
    for (var i5 = 0; i5 < mantarrayas.length; i5 = i5 + 1) {
      mantarrayas[i5].dibujarse();
      mantarrayas[i5].moverse();
    }
  }
  if (frameCount > 800 && frameCount < 10000) {
    for (var i6 = 0; i6 < tortugas.length; i6 = i6 + 1) {
      tortugas[i6].dibujarse();
      tortugas[i6].moverse();

      if (vel > 80) {

        tortugas[i6].x5 = tortugas[i6].x5 - 3

      }

      for (var i5 = 0; i5 < mantarrayas.length; i5 = i5 + 1) {
        if (dist(mantarrayas[i5].x4, mantarrayas[i5].x4, tortugas[i6].x5, tortugas[i6].y5) < 60) {
          tortugas[i6].rapido();
        }
      }
      for (var i4 = 0; i4 < globos.length; i4 = i4 + 1) {
        if (dist(globos[i4].x3, globos[i4].x3, tortugas[i6].x5, tortugas[i6].y5) < 60) {
          tortugas[i6].rapido();
        }
      }
      for (var i7 = 0; i7 < ballena.length; i7 = i7 + 1) {
        if (dist(ballenas[i7].x6, ballenas[i7].x6, tortugas[i6].x5, tortugas[i6].y5) < 60) {
          tortugas[i6].rapido();
        }
      }

      for (var i8 = 0; i8 < medusas.length; i8 = i8 + 1) {
        if (dist(medusas[i8].x7, medusas[i8].x7, tortugas[i6].x5, tortugas[i6].y5) < 60) {
          tortugas[i6].morirse();
        }
      }
    }
  }
  for (var i7 = 0; i7 < ballenas.length; i7 = i7 + 1) {
    ballenas[i7].dibujarse();
    ballenas[i7].moverse();
  }
}

function pez(miX, miY, v) {

  this.x = miX;
  this.y = miY;
  this.vel = v
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(pescado, this.x, this.y, 100, 50);
    }
  }

  this.moverse = function() {
    if (this.vel < 80) {

      this.x = this.x + 0.3

    }

    if (this.vel > 80) {

      this.x = this.x + 1

    }

  }

  this.morir = function() {

    this.vivo = false

  }
}

function tibu(miX, miY) {

  this.x2 = miX;
  this.y2 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(tiburon, this.x2, this.y2, 200, 150);
    }
  }
  this.moverse = function() {

    this.x2 = this.x2 - 0.2

    if (vel > 80 && mouseIsPressed) {

      this.x = this.x + 3
    }
  }
}

function glo(miX, miY) {

  this.x3 = miX;
  this.y3 = miY;
  this.vivo = true
  this.cambiar = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(globo, this.x3, this.y3, 60, 30);
    }
  }

  this.moverse = function() {

    this.x3 = this.x3 + 0.3

    if (vel > 80 && mouseIsPressed) {

      this.x = this.x + 1
    }
  }

  this.normal = function() {


    this.vivo = true

    noTint();
    image(normal, this.x3, this.y3, 60, 60);

    this.x3 = this.x3 - 0
    this.y3 = this.y3 - 0

  }
}

function manta(miX, miY) {

  this.x4 = miX;
  this.y4 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(mantarraya, this.x4, this.y4, 80, 80);
    }
  }

  this.moverse = function() {

    this.x4 = this.x4 + 0.5

    if (vel > 80 && mouseIsPressed) {

      this.x = this.x + 1
    }
  }
}

function tortu(miX, miY) {

  this.x5 = miX;
  this.y5 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(tortuga, this.x5, this.y5, 80, 60);
    }
  }

  this.moverse = function() {

    this.x5 = this.x5 - 0.3

    if (vel > 80 && mouseIsPressed) {

      this.x = this.x + 1
    }
  }

  this.rapido = function() {

    this.x5 = this.x5 - 1

  }
  this.morirse = function() {

    this.vivo = false

  }
}

function balle(miX, miY) {

  this.x6 = miX;
  this.y6 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(ballena, this.x6, this.y6, 350, 250);
    }
  }

  this.moverse = function() {

    this.x6 = this.x6 - 0.1
  }
}

function medu(miX, miY) {

  this.x7 = miX;
  this.y7 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(medusa, this.x7, this.y7, 60, 50);
    }
  }

  this.moverse = function() {

    this.x7 = this.x7 + random(-1, 1)
    this.y7 = this.y7 + random(-1, 1)
  }
}

//funcion bola
function comida(px, py) {

  //variables de posicion, la bola se crea en la posición del raton
  this.x8 = mouseX;
  this.y8 = mouseY;
  this.vivo = true

  //variables de velocidad que recibe la funcion
  this.velx = px;
  this.vely = py;

  //variable de tamano aleatorio entre 30 y 60
  this.tam = random(10, 20);

  //funcion que dibuja la bola
  this.mostrar = function() {

    if (this.vivo == true) {
      noTint();
      image(comiamarillo, this.x8, this.y8, this.tam, this.tam);
    }
  }

  //funcion que mueve la bola
  this.mover = function() {

    //el movimiento se asigna por la posicion + la velocidad
    this.x8 = this.x8 + this.velx;
    this.y8 = this.y8 + this.vely;

    //aumenta la velocidad en Y constantemente para dar un efecto de gravedad
    this.vely += 0.1;

    //condicionales para que rebote la bola
    if (this.y8 > height || this.y < 0) {
      this.vely = -1;
    }
  }
  this.comerse = function() {

    this.vivo = false

  }
}

//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  //solo se pueden crear bolas en frames multiplos de 10, esto hace que no se puedan crear bolas tan seguido
  if (frameCount % 5 != 0) {
    return;
  }

  //posicion actual del raton
  var x1 = mouseX;
  var y1 = mouseY;

  //posicion anterior del raton
  var x2 = pmouseX;
  var y2 = pmouseY;

  //la velocidad se mide restando la posicion guardada del mouse con la posición que se habia guardado de este
  var velx = x1 - x2;
  var vely = y1 - y2;

  // se cra una nueva bola que recibe por parametro las velocidades en x y y del mouse
  comidas[numComidas] = new comida(velx, vely);

  //aumenta el numero de bolas de la lista
  numComidas++;
}
