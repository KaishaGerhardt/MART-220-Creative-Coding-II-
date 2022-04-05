

let img;
let x = 0 
let y = 1 // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function preload(){
  img = loadImage("DVD.png");
}

function setup() {
  createCanvas(1500, 600);
  frameRate(30);
  loadImage ("DVD.png")
}

function draw() {
  background(0);

  // Update the position of the shape
  x = x + xspeed * xdirection;
  y = y + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (x > width - [i] || x < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
}
