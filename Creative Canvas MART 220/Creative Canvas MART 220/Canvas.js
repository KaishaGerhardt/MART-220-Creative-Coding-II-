// JavaScript source code
var linesmove

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
      
    lines.push(move); } for(var i = 0; i < lines.length; i++) { lines[i].updatevalues(); lines[i].draw(); }
