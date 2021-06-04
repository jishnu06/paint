var canvas=document.getElementById("myCanvas");
var pen=canvas.getContext('2d');
var penDown=false;
var x1=0,y1=0,x2=0,y2=0;
function circle(x,y){
    pen.beginPath();
    pen.strokeStyle=getColor();
    pen.lineWidth=getLineWidth();
    pen.arc(x,y,50,0,6.28319);
    pen.stroke();
}
function line(x1,y1,x2,y2){
    pen.beginPath();
    pen.strokeStyle=getColor();
    pen.lineWidth=getLineWidth();
    pen.moveTo(x1,y1);
    pen.lineTo(x2,y2);
    pen.stroke();
}
function getColor(){
    return document.getElementById("color").value
}
function getLineWidth(){
    return document.getElementById("width").value
}
function clearArea(){
    pen.clearRect(0,0,canvas.width,canvas.height)
}

circle(200,200)

canvas.onclick=function(e){
    circle(e.offsetX,e.offsetY)
}
canvas.onmousedown=function(e){
    penDown=true;
}
canvas.onmousemove=function(e){
    x1=e.offsetX,y1=e.offsetY
    if(penDown==true){
        line(x1,y1,x2,y2)
    }
    x2=x1,y2=y1
}
canvas.onmouseup=function(e){
    penDown=false
}
canvas.ontouchstart=function(e){
    console.log(e)
    x2 = e.touches[0].clientX-canvas.offsetX;
    y2 = e.touches[0].clientY-canvas.offsetY;
    
}
canvas.ontouchmove=function(e){
    console.log(e)
    x2 = e.touches[0].clientX-canvas.offsetX;
    y2 = e.touches[0].clientY-canvas.offsetY;
    line(x1,y1,x2,y2);
    x2=x1,y2=y1
}