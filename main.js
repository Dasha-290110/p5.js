function preload(){

}

function setup(){
canvas=createCanvas(600,300);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide()

}

function draw(){
    image(video,0,0,600,300);
    fill(0,128,0);
    stroke(0,128,0);
    circle(30,30,40);

}

function take_snapshot(){
    save('your_clicked_pic.png');
}

