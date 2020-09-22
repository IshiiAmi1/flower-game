class seed{
    constructor(playerx,playery) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        this.vx=-2+random(5);
        this.vy=-2+random(5);
        this.kill=false;
        this.kill1=false;
        this.kill2=false;
    }
    update(seedimage,flowerimage){
        this.seedimage=seedimage;
        this.flowerimage=flowerimage;
            this.life-=0.05;
            this.x+=this.vx;
            this.vy-1;
            this.y+=this.vy;
         
        if(this.life<0) this.kill=true; 
        if(this.x<-15 || this.x>canvasx-15 || this.y<130 || this.y>canvasy-15) this.kill1=true;
      //  if(this.kill && this.y<130) this.kill2=true;
    }
    draw(){
     
        if(! this.kill){
        image(this.seedimage,this.x,this.y,40,40);
        }   
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