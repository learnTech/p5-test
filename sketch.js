var entities = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    entities.push( new Entity() );
}

function draw() {
    fill(255);
    stroke(255);
    background(51);

    textAlign(LEFT);
    text(width+"/"+height, 10, 20);
    text(round(frameRate())+" FPS", width-50, 20);

    textAlign(CENTER);
    text(entities.length, width/2, 20);

    for(var i=0;i<entities.length;i++){
        entities[i].update();
        entities[i].draw();
    }
}

function touchStarted(){
    entities.push(new Entity());
    return false;
}
function touchEnded(){
    return false;
}
function mouseClicked(){
    return false;
}
