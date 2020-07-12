let canvasx;
let canvasy;
let count;
let limit;
let timer
let x;
let y;
let vx;
let vy;
let seedx,seedy;
let seed1;


function move(){
    if(timer==120){
    x=-5+random(5);
    y=-3+random(3);
    }
  if(timer==240){
     x=random(5);
     y=random(3);
    timer=0;
    }
  vx+=x;
  vy+=y;
  rect(vx, vy, 20, 20);
}

/*
function drawseed(particle) {
  push();
  noStroke();
  fill(255);
  square(particle.x, particle.y, 10);
  pop();
}
*/

function seed(){
  if(timer==20){
    for(i=0;i<100;i++){
      seedx[i]+=-8+random(8);
      seedy[i]+=-8+random(8);
      seed1[i]=rect(seedx,seedy,20,20);
    }
    //x+=seedx[i];
    //y+=seedy[i];
  }
}

function setup() {
  canvasx=375;
  canvasy=667;
  createCanvas(canvasx, canvasy);
  pushtimer=0;
  count=0;
  limit=0;
  timer=0;
  x=3;
  y=1;
  vx=0;
  vy=0;
  seedx=[];
  seedy=[];
  seed1=[];
}

function draw() {
  background(220);
    fill(0);
    timer++;
    move();
  if(mouseIsPressed==true){
    seed();
    fill(0,0,255);
    if(timer==60){
      count++;
      timer=0;
    }
    }
  limit=10-count;

  text('残り'+limit+'秒', 170, 70);
}