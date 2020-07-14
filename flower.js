let canvasx;
let canvasy;
let count;
let limit;
let timer;
let pushtimer;
let x;
let y;
let vx;
let vy;
let seedx,seedy;
let seed1;
let gameState;
let image1;

function preload(){
  image1=loadImage('image/hanasakajiisan.png');
}

function move(){

  if(vx<60){
    x=random(5);
  }else if(vx>canvasx-60){
    x=-5+random(5);
  }else if(vy<60){
    y=random(5);
  }else if(vy>canvasy-60){
    y=-5+random(5);
  }else{

  }
  if(timer==120){
    x=-5+random(5);
    y=-5+random(5);
  }
  if(timer==240){
    x=random(5);
    y=random(5);
    timer=0;
  }
  vx+=x;
  vy+=y;
  image(image1,vx,vy,90,90);
  //rect(vx, vy, 20, 20);
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
      seed1[i]=rect(seedx[i],seedy[i],20,20);
    }
    //x+=seedx[i];
    //y+=seedy[i];
  }
}

function mouseReleased(){
  
}

function drawResultScreen() {
  background(0, 192); // 透明度 192 の黒
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
  text("RESULT", width / 2, height / 2); // 画面中央にテキスト表示
  text("Tap to restart")
  if(mouseIsPressed==1){
    gameState="reset";
  }
}

function resetgame(){
  pushtimer=0;
  count=0;
  limit=0;
  timer=0;
  x=4;
  y=3;
  vx=0;
  vy=0;
  seedx=[];
  seedy=[];
  seed1=[];
}

function setup() {
  canvasx=375;
  canvasy=667;
  createCanvas(canvasx, canvasy);
  resetgame();
}

function draw() {
  background(220);
    fill(0);
    timer++;
    move();
  if(mouseIsPressed==true){
    seed();
    pushtimer++;
    fill(0,0,255);
    if(pushtimer==60){
      count++;
      pushtimer=0;
    }
    }
  limit=10-count;

  if(limit<=0){
    gameState="gameover";
       
  }
  if(gameState=="gameover"){
    drawResultScreen();
  }else if(gameState=="reset"){
    resetgame();
  }

  text('残り'+limit+'秒', 170, 70);
}