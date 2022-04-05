var x = -300
var y = -300
var rotateSpeed = .01;
var Garfieldx = 10;
var Garfieldy = 10;

var Garfieldx2 = 200;
var Garfieldy2 = 200;

function preload() {
  // Load model with normalise parameter set to true
  Garfield = loadModel('GarfieldQuad_Sphere.stl', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  
  push();
  //background(0); 
  translate(-x,-y,0);
  scale(1); // Scaled to make model fit into canvas
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.03);
  normalMaterial(); // For effect
  model(Garfield);
  x++;
  y++;
  pop();
  
  translate(-width/10,-height/10,0);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(10);

    translate(-width/-10,-height/10,0);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(10);

    translate(-width/-10,-height/10,0);
    scale(.5); // Scaled to make model fit into canvas
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); // For effect
    model(Garfield);
}