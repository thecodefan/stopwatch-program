//STOPWATCH PROGRAM


const display=document.getElementById("display");

let timer=null; //no val , hold ID of interval

let startTime=0;

let elapsedTime=0;

let isRunning=false;//flip to true if running


function start(){

    if(!isRunning){ //if not running
        startTime=Date.now()-elapsedTime;

        timer=setInterval(update,10); //call the update function every 10 milliseconds
        isRunning=true;
        
    }
}

function stop(){

    if(isRunning){

        clearInterval(timer); //stops the stopwatch

        elapsedTime=Date.now()-startTime; //caluclates hwen to  unpause
        isRunning=false; //necessary to restart it

    }
}

function reset(){
    
clearInterval(timer);


startTime=0;

elapsedTime=0;

isRunning=false;

display.textContent="00:00:00:00";
}

function update(){
    const currentTime= Date.now();
    elapsedTime=currentTime-startTime; //you need to turn this to a readable format
//this is in millisecnds 
    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60); //making it minute, once we hit 60, reset back to 0
    let seconds=Math.floor(elapsedTime/1000%60);
    let milliseconds=Math.floor(elapsedTime%1000 /10);
    //conver horus min secs nad millis into string before making it work

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0") //to add 0's

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}