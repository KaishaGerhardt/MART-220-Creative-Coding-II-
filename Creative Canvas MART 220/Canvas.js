// JavaScript source code
var img;
function preload() {
  img = loadImage('./assets/WorminCar.png');

}
function setup() {
    createCanvas(1518, 700);
    background(177, 242, 237 );
  }
  function draw() {
    //stroke(0); 
    //rect(1400,450,90,220);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      var move = new Movement(mouseX, mouseY, pmouseX, pmouseY)
move.updatevalues()
move.draw()


    }
    image(img, 0, 0);
   
  }
  