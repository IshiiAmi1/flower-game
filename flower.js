let canvasx;
let canvasy;
let count;
let maxtime;
let limit;
let timer;
let pushtimer;
let x;
let y;
let vx;
let vy;
let seedtimer;
let seedx,seedy;
let movex,movey;
let lastx,lasty;
let seeds;
let flowers;
let gameState;
let image1;
let image2;
let image3;

function preload(){
  image1=loadImage('image/hanasakajiisan.png');
  image2=loadImage('image/flower.png');
  image3=loadImage('image/seed.png')
}

function move(){

  if(vx<-20){
    x=random(5);
  }else if(vx>canvasx-60){
    x=-5+random(5);
  }else if(vy<-20){
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
  
}

/*
function seed(){
    seedtimer++;
    for(i=0;i<100;i++){
      seedx[i]=-8+random(8);
      seedy[i]=-8+random(8);
      movex=vx;
      movey=vy;
      movex+=seedx[i];
      movey+=seedy[i];
      seed1[i]=rect(movex,movey,7,7);
      if(seedtimer==20){
        seedtimer=0;
        image(image2,movex,movey,10,10);
    } 
  }
}
*/

function drawResultScreen() {
  background(0, 192); // 透明度 192 の黒
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
  text("RESULT", width / 2, height / 2); // 画面中央にテキスト表示
  text("Tap to restart",width / 2, height / 4)
  if(mouseIsPressed==true){
    gameState="reset";
  }
}

//function randomnum(){
  //  switch 
//}

function resetgame(){
  pushtimer=0;
  count=0;
  maxtime=10;
  limit=0;
  timer=0;
  x=4;
  y=3;
  vx=0;
  vy=0;
  seedx=[];
  seedy=[];
  seeds=[];
  flowers=[];
  seedtimer=0;
  gameState="play";
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
    for(let i=seeds.length-1;i>=0;i--) {
        seeds[i].update(image3,image2);
        if(seeds[i].kill) seeds.splice(i,1);
       //if(seeds)
    }
    text("seednum:"+seeds.length,101,10);
    for(let i=0;i<seeds.length;i++) seeds[i].draw();
  if(mouseIsPressed==true){
    seedtimer++;
      if(seedtimer==5){
    seeds.push(new seed(vx,vy));
          seedtimer=0;
      }
    pushtimer++;
    fill(0,0,255);
    if(pushtimer==60){
      count++;
      pushtimer=0;
    }
    }
  limit=maxtime-count;

  if(limit==0){
    gameState="gameover";
       
  }
  if(gameState=="gameover"){
    drawResultScreen();
  }else if(gameState=="reset"){
    resetgame();
  }else{
    text('残り'+limit+'秒', 170, 70);
  }


}