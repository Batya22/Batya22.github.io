var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var car = document.getElementById("car");
var carx = car.getContext("2d");

var score = document.getElementById("score");
var scorex = score.getContext("2d");

/* var count1 = document.getElementById("count1");
var count1x = count1.getContext("2d"); */



var bg = new Image();
var delor = new Image();
var fire = new Image();
var score = 0;
var kol= 0;

delor.src = "../img/delor1.png"
bg.src = "../img/bg.png"
//y8.src = "../img/y8.png"

//нажатие на клавишу
document.addEventListener("keydown", start);
//document.addEventListener ("touchstart", moveUp)
// аудио
var music = new Audio();
var beginmusic = new Audio();
var endmusic = new Audio();
var midmusic = new Audio();

music.src = "../audio/intcut.mp3"
beginmusic.src = "../audio/begin.mp3"
endmusic.src = "../audio/end.mp3"
midmusic.src = "../audio/mid.mp3"
function moveUp(){
    xPos +=2;
}

function start(){
    xPos -=6;
    score++;
    
    window.setInterval(function () {
        if (!this.a || this.a < 0) this.a = 30000; //ширина img
        else this.a--;
        document.getElementById("canvas").style.backgroundPosition = this.a + "px 210px" //высота, можно в %%, если родительский элемент тоже в %
        //beginmusic.play();
       
        

        
        
    }, xPos ); //скорость
   write();
   if (score ==44){

    
    var img = new Image();
    img.onload = function() {
    carx.drawImage(img, 0, 8, 80, 80);
  };
  img.src = '../img/y8.gif';
   }
   if (score ==66){

    var img = new Image();
    img.onload = function() {
    carx.drawImage(img, 100, 30, 60, 60);
  };
  img.src = '../img/y8.gif';
   }
   if (score ==88){
    var img = new Image();
    img.onload = function() {
    carx.drawImage(img, 0, -30, 300, 300);
  };
  img.src = '../img/y11.gif';
   }
}
function write(){
 
 scorex.fillStyle = "#f00";
 scorex.font = "24px Arial";
 scorex.clearRect(10, 30, 100, 100);
 scorex.fillText( score + " mph", 40 , 120 )
 
 
 //requestAnimationFrame(write)
}
//позиция машины
var xPos= 0; 
var yPos= 30; 

function draw() {
   // ctx.drawImage(bg, 0, 0);
   
    carx.drawImage(delor, 0, yPos,200, 60)
    
    window.setInterval(function () {
        if (!this.a || this.a < 0) this.a = 30000; //ширина img
        else this.a--;
        document.getElementById("canvas").style.backgroundPosition = this.a + "px 210px" //высота, можно в %%, если родительский элемент тоже в %
        //music.play();
    }, 10 ); //скорость
    
    
   
    // requestAnimationFrame(draw)
   
}


if (delor.onload = draw){
    
   //music.play();
} 

// создание экземпляра движка





