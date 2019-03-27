const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 2160;

setInterval(() => {
    requestAnimationFrame(loop)
    }, 60);

function loop(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.font = "30px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("Hi stranger you are probably Poulami Mukherjee.Hmmmm.... But I dont trust", 10,30);
    ctx.fillText("you so to confirm please enter your ", 10, 70);
}