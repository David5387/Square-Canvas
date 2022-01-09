canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
color = "teal";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(200, 200, 2, 0);
ctx.stroke();

canvas.addEventListener("mousedown", draw);

function draw(e){

    mouse_X = e.clientX-canvas.offsetLeft;
    mouse_Y = e.clientY-canvas.offsetTop;
rect(mouse_X,mouse_Y);

}
function rect(mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.rect(mouse_X, mouse_Y, 400, 400, 2, 0);
    ctx.stroke();
}