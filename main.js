function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,200,120,220,200);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,350,80);
    circle(550,50,80);
    circle(550,350,80);
    

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90,40,420,20);

    rect(90, 340, 420, 20);

    rect(40,90,20,220);

    rect(540,90,20,220);
}