canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=80;
roverImg="rover.png";

roverX=10;
roverY=10;

nasa_array=["mars1.jpg","mar2.jpg","mar3.jpg","mars4.jpg","mars5.jpg"]

RandomNumber=Math.floor(Math.random()*4);
console.log(RandomNumber);
backgroungImg=nasa_array[RandomNumber];


function add()
{
backgroungImgtag= new Image();
backgroungImgtag.onload= uploadBackground;
backgroungImgtag.src= backgroungImg;
roverImgtag= new Image();
roverImgtag.onload= uploadRover;
roverImgtag.src= roverImg;
}

function uploadBackground()
{
    ctx.drawImage(backgroungImgtag,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
ctx.drawImage(roverImgtag,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",my_key_down);

function my_key_down(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    up();
    console.log("up");
}
if(keyPressed=='40')
{
    down();
    console.log("down");
}
if(keyPressed=='37')
{
    left();
    console.log("left");
}
if(keyPressed=='39')
{
    right();
    console.log("right");
}
}

function up(){
if(roverY>=0){
roverY-=10;
console.log("when up arrrow is pressed, x= "+roverX +" y= "+roverY);
uploadBackground();
uploadRover();
}
}

function down(){
    if(roverY<=500){
    roverY+=10;
    console.log("when down arrrow is pressed, x= "+roverX +" y= "+roverY);
    uploadBackground();
    uploadRover();
    }
    }

    function left(){
        if(roverX>=0){
        roverX-=10;
        console.log("when left arrrow is pressed, x= "+roverX +" y= "+roverY);
        uploadBackground();
        uploadRover();
        }
        }
    
        function right(){
            if(roverX<=700){
            roverX+=10;
            console.log("when right arrrow is pressed, x= "+roverX +" y= "+roverY);
            uploadBackground();
            uploadRover();
            }
            }