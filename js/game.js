var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bg = new Image();
var delor = new Image();

delor.src = "../img/delor.png"
bg.src = "../img/bg.png"

//нажаите на клавишу
document.addEventListener("keydown", moveUp);
document.addEventListener ("tap", moveUp);

document.addEventListener('tap', function(e){
    console.log('TAP - catched on document');
 }, true);
 
function moveUp(){
    yPos -=20;
}

//позиция машины
var xPos= 0;
var yPos= 520;
function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(delor, xPos, yPos)
    requestAnimationFrame(draw)
}

delor.onload= draw;