// JavaScript source code

var move =  new movement
var x = 100
var y = 100
var currentX = x
var currentY = y

constructor(currentX, currentY, previousX, previousY)
{
    this.currentX = currentX
    this.currentY = currentY
    this.previousX = previousX
    this.previousY = previousY
}

draw() {
line(currentX, currentY, previousX, previousY)   
}

updatevalues(){
this.currentX += random(5,10)
this.currentY += random(5,10)
this.previousX += random (5,10)
this.previousY += random (5,10)

this.currentX = currentX
this.currentY = currentY
this.previousX = previousX
this.previousY = previousY

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
    }


    function draw(){``
    if (mouseIsPressed === true) 
    line(mouseX, mouseY, pmouseX, pmouseY); var move = new Movement(mouseX, mouseY, pmouseX, pmouseY) 
        lines.push(move); } for(var i = 0; i < lines.length; i++) { lines[i].updatevalues(); lines[i].draw()/}
