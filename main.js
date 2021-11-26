var mouseEvent = "empty";
var lastposofx, lastposofy;

canvas = document.getElementById("mycanva");
ctx = canvas.getContext("2d");
color = "black";
width = "1";
radi = "3";

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) 
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radi = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{
    currentposofmouse_x = e.clientX - canvas.offsetLeft;
    currentposofmouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        console.log("Current positions of x and y coordinates are = ");
        console.log("x = " + currentposofmouse_x + "y = " + currentposofmouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentposofmouse_x, currentposofmouse_y, radi, 0,2 * Math.PI);
        ctx.stroke();
    }
}
