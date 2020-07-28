class seed{
    constructor(playerx,playery) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        this.vx=-2+random(5);
        this.vy=-2+random(5);
        this.kill=false;
        //this.seedtimer=0;
        //this.time=50;
        //text("test",101,10);
        
    }
    update(seedimage,flowerimage){
        this.seedimage=seedimage;
        this.flowerimage=flowerimage;
            //text("test111",101,210);
            this.life-=0.01;
            this.x+=this.vx;
            this.vy-1;
            this.y+=this.vy;
            //this.lastx=this.x;
            //this.lasty=this.y;
            //this.seedtimer++;
            if(this.life==0)  flowers.push(new flower(seeds[i].x,seeds[i].y));
        if(this.life<=0) this.kill=true;
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
    }
    draw(flowerimage){
        this.image=flowerimage;
        image(this.image,this.x,this.y,30,30);
    }
}