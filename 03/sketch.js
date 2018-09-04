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
  createCanvas(1004,650);
  frameRate();
}

function draw() {
  background(0);
  
  //Aqui empiezo hacer las estrellas del espacio
  
  strokeWeight(3);
  stroke(255);
  point(880,290);
  point(870,490);
  point(960,160);
  point(710,605);
  point(500,500);
  point(350,120);
  point(800,200);
  point(400,350);
  point(100,300);
  point(50,150);
  point(600,130);
  point(840,400);
  point(640,40);
  point(570,600);
  point(80,540);
  point(200,340);
  point(230,30);
  point(650,360);
  point(900,530);
  point(800,480);
  strokeWeight(2.5);
  point(200,100);
  point(600,200);
  point(310,560);
  point(510,240);
  point(630,300);
  point(90,450);
  point(150,400);
  point(200,200);
  point(950,80);
  point(900,120);
  point(980,500);
  point(960,300);
  point(400,50);
  point(220,400);
  point(740,20);
  strokeWeight(4);
  point(700,130);
  point(980,280);
  point(600,380);
  point(720,280);
  point(250,520);
  point(320,320);
  point(380,600);
  point(640,570);
  point(880,40);
  point(700,430);
  point(300,250);
  point(840,600);
  point(510,150);
  point(470,580);
  point(820,330);
  point(240,490);
  strokeWeight(3.5);
  point(25,590);
  point(250,590);
  point(20,350);
  point(900,610);
  point(220,180);
  point(60,230);
  point(630,540);
  point(510,480);
  point(480,350);
  point(360,280);
  point(30,460);
  point(150,580);
  point(350,450);
  point(500,40);
  point(790,120);

  //El sol
  
  if (lunaY<200) {
noStroke();
  fill(255,255,0);
  ellipse(solX,solY,300,300);
  solY=solY-1.5
  solX=solX+0.2  
    
    
}

  // Planeta Marte y su movimiento 
  
  noStroke(0);
  fill(247,94,37);
  ellipse(marX,marY,65,65);
  marX=marX+0.2
  marY=marY-0.1
  
  //El meteorito y su movimiento
  
	fill(255,164,32);
  ellipse(psX,psY,40,40);
  triangle(psX,psYt,psX,psYt2,psXt,psYt3);
  psX=psX-2 * dir;
  psY=psY+0.2
  psYt=psYt+0.2
  psYt2=psYt2+0.2
  psXt=psXt-2
  psYt3=psYt3+0.2
  
  //Luna
  
  noStroke()
  fill(195,195,195);
  ellipse(lunaX,lunaY,120,120);
  lunaX=lunaX+0.02
  lunaY=lunaY-1.5
  strokeWeight(1)
  stroke(0);
  ellipse(lunaX2,lunaY2,20,20);
  lunaX2=lunaX2+0.02
  lunaY2=lunaY2-1.5
  ellipse(lunaX3,lunaY3,30,30);
  lunaX3=lunaX3+0.02
  lunaY3=lunaY3-1.5
  ellipse(lunaX4,lunaY4,25,25);
  lunaX4=lunaX4+0.02
  lunaY4=lunaY4-1.5
  
  //Vista desde la tierra
  
  fill(53,104,45);
  ellipse(500,1200,2000,1320);
  
  //Persona contemplando el espacio
  
  fill(255);
  strokeWeight(4)
  stroke(255);
  ellipse(500,480,40,40);
  line(500,500,500,550);
  line(500,510,530,550);
  line(500,510,470,550);
  line(487,550,485,580);
  line(517,550,520,580);
  
  
  //Banco donde se sienta la persona
  
  stroke(108,59,42);
  noFill();
  beginShape();
  vertex(400,585);
  vertex(400,505);
  vertex(600,505);
  vertex(600,585);
  endShape();
  line(400,550,600,550);
  strokeWeight(7);
  line(400,513,600,513);
  line(400,525,600,525);
  line(400,538,600,538);
  line(400,548,600,548);
  
  //Ovni (UFO)
  
  if(solY<350) {
    noStroke(0);
    fill(157,161,170);
    ellipse(ufoX,ufoY2,50,50);
    fill(14,41,75);
    ellipse(ufoX,ufoY,180,30);
    ufoX=ufoX+2
  }
  if(ufoX>500){
  ufoX=500
  }
  
  if (frameCount > 1200){
    fill(0);
  rect(0,0,1004,650);
  }
  
  

  

  
}