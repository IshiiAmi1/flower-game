class seed{
    constructor(playerx,playery,image2) {
        this.life=1;
        this.x=playerx;
        this.y=playery;
        vx=-2+random(2);
        vy=-2+random(2);
        this.time=50;
        this.image2=image2;
    }
    update(){
        if(time>=0){
            this.x+=vx;
            vy-1;
            this.y+=vy;
            image(image2,this.x,this.y,10,10);
        }
    }


}