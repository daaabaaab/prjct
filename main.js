function preload()
{

}

function setup()
{
canvas=createCanvas(550,550);
canvas.position(500,100);
video=createCapture(VIDEO);
video.size(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet has been intiallized');
}

function draw()
{
background("blue");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
}