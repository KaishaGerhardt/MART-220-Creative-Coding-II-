
var x = 0
var y = -200

//let xspeed = 2.8; // Speed of the shape
//let yspeed = 2.2; // Speed of the shape

//let xdirection = 1; // Left or Right
//let ydirection = 1; // Top to Bottom

function setup() {
    createCanvas(1500, 600, WEBGL);
  }
  
  function draw() {
    background(20);
    normalMaterial();

  //motion of shape
  //spherex = spherex + (spheredirectionx*spherespeed);
  //spherey = spherey + (spheredirectiony*spherespeed);


    //push();
    translate(x,y,60,0);
    rotateX(frameCount * 0.05);
    rotateZ(frameCount * 0.05);
    sphere(100)
    x++;
    y++;
    //pop();

    translate(-width/10,-height/10,0);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(40);




    //translate(-100,-100);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    //torus(100, 1, 24, 16);

  }
