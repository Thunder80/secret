const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 2160;

setInterval(() => {
    requestAnimationFrame(loop)
    }, 60);

function loop(){
    const h = canvas.height/2 - 200;
    const space = 60;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.font = "30px Georgia";
    ctx.textAlign = "left";
    ctx.fillText("Hi stranger you are probably Poulami Mukherjee. Hmmmm.... But I dont trust", 10, h);
    ctx.fillText("you so to confirm please enter the name of the subject you hate the most and", 10, space + h);
    //ctx.textAlign = "center";
    ctx.fillText("the name by which you call the person who sent you the link...", 10, 2*space + h);
}