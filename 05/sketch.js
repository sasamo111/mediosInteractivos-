var pilX1 = 530;
var pilX2 = 930;
var pilY1 = 30;
var pilY2 = 220;
var curv = 3;
var señ = 20;

var miSegundo;
var miMinuto;
var miHora;

function setup() {
  createCanvas(1250, 250);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);

  miSegundo = second();
  miMinuto = minute();
  miHora = hour();

  miHoraModificado = map(miHora, 0, 23, 380, 1);

  //Señal de la red

  fill(255);
  ellipse(220, 210, 25, 25);
  noFill();
  strokeWeight(20);
  ellipse(220, 210, 90, 90);
  ellipse(220, 210, 170, 170);
  ellipse(220, 210, 250, 250);
  ellipse(220, 210, 330, 330);

  fill(0);
  noStroke();
  beginShape();
  vertex(220, 210);
  vertex(400, 0);
  vertex(400, 250);
  vertex(40, 250)
  vertex(40, 0);
  endShape();

  //Lineas de senal de comunicacion

  strokeWeight(4);
  fill(255);
  stroke(255);
  rect(470, pilY1, señ, 192, curv);
  rect(430, 70, señ, 152, curv);
  rect(390, 110, señ, 112, curv);
  rect(350, 150, señ, 72, curv);


  //Bateria del celular

  noFill();
  quad(pilX1, pilY1, pilX2, pilY1, pilX2, pilY2, pilX1, pilY2);
  fill(255);
  rect(pilX2, 70, 25, 110, 5);
  fill(0);
  strokeWeight(1);

  push();
  fill(255)
  rect(540, 39, miHoraModificado, 170, 5);
  pop();

  strokeWeight(4);
  stroke(0);
  fill(255);
  beginShape();
  vertex(640, 135);
  vertex(735, 80);
  vertex(735, 115);
  vertex(820, 105);
  vertex(725, 160);
  vertex(725, 125);
  endShape(CLOSE);

  //Icono del Bluetooth

  strokeWeight(15);
  stroke(255);
  noFill();
  triangle(1100 - 50, 40, 1150 - 50, 80, 1100 - 50, 120);
  triangle(1100 - 50, 120, 1150 - 50, 160, 1100 - 50, 200);
  line(1100 - 50, 120, 1060 - 50, 80);
  line(1100 - 50, 120, 1060 - 50, 160);

}