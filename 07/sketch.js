
var peces = [];
var tiburones = [];
var globos = [];
var mantarrayas = [];
var tortugas = [];
var ballenas = [];
var medusas = [];


function preload() {

  fondo = loadImage('Assets/fondo.jpg');
  pescado = loadImage('Assets/pez.png');
  tiburon = loadImage('Assets/tiburon.jpg');
  normal= loadImage('Assets/globo.png');
  globo = loadImage('Assets/normal glo.png');
  mantarraya = loadImage('Assets/manta.png');
  tortuga = loadImage('Assets/torutga.png');
  ballena = loadImage('Assets/ballena.png');
  medusa = loadImage('Assets/medusa.png');
 
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
  
   for (var i4 = 0; i4 <15; i4 = i4 + 1) {
		var tempX4 = random(-200, width);
		var tempY4 = random(0, height);

    globos[i4] = new glo(tempX4, tempY4, 1);
}
  
    for (var i5 = 0; i5 <5; i5 = i5 + 1) {
		var tempX5 = random(-200, width);
		var tempY5 = random(0, height);

    mantarrayas[i5] = new manta(tempX5, tempY5, 1);
}
  for (var i6 = 0; i6 <8; i6 = i6 + 1) {
		var tempX6 = random(0, 1000);
		var tempY6 = random(0, height);

    tortugas[i6] = new tortu(tempX6, tempY6, 1);
}
  for (var i7 = 0; i7 <2; i7 = i7 + 1) {
		var tempX7 = random(0, 1000);
		var tempY7 = random(0, height);

    ballenas[i7] = new balle(tempX7, tempY7, 1);
}
   for (var i8 = 0; i8 <15; i8 = i8 + 1) {
		var tempX8 = random(0, width);
		var tempY8 = random(0, height);

    medusas[i8] = new medu(tempX8, tempY8, 1);
}
}
function draw() {
  background(220);
  
   noTint();
  image(fondo, 0, 0, width, height);
  
  
  for (var i7 = 0; i7 < medusas.length; i7 = i7 + 1) {
		medusas[i7].dibujarse();
		medusas[i7].moverse();
    }
  
  for (var i = 0; i < peces.length; i = i + 1) {
		peces[i].dibujarse();
		peces[i].moverse();
    
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
    }
  if (frameCount > 500 && frameCount < 10000){
  for (var i4 = 0; i4 < globos.length; i4 = i4 + 1) {
		globos[i4].dibujarse();
		globos[i4].moverse();
    
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
  if (frameCount > 700 && frameCount < 10000){
  for (var i5 = 0; i5 < mantarrayas.length; i5 = i5 + 1) {
		mantarrayas[i5].dibujarse();
		mantarrayas[i5].moverse();
    }
  }
  if (frameCount > 800 && frameCount < 10000){
  for (var i6 = 0; i6 < tortugas.length; i6 = i6 + 1) {
		tortugas[i6].dibujarse();
		tortugas[i6].moverse();
    
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

function pez (miX, miY) {
  
  this.x = miX;
  this.y = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(pescado, this.x, this.y, 100, 50);
    }
  }
  
  this.moverse = function(){
  
    this.x = this.x + 0.3
  }
  
  this.morir = function(){
   
    this.vivo = false
  
  }
}

function tibu (miX, miY) {
  
  this.x2 = miX;
  this.y2 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(tiburon, this.x2, this.y2, 200, 150);
    }
  }
  this.moverse = function(){
  
    this.x2 = this.x2 - 0.2
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
      image(globo, this.x3, this.y3,60,30);
    }
  }
  
  this.moverse = function(){
  
    this.x3 = this.x3 + 0.3
  }
  
  this.normal = function(){
  
    
    this.vivo = true 
    
      noTint();
    image(normal, this.x3, this.y3, 60, 60);
    
    this.x3 = this.x3-0 
    this.y3 = this.y3-0
    
    }
  }

function manta(miX, miY) {
  
  this.x4 = miX;
  this.y4 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(mantarraya, this.x4, this.y4,80,80);
    }
  }
  
  this.moverse = function(){
  
    this.x4 = this.x4 + 0.5
  }
  }

function tortu(miX, miY) {
  
  this.x5 = miX;
  this.y5 = miY;
  this.vivo = true

  this.dibujarse = function() {

    if (this.vivo == true) {

      noTint();
      image(tortuga, this.x5, this.y5,80,60);
    }
  }
  
  this.moverse = function(){
  
    this.x5 = this.x5 - 0.3
  }
    
   this.rapido = function(){
     
   this.x5 = this.x5 - 1
   
   }
   this.morirse = function(){
   
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
      image(ballena, this.x6, this.y6,350,250);
    }
  }
  
  this.moverse = function(){
  
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
      image(medusa, this.x7, this.y7,60,50);
    }
  }
  
  this.moverse = function(){
  
    this.x7 = this.x7 + random(-1,1)
    this.y7 = this.y7 + random(-1,1)
  }
  }












