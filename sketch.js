const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, plinko,bob;

var gameState = "PLAY";
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


var score = 0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

 


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

 
  particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  
}



function draw() {

    background(0);
  textSize(20)
  text("Score : " + score, 20, 30);

  text("2000", 20, 520)
  text("2000", 98, 520)
  text("1500", 178, 520)
  text("1000", 260, 520)
  text("500", 345, 520)
  text("500", 425, 520)
  text("1000", 500, 520)
  text("1500", 578, 520)
  text("2000", 660, 520)
  text("2000", 740, 520)

  //Score for 2000 left side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<180){
      score=score+2000
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 1500 left side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<255 && particle.body.position. x>181){
      score=score+1500
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 1000 left side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<330 && particle.body.position. x>256){
      score=score+1000
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 500 left side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<490 && particle.body.position. x>331){
      score=score+500
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 1000 right side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<570 && particle.body.position. x>491){
      score=score+1000
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 1500 right side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<650 && particle.body.position. x>571){
      score=score+1500
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

//Score for 2000 right side
if (particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if (particle.body.position.x<801 && particle.body.position. x>651){
      score=score+2000
      particle=null;
      if(count>=5)gameState="end";
    }
     }
}

if (gameState==="end"){
  textSize(50)
  text("GAME OVER",260,250)
}



  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }


  for (var i=0; i<particles.length; i++){
    particles[i].display();}


}

function mousePressed() {
  if (gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10)
     }
}