var entities = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    entities.push( new Entity() );
}

function draw() {
    fill(255);
    stroke(255);
    background(51);

    text(width+"/"+height, 10, 20);
    text(round(frameRate())+" FPS", width-50, 20);

    for(var i=0;i<entities.length;i++){
        entities[i].update();
        entities[i].draw();
    }
}

function touchStarted(){
    return false;
}
function touchEnded(){
    return false;
}

function mouseClicked(){
    entities.push(new Entity());
    return false;
}
