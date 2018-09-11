var posXbot1 = 50;
var posYbot1 = 50;
var tamBot1 = 50;

var posXbot2 = 110;
var posYbot2 = 50;
var tamBot2 = 50;

var posXbot3 = 170;
var posYbot3 = 50;
var tamBot3 = 50;

var posXbot4 = 230;
var posYbot4 = 50;
var tamBot4 = 50;

var posXbot5 = 290;
var posYbot5 = 50;
var tamBot5 = 50;

var posXbot6 = 350;
var posYbot6 = 50;
var tamBot6 = 50;

var posXbot7 = 410;
var posYbot7 = 50;
var tamBot7 = 50;

var posXbot8 = 470;
var posYbot8 = 50;
var tamBot8 = 50;

var posXbot9 = 530;
var posYbot9 = 50;
var tamBot9 = 50;

var posXbot10 = 590;
var posYbot10 = 50;
var tamBot10 = 50;

var posXbot11 = 50;
var posYbot11 = 110;
var tamBot11 = 50;

var posXbot12 = 110;
var posYbot12 = 110;
var tamBot12 = 50;

var posXbot13 = 170;
var posYbot13 = 110;
var tamBot13 = 50;

var posXbot14 = 230;
var posYbot14 = 110;
var tamBot14 = 50;

var posXbot15 = 290;
var posYbot15 = 110;
var tamBot15 = 50;

var posXbot16 = 350;
var posYbot16 = 110;
var tamBot16 = 50;

var posXbot17 = 410;
var posYbot17 = 110;
var tamBot17 = 50;

var posXbot18 = 470;
var posYbot18 = 110;
var tamBot18 = 50;

var posXbot19 = 530;
var posYbot19 = 110;
var tamBot19 = 50;

var posXbot20 = 590;
var posYbot20 = 110;
var tamBot20 = 50;

var herSel = 0;
var colSel = 0;
var fond = 255

function setup() {
  createCanvas(1000, 1000);
  background(fond);

  fill(250, 244, 227);
  rect(20, 20, 650, 170, )

  //Botones visibles

  fill(255);
  rect(posXbot1, posYbot1, tamBot1, tamBot1);
  rect(posXbot2, posYbot2, tamBot2, tamBot2);
  rect(posXbot3, posYbot3, tamBot3, tamBot3);
  rect(posXbot4, posYbot4, tamBot4, tamBot4);
  rect(posXbot5, posYbot5, tamBot5, tamBot5);
  rect(posXbot6, posYbot6, tamBot6, tamBot6);
  rect(posXbot7, posYbot7, tamBot7, tamBot7);
  rect(posXbot8, posYbot8, tamBot8, tamBot8);
  rect(posXbot9, posYbot9, tamBot9, tamBot9);
  rect(posXbot10, posYbot10, tamBot10, tamBot10);
  fill(255);
  rect(posXbot11, posYbot11, tamBot11, tamBot11);
  fill(255, 117, 20);
  rect(posXbot12, posYbot12, tamBot12, tamBot12);
  fill(34, 113, 179);
  rect(posXbot13, posYbot13, tamBot13, tamBot13);
  fill(248, 243, 53);
  rect(posXbot14, posYbot14, tamBot14, tamBot14);
  fill(248, 0, 0);
  rect(posXbot15, posYbot15, tamBot15, tamBot15);
  fill(0);
  rect(posXbot16, posYbot16, tamBot16, tamBot16);
  fill(222, 76, 138);
  rect(posXbot17, posYbot17, tamBot17, tamBot17);
  fill(111, 79, 40);
  rect(posXbot18, posYbot18, tamBot18, tamBot18);
  fill(63, 136, 143);
  rect(posXbot19, posYbot19, tamBot19, tamBot19);
  fill(255);
  rect(posXbot20, posYbot20, tamBot20, tamBot20);
  fill(255);

}

function draw() {

  if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 &&
    mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
    herSel = 0
  }

  if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 &&
    mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
    herSel = 1
  }

  if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 &&
    mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
    herSel = 2
  }

  if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 &&
    mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
    herSel = 3
  }

  if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 &&
    mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {
    herSel = 4
  }

  if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 &&
    mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {
    herSel = 5
  }

  if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 &&
    mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {
    herSel = 6
  }

  if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 &&
    mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {
    herSel = 7
  }

  if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 &&
    mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {
    herSel = 8
  }

  if (mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 &&
    mouseY > posYbot10 && mouseY < posYbot10 + tamBot10) {
    herSel = 9
  }

  if (mouseX > posXbot11 && mouseX < posXbot11 + tamBot11 &&
    mouseY > posYbot11 && mouseY < posYbot11 + tamBot11) {
    colSel = 0
  }

  if (mouseX > posXbot12 && mouseX < posXbot12 + tamBot12 &&
    mouseY > posYbot12 && mouseY < posYbot12 + tamBot12) {
    colSel = 1
  }

  if (mouseX > posXbot13 && mouseX < posXbot13 + tamBot13 &&
    mouseY > posYbot13 && mouseY < posYbot13 + tamBot13) {
    colSel = 2
  }

  if (mouseX > posXbot14 && mouseX < posXbot14 + tamBot14 &&
    mouseY > posYbot14 && mouseY < posYbot14 + tamBot14) {
    colSel = 3
  }

  if (mouseX > posXbot15 && mouseX < posXbot15 + tamBot15 &&
    mouseY > posYbot15 && mouseY < posYbot15 + tamBot15) {
    colSel = 4
  }

  if (mouseX > posXbot16 && mouseX < posXbot16 + tamBot16 &&
    mouseY > posYbot16 && mouseY < posYbot16 + tamBot16) {
    colSel = 5
  }

  if (mouseX > posXbot17 && mouseX < posXbot17 + tamBot17 &&
    mouseY > posYbot17 && mouseY < posYbot17 + tamBot17) {
    colSel = 6
  }

  if (mouseX > posXbot18 && mouseX < posXbot18 + tamBot18 &&
    mouseY > posYbot18 && mouseY < posYbot18 + tamBot18) {
    colSel = 7
  }

  if (mouseX > posXbot19 && mouseX < posXbot19 + tamBot19 &&
    mouseY > posYbot19 && mouseY < posYbot19 + tamBot19) {
    colSel = 8
  }

  if (mouseX > posXbot20 && mouseX < posXbot20 + tamBot20 &&
    mouseY > posYbot20 && mouseY < posYbot20 + tamBot20) {
    colSel = 9
  }

  //Comando de que hace cada boton

  if (mouseIsPressed) {

    if (herSel == 0) {
      ellipse(mouseX, mouseY, 50, 50);
      triangle(mouseX - 25, mouseY, mouseX + 25, mouseY, mouseX, mouseY + 60)
    }

    if (herSel == 1) {
      line(mouseX, mouseY, mouseX + 50, mouseY + 50);
      line(mouseX, mouseY, mouseX + 50, mouseY);
      line(mouseX, mouseY, mouseX, mouseY + 50);
    }

    if (herSel == 2) {
      quad(mouseX, mouseY, mouseX + 50, mouseY,
        mouseX, mouseY + 50, mouseX + 50, mouseY + 50);
    }

    if (herSel == 3) {
      line(mouseX - 25, mouseY - 25, mouseX + 25, mouseY + 25);
      line(mouseX - 25, mouseY + 25, mouseX + 25, mouseY - 25);
    }

    if (herSel == 4) {
      ellipse(mouseX, mouseY, 15, 15);
      triangle(mouseX - 5, mouseY - 5, mouseX - 20, mouseY, mouseX - 5, mouseY + 5);
      triangle(mouseX - 5, mouseY - 5, mouseX, mouseY - 20, mouseX + 6, mouseY - 5);
      triangle(mouseX + 6, mouseY - 5, mouseX + 20, mouseY, mouseX + 6, mouseY + 5);
      triangle(mouseX + 6, mouseY + 5, mouseX, mouseY + 20, mouseX - 5, mouseY + 5);
    }

    if (herSel == 5) {
      line(mouseX, mouseY, mouseX + 50, mouseY);
      line(mouseX, mouseY, mouseX, mouseY - 50);
      line(mouseX, mouseY, mouseX - 50, mouseY);
      line(mouseX, mouseY, mouseX, mouseY + 50);
      line(mouseX, mouseY, mouseX - 40, mouseY + 40);
      line(mouseX, mouseY, mouseX + 40, mouseY - 40);
      line(mouseX, mouseY, mouseX + 40, mouseY + 40);
      line(mouseX, mouseY, mouseX - 40, mouseY - 40);
      ellipse(mouseX, mouseY, 50, 50);
    }

    if (herSel == 6) {
      ellipse(mouseX, mouseY, 15, 60);
      ellipse(mouseX, mouseY, 60, 15);

    }

    if (herSel == 7) {
      line(mouseX, mouseY, mouseX + 61, mouseY);
      ellipse(mouseX, mouseY, 30, 30);
      ellipse(mouseX + 61, mouseY, 30, 30);
    }

    if (herSel == 8) {
      quad(mouseX, mouseY, mouseX + 45, mouseY + 15, mouseX + 60, mouseY + 60, mouseX + 15, mouseY + 45);
      line(mouseX + 45, mouseY + 15, mouseX + 15, mouseY + 45);

    }

    if (herSel == 9) {
      ellipse(mouseX, mouseY, 60, 15);
      line(mouseX - 30, mouseY, mouseX - 30, mouseY - 30);
      line(mouseX + 30, mouseY, mouseX + 30, mouseY + 30);
    }

    if (colSel == 0) {
      fill(255);
      stroke(0);
    }

    if (colSel == 1) {
      fill(255, 117, 20);
      stroke(0)
    }

    if (colSel == 2) {
      fill(34, 113, 179);
      stroke(0)
    }

    if (colSel == 3) {
      fill(248, 243, 53);
      stroke(0)
    }

    if (colSel == 4) {
      fill(248, 0, 0);
      stroke(0)
    }

    if (colSel == 5) {
      fill(0);
      stroke(255);
    }

    if (colSel == 6) {
      fill(222, 76, 138);
      stroke(0);
    }

    if (colSel == 7) {
      fill(111, 79, 40);
      stroke(0);
    }

    if (colSel == 8) {
      fill(63, 136, 143);
      stroke(0);
    }

    if (colSel == 9) {
      background(fond);
      
      
      //Icono del helado para el boton

      ellipse(75, 65, 25, 25);
      triangle(60, 65, 90, 65, 75, 98);

      //Icono de la flecha para el boton

      line(115, 55, 155, 95);
      line(115, 55, 155, 55);
      line(115, 55, 115, 95);

      //Icono reloj de arena para boton

      quad(175, 55, 215, 55, 175, 95, 215, 95);

      //Icono X

      line(235, 55, 275, 95);
      line(275, 55, 235, 95);

      //Icono estrella

      ellipse(315, 75, 15, 15);
      triangle(310, 70, 295, 75, 310, 80);
      triangle(310, 70, 315, 55, 321, 70);
      triangle(321, 70, 335, 75, 321, 80);
      triangle(321, 80, 315, 95, 310, 80);

      // Sol

      line(375, 75, 375, 100);
      line(375, 75, 375, 50);
      line(375, 75, 400, 75);
      line(375, 75, 350, 75);
      line(375, 75, 400, 100);
      line(375, 75, 350, 50);
      line(375, 75, 400, 50);
      line(375, 75, 350, 100);
      ellipse(375, 75, 25, 25);

      // Cruz con ellipses

      ellipse(435, 75, 10, 40);
      ellipse(435, 75, 40, 10);

      // Anteojos

      line(480, 75, 511, 75);
      ellipse(480, 75, 15, 15);
      ellipse(511, 75, 15, 15);

      // Cristal

      quad(535, 55, 565, 65, 575, 95, 545, 85);
      line(565, 65, 545, 85);

      // 

      ellipse(615, 75, 40, 10);
      line(595, 75, 595, 55);
      line(635, 75, 635, 95);

      fill(250, 244, 227);
      rect(20, 20, 650, 170, )
          
       //Botones visibles

      fill(255);
      rect(posXbot1, posYbot1, tamBot1, tamBot1);
      rect(posXbot2, posYbot2, tamBot2, tamBot2);
      rect(posXbot3, posYbot3, tamBot3, tamBot3);
      rect(posXbot4, posYbot4, tamBot4, tamBot4);
      rect(posXbot5, posYbot5, tamBot5, tamBot5);
      rect(posXbot6, posYbot6, tamBot6, tamBot6);
      rect(posXbot7, posYbot7, tamBot7, tamBot7);
      rect(posXbot8, posYbot8, tamBot8, tamBot8);
      rect(posXbot9, posYbot9, tamBot9, tamBot9);
      rect(posXbot10, posYbot10, tamBot10, tamBot10);
      fill(255);
      rect(posXbot11, posYbot11, tamBot11, tamBot11);
      fill(255, 117, 20);
      rect(posXbot12, posYbot12, tamBot12, tamBot12);
      fill(34, 113, 179);
      rect(posXbot13, posYbot13, tamBot13, tamBot13);
      fill(248, 243, 53);
      rect(posXbot14, posYbot14, tamBot14, tamBot14);
      fill(248, 0, 0);
      rect(posXbot15, posYbot15, tamBot15, tamBot15);
      fill(0);
      rect(posXbot16, posYbot16, tamBot16, tamBot16);
      fill(222, 76, 138);
      rect(posXbot17, posYbot17, tamBot17, tamBot17);
      fill(111, 79, 40);
      rect(posXbot18, posYbot18, tamBot18, tamBot18);
      fill(63, 136, 143);
      rect(posXbot19, posYbot19, tamBot19, tamBot19);
      fill(255);
      rect(posXbot20, posYbot20, tamBot20, tamBot20);
      fill(255);    
    }
  }



  //Icono del helado para el boton

  ellipse(75, 65, 25, 25);
  triangle(60, 65, 90, 65, 75, 98);

  //Icono de la flecha para el boton

  line(115, 55, 155, 95);
  line(115, 55, 155, 55);
  line(115, 55, 115, 95);

  //Icono reloj de arena para boton

  quad(175, 55, 215, 55, 175, 95, 215, 95);

  //Icono X

  line(235, 55, 275, 95);
  line(275, 55, 235, 95);

  //Icono estrella

  ellipse(315, 75, 15, 15);
  triangle(310, 70, 295, 75, 310, 80);
  triangle(310, 70, 315, 55, 321, 70);
  triangle(321, 70, 335, 75, 321, 80);
  triangle(321, 80, 315, 95, 310, 80);

  // Sol

  line(375, 75, 375, 100);
  line(375, 75, 375, 50);
  line(375, 75, 400, 75);
  line(375, 75, 350, 75);
  line(375, 75, 400, 100);
  line(375, 75, 350, 50);
  line(375, 75, 400, 50);
  line(375, 75, 350, 100);
  ellipse(375, 75, 25, 25);

  // Cruz con ellipses

  ellipse(435, 75, 10, 40);
  ellipse(435, 75, 40, 10);

  // Anteojos

  line(480, 75, 511, 75);
  ellipse(480, 75, 15, 15);
  ellipse(511, 75, 15, 15);

  // Cristal

  quad(535, 55, 565, 65, 575, 95, 545, 85);
  line(565, 65, 545, 85);

  // 

  ellipse(615, 75, 40, 10);
  line(595, 75, 595, 55);
  line(635, 75, 635, 95);

}