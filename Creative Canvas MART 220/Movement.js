class Movement{

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

}

}

function draw(){
    if (mouseIsPressed === true) 
    line(mouseX, mouseY, pmouseX, pmouseY); var move = new Movement(mouseX, mouseY, pmouseX, pmouseY) 
        lines.push(move); } for(var i = 0; i < lines.length; i++) { lines[i].updatevalues(); lines[i].draw();

}