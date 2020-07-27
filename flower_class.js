class seed{
    constructor(playerx,playery) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        this.vx=-2+random(2);
        this.vy=-2+random(2);
        //this.time=50;
        text("test",101,10);
        
    }
    update(seedimage,flowerimage){
        this.seedimage=seedimage;
        this.flowerimage=flowerimage;
            //text("test111",101,210);
            this.life-=0.05;
            this.x+=this.vx;
            this.vy-1;
            this.y+=this.vy;
    }
    draw(){
        //text("test222",101,310);
        if(this.life>0){
        image(this.seedimage,this.x,this.y,20,20);
        }else{
        image(this.flowerimage,this.x,this.y,20,20);
        }
    }


}