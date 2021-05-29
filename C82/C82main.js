mouseEvent="";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
line_width=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(event){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(event){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(event){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(event){
current_x=event.clientX-canvas.offsetLeft;
current_y=event.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}
last_x=current_x;
last_y=current_y;
}
function clearArea(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}