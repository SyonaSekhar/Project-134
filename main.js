img="";
status = "";
objects =[];
song ="";
function preload(){
  song=loadSound("Abyss Song Download Mp3 BTS.mp3");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center()
   video=createCapture(VIDEO);
   video.size(380,380);
   video.hide();
}

function draw(){

    image(video,0,0,380,380);
     if (status != ""){
      r=random(255);
      g=random(255);
      b=random(255);
      objectDetector.detect(video, gotResult);
     }
     if (objects[i].label=="person") {
       document.getElementById("baby_presence").innerHTML = "Baby Found";
       console.log("stop");
        song.stop(); }
         else { document.getElementById("baby_presence").innerHTML = "Baby Not Found";
          console.log("play");
           song.play(); } 
          } if(objects.length == 0) { document.getElementById("baby_presence").innerHTML = "Baby Not Found";
           console.log("play");
            song.play(); } 
     

function modelLoaded(){

  console.log("Model Loaded!");
  status = true;
}

function gotResult(error, results) {

  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

