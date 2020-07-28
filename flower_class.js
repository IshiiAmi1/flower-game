class seed{
    constructor(playerx,playery) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        this.vx=-2+random(5);
        this.vy=-2+random(5);
        this.kill=false;
    }
    update(seedimage,flowerimage){
        this.seedimage=seedimage;
        this.flowerimage=flowerimage;
            this.life-=0.01;
            this.x+=this.vx;
            this.vy-1;
            this.y+=this.vy;
            if(this.life==0)  flowers.push(new flower(this.x,this.y));
        if(this.life<0) this.kill=true;
        if(this.x<0 || this.x>canvasx || this.y<0 || this.y>canvasy) this.kill=true;

    }
    draw(){
        //text("test222",101,310);
        if(! this.kill){
        image(this.seedimage,this.x,this.y,20,20);
        }   
    }
}

class flower{
    constructor(seedx,seedy){
        this.x=seedx;
        this.y=seedy;
         text("test222",101,310);
    }
    draw(flowerimage){
        this.image=flowerimage;
        image(this.image,this.x,this.y,30,30);
    }
}