let symmetry = 6;   
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton, animationButton;
let slider;

function setup() { 
createCanvas(1518, 700);
  angleMode(DEGREES);
  background(177, 242, 237);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);

  // Creating the button for animating drawing
  animationButton = animation('Bring to Life')
  animationButton.mouseIsPressed(Animation)
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background(177, 242, 237);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

// Brush Size Slider
function brushSizeSlider(){
let sizeSlider = createSlider (1 , 32, 4, 0.1) 
}

//Animation Button
function Animation() {
    let animating = AnimationEffect (mouseX, mouseY, pmouseX, pmouseY)
}

var movement
var movementObjects = []

function draw() {
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        console.log(mouseX)
        movement = new Movement (mouseX, mouseY, pmouseX, pmouseY)
        movementObjects.push(movement)
       // movement.updatevalues()
     //   movement.draw()
      }
      for(var i = 0; i< movementObjects.length; i++){
        movementObjects[i].updatevalues()
        movementObjects[i].draw()
      }
  }
  

//Moving sprites
var ghost, circle;
var direction = 90; //circle initial direction moving down

function setup() {
  createCanvas(800, 400);

  //create the sprites
  ghost = createSprite(600, 200, 50, 100);
  ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');

  circle = createSprite(400, 200, 50, 100);
  circle.addAnimation('floating', 'assets/asterisk_circle0006.png', 'assets/asterisk_circle0008.png');

}

function draw() {
  background(255, 255, 255);
  //aside of setting the velocity directly you can move a sprite
  //by providing a speed and an angle
  direction += 2;
  //speed, angle
  circle.setSpeed(3, direction);

  //you can rotate the sprite according the direction it is moving
  //uncomment this
  //circle.rotateToDirection = true;

  //or by applying a force toward a point
  //force (acceleration), pointx, pointy
  ghost.attractionPoint(0.2, mouseX, mouseY);
  //since the force keeps incrementing the speed you can
  //set a limit to it with maxSpeed
  ghost.maxSpeed = 5;

  //draw the sprite
  drawSprites();
}
