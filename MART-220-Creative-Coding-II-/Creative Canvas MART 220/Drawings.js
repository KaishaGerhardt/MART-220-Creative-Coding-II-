let symmetry = 6;   
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
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
  