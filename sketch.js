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

    for(var i=0;i<entities.length;i++){
        entities[i].update();
        entities[i].draw();
    }
}


function touchStarted(){
    entities.push(new Entity());
}
