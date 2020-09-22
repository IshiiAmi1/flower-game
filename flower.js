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
let SEEDNUM;

function preload(){
  image1=loadImage('image/people.png');
  image2=loadImage('image/sakura.png');
  image3=loadImage('image/fubuki.png');
  image4=loadImage('image/opening.JPG');
  image5=loadImage('image/background.png');
  image6=loadImage('image/ending.JPG');
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
  image(image1,vx,vy,90,126);
  
}

function drawResultScreen() {
//background(0, 192); // 透明度 192 の黒
     image(image6,0,0,375,667);
    background(0, 130);
  fill(250);
  textSize(30);
  textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
  text("RESULT", width / 2, height / 2); // 画面中央にテキスト表示
  text("Tap to restart",width / 2, height / 4);
  //result=((30*30)*flowers.length)/(canvasx*canvasy)*100;    
    result=(flowers.length/SEED)*100;
    textSize(35);
  text("咲いた桜の数"+flowers.length+"個",width/2,height/2+100);
    acievement();
  if(mouseIsPressed==true){
      truecount++;
      if(truecount==30){
          gameState="reset";  
      }
  }
}

function acievement(){
   
    textSize(20);
    if(flowers.length>=135){
        text("天才！？桜がすごく沢山咲いた！",width/2,height/2+150);
    }else if(flowers.length<135 && flowers.length>=130){
         text("おめでとう！桜が沢山咲いた！",width/2,height/2+150);
    }else if(flowers.length<130 && flowers.length>=100){
         text("まあまあの桜が咲いた",width/2,height/2+150);
    }else if(flowers.length<100 && flowers.length>=70){
         text("んーーーー、桜がちょっと咲いた...",width/2,height/2+150);
    }else{
         text("もう少し頑張って下さい...",width/2,height/2+150);
    }
}

function startScreen(){
    image(image4,0,0,375,667);
   // background(255,184, 226,80);
     background(0, 60);
    fill(255);  
    textAlign(CENTER, CENTER); // 横に中央揃え ＆ 縦にも中央揃え
    if(mouseIsPressed==true){
        state++;
    }
    if(state==0){
          textSize(30);
          text("〜戸赤の山桜ゲーム〜", width / 2, height / 4); // 画面中央にテキスト表示
        textSize(20);
        text("たくさん桜を咲かせて下さい!\n\n\n\n✳︎音が出ます音量注意",width / 2, height / 2);
    }else if(state<=20){
        fill(255)
        text("~操作方法~",width / 2, height / 5);
        fill(255);  
        text("Tap している間灰がまかれています。\nおじいさんの動きに合わせて灰をまいて\nより多くの桜を山に咲かせてください\n灰の数や秒数が決まっているので\n頑張って下さい！",width / 2, height / 3+90);
    }else{
        resetgame();
    }
  
}

function resetgame(){
  pushtimer=0;
  count=0;
  truecount=0;
  maxtime=45;
  limit=0;
  timer=0;
  x=4;
  y=3;
  vx=0;
  vy=0;
  seeds=[];
  flowers=[];
    SEED=250;
  SEEDNUM=250;

    var i, j;
    imagearray = new Array(Math.round(canvasx/30));
        for(i = 0; i < Math.round(canvasx/30); i++) {
            imagearray[i] = new Array(Math.round(canvasy/30));
            //for(j = 0; j < canvasy; j++) {
            //imagearray[i][j] = 0;
            //}
        }
  seedtimer=0;
  textSize(15);
  gameState="play";
}

function playgame(){
    
    for(let i=seeds.length-1;i>=0;i--) {
        seeds[i].update(image3,image2);
         //if(seeds[i].state){text("111",100,100);flowers.push(new flower(seeds[i].x,seeds[i].y));}
        if(seeds[i].kill1){
            seeds.splice(i,1);
        }else if(seeds[i].kill) {
            /*
            for(let j=0;j<flowers.length;j++){
                if((seeds[i].x-flowers[j].x) <10 && (seeds[i].x-flowers[j].x) >-10 && (seeds[i].y-flowers[j].y)<10 && (seeds[i].y-flowers[j].y)>-10 ){
                    seeds[i].x+=35;
                    seeds[i].y+=35;
                }
            }
            */
            if(imagearray[Math.round((seeds[i].x)/30)][Math.round((seeds[i].y)/30)]!=1){
                imagearray[Math.round((seeds[i].x)/30)][Math.round((seeds[i].y)/30)]=1;
                flowers.push(new flower(seeds[i].x,seeds[i].y));
                
            }else{
                //flowers.splice(i,1); 
               // text("test222",101,310);
            }
            
           // flowers.push(new flower(seeds[i].x,seeds[i].y));
            seeds.splice(i,1);
        }else{
        }
        
    }
    text("残りの灰:"+SEEDNUM,60,10);
    for(let i=0;i<seeds.length;i++) seeds[i].draw();
    for(let i=0;i<flowers.length;i++) flowers[i].draw(image2);
    //text("flowernum:"+flowers.length,101,50);
    move();
    if(mouseIsPressed==true){
        
        seedtimer++;
        if(seedtimer==5 && SEEDNUM>0){
            SEEDNUM--;
            seeds.push(new seed(vx,vy));
            seedtimer=0;
        }
        pushtimer++;
        if(pushtimer==20){
           // music.play();
            pushtimer=0;
        }
        //fill(0,0,255);
     }
    
    if(timer==60){
            count++;
            timer=0;
        }
    limit=maxtime-count;

    if(limit==0 || SEEDNUM==0){
        gameState="gameover";   
    }
}



function setup() {
  canvasx=375;
  canvasy=667;
　//image(image5,50,500,375,667);
  createCanvas(canvasx, canvasy);
  gameState="start";
 
}

function draw() {
 // background(220);
    image(image5,0,0,375,667);
    fill(0);
   
  if(gameState=="gameover"){
      drawResultScreen();
  }else if(gameState=="reset"){
    resetgame();
  }else if(gameState=="start"){
      startScreen();
  }else{
      timer++;
      playgame();
    text('残り'+limit+'秒', 330, 10);
  }


}