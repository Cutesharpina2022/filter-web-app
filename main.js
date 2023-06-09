nosex = 0;
nosey = 0;

function preload(){
  img = loadImage('https://i.postimg.cc/gJb91n3c/moustache-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300 );
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,50,20);
}

function takeSnapshot(){
    save('myFilter.png');
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
     
       if (results.length  > 0 )
       {
         console.log(results);
         nosex = results[0].pose.nose.x - 25;
         nosey = results[0].pose.nose.y + 5;
        console.log('nose x =' + results[0].pose.nose.x);
        console.log('nose y =' + results[0].pose.nose.y);
       }
    
    }

    
