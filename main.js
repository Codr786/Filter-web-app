function preload(){
    lip_filter=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
    
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.position(570,200);
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(lip_filter,noseX-17,noseY+10,30,30)
}
function take_snapshot(){
    save('myFILTERImage.png')
}
function modelLoaded(){
    console.log('poseNet Is Initializing');
}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
noseX=0;
noseY=0;