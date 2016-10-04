// Emilie Pitre ©2016 hw6
//"Setting"

var img1; //high sun
var img2; //low sun
var img3; //no sun
var img4; //bright dune
var img5; //med dune
var img6; //dark dune
var img7; //clouds
var img8; //clouds
var img9; //clouds
var mouseX
var mouseY

function preload() {
  img1 = loadImage("images/sun1.png");
  img2 = loadImage("images/sun2.png");
  img3 = loadImage("images/sun3.png");
  img4 = loadImage("images/dunes1.png");
  img5 = loadImage("images/dunes2.png");
  img6 = loadImage("images/dunes3.png");
  img7 = loadImage("images/clouds1.png");
  img8 = loadImage("images/clouds2.png");
  img9 = loadImage("images/clouds3.png");
}

function setup() {
  createCanvas(560, 360);
  textSize(28);
  textFont("Arial");
}

function draw() {
  if(mouseY <= 200){
    image(img1, 0, 0);
    image(img4, 0, 0);
  } else if (mouseY > 200 && mouseY <= 360) {
    image(img2, 0, 0);
    image(img5, 0, 0);
  } else if (mouseY > 360) {
    image(img3, 0, 0);
    image(img6, 0, 0);
  }

  push();
  scale(0.5, 0.5)
    image(img9, 300 + mouseX/10, 180);
    image(img8, 100 + (mouseX/10), 200);
  pop();

  image(img9, 300 + mouseX/6, 10);
  image(img8, -300 + mouseX/6, 10);
  image(img9, -140 + mouseX/4, -100);
  image(img7, 140 + mouseX/5, -60);
  image(img7, -200 + mouseX/4, -50);

  fill(100, 50, 150, 150);
  stroke(255, 10);
  strokeWeight(3);
  text("time", -50 + mouseX/2, 80);
  text("and", -80 + mouseX, 110);
  text("tides", -110 + mouseX/2, 140);
  text("both", -140 + mouseX, 170);
  text("endlessly", -170 + mouseX/2, 200);
  text("flow", -200 + mouseX, 230);

  // image(img7, -500 + mouseX/2, -70);

}
