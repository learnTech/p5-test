function Entity(){
    this.x = random(width-20);
    this.y = random(height-20);

    this.xSpd = 2;
    this.ySpd = 2;

    this.update = function(){
        this.x += this.xSpd;
        this.y += this.ySpd;

        if(this.x > width-20 || this.x < 0){
            this.xSpd = -this.xSpd;
        }

        if(this.y > height-20 || this.y < 0){
            this.ySpd = -this.ySpd;
        }
    }

    this.draw = function(){
        rect(this.x, this.y, 20, 20);
    }
}
