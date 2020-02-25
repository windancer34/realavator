//Please click the sketch to see the picture
// for red, green, and blue color values
let r, g, b;
let counter=0;
let mic;
let miclevel;
let x, y;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  mic=new p5.AudioIn();
  mic.start();
  createCanvas(400, 400);
  background(230);
  // Starts in the middle
  x = width / 2;
  y = height;
  
  push();
  //move to new zero point 140,90
  translate(140,90);
  //rotate(60)
  rotate(30);
  rect(10,-100,20,50);
  pop();
}

//draw of face and body
function draw() {
  miclevel = mic.getLevel();
  fill(236, 188, 180)
  ellipse(200, 200, 350, 320);
    // Draw a circle
  push();
  stroke(x,y,200);
  fill(x,y,x,20);
  ellipse(x-100, y, 14, 14);
   ellipse(x-50, y, 34, 34);
   ellipse(x-200, y, 44, 44);
  ellipse(x+200, y+20, 54, 54);
  ellipse(x+100, y+10, 24, 24);
  ellipse(x+150, y+10, 64, 64);
  ellipse(x+270, y+10, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  pop();
  //draw of eyes
  push();
  fill(100);
  ellipse(100, 150, 50, 50);
  ellipse(300, 150, 50, 50);
  pop();
  //draw of eyes dots
  push();
  fill(255);
  noStroke();
  let mylevel = map(miclevel, 0, 0.5, 90, 130);
  let mylevel2 = map(miclevel, 0, 0.5, 300, 210);
  ellipse(mylevel+20, 140, 10, 10);
  ellipse(mylevel2+20, 145, 10, 10);
  pop();
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(200, 250, 100, 50);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 500) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  //draw of city
  push();
  if (mouseIsPressed) {fill(15,0,0,50);
     rect(mouseX, mouseY, mouseX, mouseY);
     } else {
       fill(190, 17, 0)
     rect(mouseX, mouseY, mouseX, mouseY);
       pop();
}
//draw of feet
  push();
  fill(50, 63, 86)
  ellipse(100, 330, 120, 60);
  ellipse(300, 330, 120, 60);
  pop();
  

//draw of hands
  push();
  fill(161, 102, 94);
 
  stroke(120);strokeWeight(5);   
  arc(45, 200, 30,150,100,90);
  arc(360, 200, 30,150,100,90);
   pop();
  push();
   beginShape();
 

//draw of hat
  
  stroke(1, 57, 78);
  strokeWeight(50);    
  vertex(200, 40);  
  vertex(120, 70);
  vertex(280, 60);
     //add more vertex
  
endShape(CLOSE); 
  
  fill(0); 
  line(90,85,300,75);
    pop();



  
    
      // fill(255);
  
  if (true) {
    counter++;
      }
  
  console.log(miclevel);
  //pop();
  
}


