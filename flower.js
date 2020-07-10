let pushtimer;
let count;
let limit;
let timer
let x;
let y;
let vx;
let vy;

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

function setup() {
  createCanvas(400, 400);
  pushtimer=0;
  count=0;
  limit=0;
  timer=0;
  x=3;
  y=1;
  vx=0;
  vy=0;
}

function draw() {
  background(220);
    fill(0);
    timer++;
    move();
  if(mouseIsPressed==true){
    pushtimer++;
    fill(0,0,255);
    if(timer==60){
      count++;
      timer=0;
      
    }
    }
  limit=10-count;

  text('残り'+limit+'秒', 170, 70);
}
    