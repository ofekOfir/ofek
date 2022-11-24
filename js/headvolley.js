const canvas = document.getElementById("canvas");
c = canvas.getContext("2d");
let ball = document.getElementById("ball");
let ofek = document.getElementById("ofek");
let bar = document.getElementById("bar");
const boing=new Audio("../audio/jump.mp3");
const ballhit=new Audio("../audio/ballhit.mp3");
const Fatality=new Audio("../audio/fatality.mp3");
const over9000=new Audio("../audio/over9000.mp3");
const barwinner=new Audio("../audio/barwins.mp3");
const ofekwinner=new Audio("../audio/ofekwins.mp3");
const yamazun=new Audio("../audio/yamazun.mp3");
let ofekX = 800;
let ofekY = 400;
let barX = 200;
let barY = 400;
let ofekSpeed = 0;
let ofekUp = 0;
let barUp = 0;
let ballY = 100;
let ballSpeedY = 5;
let ballSpeedX = -5;
let ballX = 560;
let ballStart = -5;
let ballUp = 0;
let barScore = 0;
let ofekScore = 0;
let ofekWon = 0;
let barWon = 0;
let abar = 0;
let aofek = 0;


// window.addEventListener('load',draw);
window.addEventListener('load', ballMovement)

function ballMovement() {
    window.addEventListener('keydown', ofekMove);
    window.addEventListener('keypress', ofekJump);
    window.addEventListener('click', barJump);
    window.addEventListener('wheel', barMove);
    setInterval(draw, 100);
}

function draw() {

    //sky 
    c.beginPath();
    c.fillStyle = `rgb(0,250,250)`;
    c.fillRect(0, 0, 1170, 350);
    c.closePath();

    //sand
    c.beginPath();
    c.fillStyle = `rgb(230,200,100)`;
    c.fillRect(0, 350, 1170, 200);
    c.closePath();

    //netbar1
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(530, 150, 10, 200);
    c.closePath();

    //netbar2
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(580, 310, 10, 200);
    c.closePath();

    //net borders
    c.beginPath();
    c.moveTo(540, 150);
    c.lineTo(590, 310);
    c.lineTo(590, 420);
    c.lineTo(540, 260);
    c.lineTo(540, 150);

    c.fillStyle = "green";
    c.strokeStyle = "black";
    c.stroke();
    c.closePath();

    //net line 1
    c.beginPath();
    c.moveTo(550, 293);
    c.lineTo(550, 183);

    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 2
    c.beginPath();
    c.moveTo(560, 323);
    c.lineTo(560, 213);

    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 3
    c.beginPath();
    c.moveTo(570, 353);
    c.lineTo(570, 243);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 4
    c.beginPath();
    c.moveTo(580, 383);
    c.lineTo(580, 273);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 5
    c.beginPath();
    c.moveTo(590, 330);
    c.lineTo(540, 170);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 6
    c.beginPath();
    c.moveTo(590, 360);
    c.lineTo(540, 200);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 7
    c.beginPath();
    c.moveTo(590, 380);
    c.lineTo(540, 220);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //net line 8
    c.beginPath();
    c.moveTo(590, 400);
    c.lineTo(540, 240);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //floor line 
    c.beginPath();
    c.moveTo(590, 510);
    c.lineTo(540, 350);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "rgb(114, 98, 86)";
    c.closePath();

    //Bar Score
    c.beginPath();
    c.font = "20px Arial";
    c.fillText(`Bar Score: ${barScore}`, 10, 22);
    c.closePath();

    //Ofek Score
    c.beginPath();
    c.font = "20px Arial";
    c.fillText(`Ofek Score: ${ofekScore}`, 1040, 22);
    c.closePath();

    //ball
    if (ballY > ofekY && (ballX > ofekX && ballX < ofekX + 80)) {
        ballhit.play();
        ballSpeedX = (ballX - (ofekX + 40)) / 2.2;
        ballUp = 1;
    }
    if (ballY > barY && (ballX > barX && ballX < barX + 90)) {
        ballhit.play();
        ballSpeedX = (ballX - (barX + 30)) / 2.2;
        ballUp = 1;
    }
    if (ballY < 0) {
        ballUp = 0;
        ballhit.play();
    }
    if (ballY > 400 && !((ballX > ofekX && ballX < ofekX + 80) || (ballX > barX && ballX < barX + 90))) {

        if (ballX > 560) {
            barScore++;
        }
        else {
            ofekScore++;
            console.log(ballX)
        }
        ballY = 100;
        ballX = 560;
    }
    if (barScore == 2) {
        // ofekwinner.play();
        // setTimeout(()=>{},3000);
        over9000.play();
        // setTimeout(()=>{},3000);
        // yamazun.play();
        barWon = 1;
        barScore = 0;
        ofekScore = 0;
    }
    if (ofekScore == 2) {
        // barwinner.play();
        // setTimeout(()=>{},3000);
        Fatality.play();
        // setTimeout(()=>{},3000);
        // yamazun.play();
        ofekWon = 1;
        barScore = 0;
        ofekScore = 0;
    }

    if (barWon == 1) {
        c.beginPath();
        c.font = "50px Arial";
        c.fillText('Bar wins. Yamazun', 365, 50);
        c.closePath();
        c.drawImage(bar, 450, 130, 300, 300);
        ballSpeedX = 0;
        ballSpeedY = 0;
        ballX = 2000;
        ballY = -2000;
        ballUp = 8;
        abar = 1;
    }

    if (ofekWon == 1) {
        c.beginPath();
        c.font = "50px Arial";
        c.fillText('Ofek wins. Fatality', 365, 50);
        c.closePath();
        c.drawImage(ofek, 450, 130, 300, 300);
        ballSpeedX = 0;
        ballSpeedY = 0;
        ballX = 2000;
        ballY = -2000;
        ballUp = 8;
        aofek = 1;
    }


    if (ballUp == 0) {
        ballSpeedY = 15;
    }
    if (ballUp == 1) {
        ballSpeedY = -15;
    }
    if (ballX < 0 || ballX > 1140 || (ballX > 550 && ballX < 565 && ballY > 150)) {
        ballSpeedX = -ballSpeedX;
        ballhit.play();
    }
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    c.drawImage(ball, ballX, ballY, 30, 30);
    //ofek
    c.drawImage(ofek, ofekX, ofekY, 80, 80);
    //ofek jump 
    if(ofekUp==1 && ofekY<300){
        ofekUp=2;
    }
    if(ofekUp==2 && ofekY>400){
        ofekUp=0;
    }
    if(ofekUp==1){
        ofekY-=20;
    }
    else if(ofekUp==2){
        ofekY+=20;
    }
    else
        ofekY=ofekY;

    //bar
    c.drawImage(bar, barX, barY, 90, 90);
    if(barUp==1 && barY<300){
        barUp=2;
    }
    if(barUp==2 && barY>400){
        barUp=0;
    }
    if(barUp==1){
        barY-=20;
    }
    else if(barUp==2){
        barY+=20;
    }
    else
        barY=barY;

    // if(ofekY>300 && ofekUp==1){
    // ofekY-=3;
    // }
    // else if(ofekY<300){
    //     ofekUp=0;
    // }
    // if(ofekY<400 && ofekUp==0){
    //     ofekY+=3;
    // }
    // else if(ofekY>400){
    //     ofekSpeed=0;
    // }
}

function ofekMove(event) {
    if (ofekX > 580 && event.keyCode == 37) {
        console.log(event.keyCode)
        ofekX -= 7;
    }
    if (ofekX < 1080 && event.keyCode == 39) {
        console.log(event.keyCode)
        ofekX += 7;
    }
}

function barMove(event) {
    console.log(event)
    if (barX > 0 && event.wheelDelta < 0) {
        console.log(event.button);
        barX -= 7;
    }
    if (barX < 560 && event.wheelDelta > 0) {
        console.log(event.button);
        barX += 7;
    }
}


function ofekJump(event){
    if(event.keyCode==32){
        ofekUp=1;
        boing.play();
    }
}
function barJump(event){
    if(event.button==0){
        barUp=1;
        boing.play();
    }
}
