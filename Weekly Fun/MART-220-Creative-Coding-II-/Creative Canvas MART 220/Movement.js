//Movement of lines

var move =  []
var lines
var x = 100
var y = 100
var currentX = x
var currentY = y

class Movement{

    constructor(currentX, currentY, previousX, previousY)
    {
        this.currentX = currentX
        this.currentY = currentY
        this.previousX = previousX
        this.previousY = previousY
    }

 draw() {
  line(this.currentX, this.currentY, this.previousX, this.previousY)   
    }
    
updatevalues(){
    this.currentX += random(10,10) 
    this.currentY += random(10,10)
    this.previousX += random (10,10)
    this.previousY += random (10,10)

}
}