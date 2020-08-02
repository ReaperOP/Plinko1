Matter.constraint = bodies.constraint
var particles = []
var plinkos =[]
var divisions = []

var divisionHeight = 300

function setup() {
  createCanvas(480,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

for(var k = 0; k<=innerWidth;k = k+80){
divisions.push(new Divisions(k,height - 300/2 ,10 , 300))
}

for(var j = 40;j <=innerWidth; j=j+50){
  plinkos.push(new plinkos(j,75))
}

for(var j =15; j<=width- 10; j=j+50){
  plinkos.push(new plinkos(j,175))
}

for(var j = 0; j<particles.length; j++){
  particles[j].display();
}

for(var k = 0;k< divisions.length;k++){
  divisions[k].display();
}
  drawSprites();
}