class Sun{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
    }
    display(){
        push();
        fill("yellow");
        ellipse(this.x,this.y,this.radius);
        pop();
    }
}