var psX = 1004
var psY = 80
var dir = 1
var psYt = 60
var psYt2 = 100
var psXt = 1170
var psYt3 = 64
var dir = 1
var marX = 110
var marY = 300
var lunaX = 800
var lunaY = 580
var solX = 0
var solY = 1000
var lunaX2 = 780
var lunaY2 = 550
var lunaX3 = 830
var lunaY3 = 580
var lunaX4 = 780
var lunaY4 = 600
var ufoX = -90
var ufoY = 210
var ufoY2 = 200
var luzX1 = 490
var luzY = 210
var luzX2 = 510

function setup() {
  createCanvas(3400, 2200);
  frameRate();
}

function draw() {
  background(0);

  //Aqui empiezo hacer las estrellas del espacio

  strokeWeight(13);
  stroke(255);
  point(880*width/1004, 290*height/650);
  point(870*width/1004, 490*height/650);
  point(960*width/1004, 160*height/650);
  point(710*width/1004, 605*height/650);
  point(500*width/1004, 500*height/650);
  point(350*width/1004, 120*height/650);
  point(800*width/1004, 200*height/650);
  point(400*width/1004, 350*height/650);
  point(100*width/1004, 300*height/650);
  point(50*width/1004, 150*height/650);
  point(600*width/1004, 130*height/650);
  point(840*width/1004, 400*height/650);
  point(640*width/1004, 40*height/650);
  point(570*width/1004, 600*height/650);
  point(80*width/1004, 540*height/650);
  point(200*width/1004, 340*height/650);
  point(230*width/1004, 30*height/650);
  point(650*width/1004, 360*height/650);
  point(900*width/1004, 530*height/650);
  point(800*width/1004, 480*height/650);
  strokeWeight(12.5);
  point(200*width/1004, 100*height/650);
  point(600*width/1004, 200*height/650);
  point(310*width/1004, 560*height/650);
  point(510*width/1004, 240*height/650);
  point(630*width/1004, 300*height/650);
  point(90*width/1004, 450*height/650);
  point(150*width/1004, 400*height/650);
  point(200*width/1004, 200*height/650);
  point(950*width/1004, 80*height/650);
  point(900*width/1004, 120*height/650);
  point(980*width/1004, 500*height/650);
  point(960*width/1004, 300*height/650);
  point(400*width/1004, 50*height/650);
  point(220*width/1004, 400*height/650);
  point(740*width/1004, 20*height/650);
  strokeWeight(14);
  point(700*width/1004, 130*height/650);
  point(980*width/1004, 280*height/650);
  point(600*width/1004, 380*height/650);
  point(720*width/1004, 280*height/650);
  point(250*width/1004, 520*height/650);
  point(320*width/1004, 320*height/650);
  point(380*width/1004, 600*height/650);
  point(640*width/1004, 570*height/650);
  point(880*width/1004, 40*height/650);
  point(700*width/1004, 430*height/650);
  point(300*width/1004, 250*height/650);
  point(840*width/1004, 600*height/650);
  point(510*width/1004, 150*height/650);
  point(470*width/1004, 580*height/650);
  point(820*width/1004, 330*height/650);
  point(240*width/1004, 490*height/650);
  strokeWeight(13.5);
  point(25*width/1004, 590*height/650);
  point(250*width/1004, 590*height/650);
  point(20*width/1004, 350*height/650);
  point(900*width/1004, 610*height/650);
  point(220*width/1004, 180*height/650);
  point(60*width/1004, 230*height/650);
  point(630*width/1004, 540*height/650);
  point(510*width/1004, 480*height/650);
  point(480*width/1004, 350*height/650);
  point(360*width/1004, 280*height/650);
  point(30*width/1004, 460*height/650);
  point(150*width/1004, 580*height/650);
  point(350*width/1004, 450*height/650);
  point(500*width/1004, 40*height/650);
  point(790*width/1004, 120*height/650);

  //El sol

  if (lunaY < 200) {
    noStroke();
    fill(255, 255, 0);
    ellipse(solX*width/1004, solY*height/650, 300*width/1004, 300*height/650);
    solY = solY - 1.5
    solX = solX + 0.3


  }

  // Planeta Marte y su movimiento 

  noStroke(0);
  fill(247, 94, 37);
  ellipse(marX*width/1004, marY*height/650, 65*width/1004, 65*height/650);
  marX = marX + 0.5
  marY = marY - 0.3

  //El meteorito y su movimiento

  fill(255, 164, 32);
  ellipse(psX*width/1004, psY*height/650, 40*width/1004, 40*height/650);
  triangle(psX*width/1004, psYt*height/650, psX*width/1004, psYt2*height/650, psXt*width/1004, psYt3*height/650);
  psX = psX - 2 * dir;
  psY = psY + 0.2
  psYt = psYt + 0.2
  psYt2 = psYt2 + 0.2
  psXt = psXt - 2
  psYt3 = psYt3 + 0.2

  //Luna

  noStroke()
  fill(195, 195, 195);
  ellipse(lunaX*width/1004, lunaY*height/650, 120*width/1004, 120*height/650);
  lunaX = lunaX + 0.2
  lunaY = lunaY - 1.5
  strokeWeight(5)
  stroke(0);
  ellipse(lunaX2*width/1004, lunaY2*height/650, 20*width/1004, 20*height/650);
  lunaX2 = lunaX2 + 0.2
  lunaY2 = lunaY2 - 1.5
  ellipse(lunaX3*width/1004, lunaY3*height/650, 30*width/1004, 30*height/650);
  lunaX3 = lunaX3 + 0.2
  lunaY3 = lunaY3 - 1.5
  ellipse(lunaX4*width/1004, lunaY4*height/650, 25*width/1004, 25*height/650);
  lunaX4 = lunaX4 + 0.2
  lunaY4 = lunaY4 - 1.5

  //Vista desde la tierra

  fill(53, 104, 45);
  ellipse(500*width/1004, 1200*height/650, 2000*width/1004, 1320*height/650);

  //Persona contemplando el espacio

  fill(255);
  strokeWeight(14)
  stroke(255);
  ellipse(500*width/1004, 480*height/650, 40*width/1004, 40*height/650);
  line(500*width/1004, 500*height/650, 500*width/1004, 550*height/650);
  line(500*width/1004, 510*height/650, 530*width/1004, 550*height/650);
  line(500*width/1004, 510*height/650, 470*width/1004, 550*height/650);
  line(487*width/1004, 550*height/650, 485*width/1004, 580*height/650);
  line(517*width/1004, 550*height/650, 520*width/1004, 580*height/650);


  //Banco donde se sienta la persona

  stroke(108, 59, 42);
  noFill();
  beginShape();
  vertex(400*width/1004, 585*height/650);
  vertex(400*width/1004, 505*height/650);
  vertex(600*width/1004, 505*height/650);
  vertex(600*width/1004, 585*height/650);
  endShape();
  line(400*width/1004, 550*height/650, 600*width/1004, 550*height/650);
  strokeWeight(17);
  line(400*width/1004, 513*height/650, 600*width/1004, 513*height/650);
  line(400*width/1004, 525*height/650, 600*width/1004, 525*height/650);
  line(400*width/1004, 538*height/650, 600*width/1004, 538*height/650);
  line(400*width/1004, 548*height/650, 600*width/1004, 548*height/650);

  //Ovni (UFO)

  if (solY < 350) {
    noStroke(0);
    fill(157, 161, 170);
    ellipse(ufoX*width/1004, ufoY2*height/650, 50*width/1004, 50*height/650);
    fill(14, 41, 75);
    ellipse(ufoX*width/1004, ufoY*height/650, 180*width/1004, 30*height/650);
    ufoX = ufoX + 2
  }
  if (ufoX > 500) {
    ufoX = 500
  }

  // Fondo final

  if (frameCount > 1099) {
    fill(0);
    rect(0, 0, 3400, 2200);
  }

}
 
