var img;
var names = [];
var myImage;
var i = 0;
var imagesToDisplay = [];
var imageClassObject;
function preload()
{
	// read in the file
	names = loadStrings("./assets/designs jpegs");
	
	img = loadImage("./assets/designs jpegs/design.jpg");
	imageClassObject = new imageclass(img, 100,100, 335, 235);
	imagesToDisplay[0] = imageClassObject;
	img = loadImage("./assets/designs jpegs/design(1).jpg");
	imageClassObject = new imageclass(img, 100,100, 335, 235);
	imagesToDisplay[1] = imageClassObject;
	img = loadImage("./assets/designs jpegs/design(2).jpg");
	imageClassObject = new imageclass(img, 100,100, 335, 235);
	imagesToDisplay[2] = imageClassObject;
	img = loadImage("./assets/designs jpegs/design(3).jpg");
	imageClassObject = new imageclass(img, 100,100, 335, 235);
	imagesToDisplay[3] = imageClassObject;
	img = loadImage("./assets/designs jpegs/design.jpg(4)");
}

function setup()
{
	createCanvas(displayWidth, displayHeight);
	
	// go through the file names 
	for(var k = 0; k < names.length; k++)
	{
		// load the image
		img = loadImage("./assets/designs jpegs/" + names[k]);
		// create an object from our image class
		imageClassObject = new imageclass(img, 100,100, 335, 235);
		// add each object to the array
		imagesToDisplay[k] = imageClassObject;
	}
	//console.log("blah: " + names.length);
	setInterval(changeTheDarnAnimation, 100);
}

function draw(){
	background(240);
	
	//for(var i = 0; i < imagesToDisplay.length; i++)
	//{
	//	console.log("HI");
		// display the image on the screen - iterate over the 
		// images to display
		image(imagesToDisplay[i].getImage(),
		imagesToDisplay[i].getX(), 
		imagesToDisplay[i].getY(), 
		imagesToDisplay[i].getW(),
		imagesToDisplay[i].getH());
		
		
		//}
	
}

function changeTheDarnAnimation()
{
	//console.log("I am here..");
	// this increments our frames to display in the animation
	i+=1;
	// check to see if we have gone beyond the size of the array
	if(i >= imagesToDisplay.length)
	{
		// reset to the first index of the array
		i = 0;
	}

	// this updates the x of all the images in the array for smooth movement
	for(var m = 0; m < imagesToDisplay.length; m++)
	{
		imagesToDisplay[m].moveX(10);
	}
	
	
	
	
}