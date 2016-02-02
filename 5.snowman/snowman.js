//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  background(3,12,255);
//body
  fill(255);
  strokeWeight(4);
  stroke(150);
  ellipse(200,500,250,250);
  ellipse(200,350,200,200);
  ellipse(200,200,150,150);

//nose
  fill(255,150,0);
  triangle(210,205,190,205,200,230);

//eyes
  fill(0);
  strokeWeight(2);
  ellipse(180,190,10,10);

  fill(0);
  strokeWeight(2);
  ellipse(220,190,10,10);

//buttons
  fill(0);
  strokeWeight(2);
  ellipse(200,325,15,15);

  fill(0);
  strokeWeight(2);
  ellipse(200,375,15,15);

//hat

  color("black");
  line(150,100,300,190);
  //your drawing goes here

}
