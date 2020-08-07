class seed{
    constructor(playerx,playery) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        this.vx=-2+random(5);
        this.vy=-2+random(5);
        this.kill=false;
        this.kill1=false;
        //this.state=false;
    }
    update(seedimage,flowerimage){
        this.seedimage=seedimage;
        this.flowerimage=flowerimage;
            this.life-=0.05;
            this.x+=this.vx;
            this.vy-1;
            this.y+=this.vy;
          //  if(this.life<0){ this.flag=1;}
          /*if(this.life==0){this.state=true;
            this.lastx=this.x;
            this.lasty=this.y;
          }*/
        if(this.life<0) this.kill=true; 
        if(this.x<-15 || this.x>canvasx-15 || this.y<-15 || this.y>canvasy-15) this.kill1=true;

    }
    draw(){
        //text("test222",101,310);
        if(! this.kill){
        image(this.seedimage,this.x,this.y,20,20);
        }   
        //if(this.state){text("test222",101,310);  flowers.push(new flower(this.x,this.y));}
    }
}

class flower{
    constructor(seedx,seedy){
        this.x=seedx;
        this.y=seedy;
    }
    draw(flowerimage){
        this.image=flowerimage;
        image(this.image,this.x,this.y,30,30);
    }
}