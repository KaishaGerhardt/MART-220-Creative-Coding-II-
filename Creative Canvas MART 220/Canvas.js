// JavaScript source code
function setup() {
    createCanvas(1518, 700);
    background(177, 242, 237 );
  }
  
  function draw() {
    stroke(0); 
    rect(1400,450,90,220);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    
    }
  }