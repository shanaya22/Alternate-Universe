class Planet{
    constructor(x,y,rx,ry){
        this.x=x;
        this.y=y;
        this.rx=rx;
        this.ry=ry;

    }
    display(){
        push();
        ellipse(this.x,this.y,this.rx,this.ry);
        pop();
    }
    }
