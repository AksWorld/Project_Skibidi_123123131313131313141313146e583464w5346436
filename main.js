console.log("wrong");
function setup(){
    console.log("wrong");
    video=createCapture(VIDEO);
    video.size(550,500);


    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("right it is correct right");
}
function draw(){
    background('#969A97');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
