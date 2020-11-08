 class Alex1 extends Baseclass{
    constructor(x,y,width,height){
       super(x,y,width,height)
        this.image=loadImage("Aleximage/GraveRobber.png");
        
       
    }
    

  display(){

    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,50,50);
  }   
  
  moveForward(){
      this.body.position.x = this.body.position.x + 10;
      this.runningimage=loadAnimation("Aleximage/GraveRobber_walk.png");
      runningimage(this.runningimage, this.body.position.x, this.body.position.y,50,50);
    }
      moveBackward(){
      this.body.position.x=this.body.position.x-10;
    }
    
    Jump(){
      this.body.position.y=this.body.position.y-30 ;
      this.body.position.y=this.body.position.y+25 ;
     }
}

