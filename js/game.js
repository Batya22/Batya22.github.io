var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var car = document.getElementById("car");
var carx = car.getContext("2d");

var bg = new Image();
var delor = new Image();

delor.src = "../img/delor1.png"
bg.src = "../img/bg.png"

//нажатие на клавишу
//document.addEventListener("keydown", moveUp);
//document.addEventListener ("touchstart", moveUp)
// аудио
var music = new Audio();

music.src = "../audio/intcut.mp3"
function moveUp(){
    yPos -=20;
}


//позиция машины
var xPos= 0; 
var yPos= 30;

function draw() {
   // ctx.drawImage(bg, 0, 0);
   
    carx.drawImage(delor, xPos, yPos,200, 60)
    
    window.setInterval(function () {
        if (!this.a || this.a < 0) this.a = 30000; //ширина img
        else this.a--;
        document.getElementById("canvas").style.backgroundPosition = this.a + "px 210px" //высота, можно в %%, если родительский элемент тоже в %
       
    }, 100); //скорость
    
   
    requestAnimationFrame(draw)
   
}

if (delor.onload = draw){
    alert("включи звук, но не громко")
   music.play();
} 

// создание экземпляра движка
