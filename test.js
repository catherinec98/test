function setup() {
  // put setup code here
  createCanvas(1280,720);
  //put backgroiund here to have repeat images
  //background(0,200,200);
}

function draw() {
  // put drawing code here
  //put background here so it refreshes and only shows one image
  //fourth background number is opacity
  background(0,300,100,20);
  //numbers are the color for both background and stroke (stroke can take 3 digits as well)
  stroke(200,100,255);
  strokeWeight(2);
  //ellipse(x,y,width,height)
  //mouse numbers will make the circle follow you
  ellipse(mouseX,mouseY,100,80)
}
