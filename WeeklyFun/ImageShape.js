let img;

function setup() {
  img = loadImage("DVD.png");
  textureMode(NORMAL);
}

function draw() {
  background(200);
  texture(img)
  Box (20)
}