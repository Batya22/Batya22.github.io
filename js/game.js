var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image();
var delor = new Image();

delor.src = "../img/delor1.png"
bg.src = "../img/bg.png"

//нажатие на клавишу
document.addEventListener("keydown", moveUp);
document.addEventListener ("touchstart", moveUp)
// аудио
var music = new Audio();

music.src = "../audio/NC.mp3"
function moveUp(){
    yPos -=20;
}


//позиция машины
var xPos= 0; 
var yPos= 520;
function draw() {
   // ctx.drawImage(bg, 0, 0);
    ctx.drawImage(delor, xPos, yPos)
    music.play();
    requestAnimationFrame(draw)
}

delor.onload= draw; 
// создание экземпляра движка
