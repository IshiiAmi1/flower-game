let canvasx;
let canvasy;
let imagearray;
let count;
let truecount;
let maxtime;
let limit;
let timer;
let pushtimer;
let x;
let y;
let vx;
let vy;
let seedtimer;
let seeds;
let flowers;
let gameState;
let state=0;
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

function drawResultScreen() {
  background(0, 192); // 透明度 192 の黒
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
  text("RESULT", width / 2, height / 2); // 画面中央にテキスト表示
  text("Tap to restart",width / 2, height / 4);
  result=((30*30)*flowers.length)/(canvasx*canvasy)*100;    
    textSize(40);
  text(result.toFixed()+"%",width/2,height/2+100);
    acievement();
  if(mouseIsPressed==true){
      truecount++;
      if(truecount==20){
          gameState="reset";  
      }
  }
}

function acievement(){
    textSize(20);
    if(result.toFixed()>=90){
        text("天才！？藤の花がすごく沢山咲いた！",width/2,height/2+150);
    }else if(result.toFixed()<90 && result.toFixed()>=60){
         text("おめでとう！藤の花が沢山咲いた！",width/2,height/2+150);
    }else if(result.toFixed()<60 && result.toFixed()>=40){
         text("まあまあの藤の花が咲いた",width/2,height/2+150);
    }else if(result.toFixed()<40 && result.toFixed()>=20){
         text("んーーーー、藤の花がちょっと咲いた...",width/2,height/2+150);
    }else{
         text("もう少し頑張って下さい...",width/2,height/2+150);
    }
}

function startScreen(){
    background(255,184, 226,80);
    fill(255);  
    textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
    if(mouseIsPressed==true){
        state++;
    }
    if(state==0){
          textSize(30);
          text("〜戸赤のやまざくらゲーム〜", width / 2, height / 4); // 画面中央にテキスト表示
        textSize(20);
        text("たくさんの花を咲かせて下さい!",width / 2, height / 2);
    }else if(state==1){
        text("~操作方法~",width / 2, height / 5);
        
        text("Tap している間種がまかれています。\n",width / 2, height / 3+50);
        text("おじいさんの動きに合わせて種をまいて",width / 2, height / 3+70);
        text("より多くの花を咲かせてください",width / 2, height / 3+90);
    }else{
        resetgame();
    }
  
}

function resetgame(){
  pushtimer=0;
  count=0;
  truecount=0;
  maxtime=15;
  limit=0;
  timer=0;
  x=4;
  y=3;
  vx=0;
  vy=0;
  seeds=[];
  flowers=[];
  seedtimer=0;
  textSize(15);
  gameState="play";
}

function playgame(){
    timer++;
    
     for(let i=seeds.length-1;i>=0;i--) {
        seeds[i].update(image3,image2);
         //if(seeds[i].state){text("111",100,100);flowers.push(new flower(seeds[i].x,seeds[i].y));}
        if(seeds[i].kill1){
            seeds.splice(i,1);
        }else if(seeds[i].kill) {
            for(let j=0;j<flowers.length;j++){
                if((seeds[i].x-flowers[j].x) <10 && (seeds[i].x-flowers[j].x) >-10 && (seeds[i].y-flowers[j].y)<10 && (seeds[i].y-flowers[j].y)>-10 ){
                    seeds[i].x+=35;
                    seeds[i].y+=35;
                }
            }
            flowers.push(new flower(seeds[i].x,seeds[i].y));
            
            seeds.splice(i,1);
        }else{
        }
        
    }
    //text("seednum:"+seeds.length,101,10);
    for(let i=0;i<seeds.length;i++) seeds[i].draw();
    for(let i=0;i<flowers.length;i++) flowers[i].draw(image2);
    //text("flowernum:"+flowers.length,101,50);
    move();
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
}

function setup() {
  canvasx=375;
  canvasy=667;
  createCanvas(canvasx, canvasy);
  gameState="start";
  imagearray[canvasx/10][canvasy/10];
    for(let i=0;i<canvasx/10;i++){
        for(let j=0;j<canvasy/10;j++){
            imagearray[i][j]=0;
        }
    }
 // startScreen();
 // resetgame();
}

function draw() {
  background(220);
    fill(0);
   
  if(gameState=="gameover"){
      drawResultScreen();
  }else if(gameState=="reset"){
    resetgame();
  }else if(gameState=="start"){
      startScreen();
  }else{
      playgame();
    text('残り'+limit+'秒', 170, 70);
  }


}