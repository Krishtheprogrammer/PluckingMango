class stone{
    constructor(x,y,r){
     var options={
         isStatic:true,
         friction:1,
         density:1.5
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.image=loadImage("Rock.png");
     this.body=Bodies.circle(this.x,this.y,this.r/2,options);
     World.add(world,this.body);
    }

    display(){
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     rotate(this.body.angle)
     ellipseMode(CENTER)
     imageMode(CENTER)
     image(this.image,0,0,this.r*2,this.r*2)
     pop()
    }
}