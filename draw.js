var canvas = document.getElementById("graphics");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";

var isKeyDown = false;

var prevCoords;
var currCoords;

function getMousePos(canv, evt) { // Thank you stackoverflow
  var rect = canv.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left) / (rect.right - rect.left) * canv.width,
    y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canv.height
  };
}

document.addEventListener("keydown", (event) => {
  isKeyDown = true;
});

document.addEventListener("keyup", (event) => {
  isKeyDown = false;
});

function draw(e){
  currCoords = getMousePos(canvas, e);
  if(isKeyDown && (prevCoords != undefined)){
    if(prevCoords !== currCoords){
      //ctx.beginPath(); // This line optional but can create a different aesthetic
      ctx.moveTo(prevCoords.x, prevCoords.y);
    }
    ctx.lineTo(currCoords.x, currCoords.y);
    ctx.stroke();
  }
  prevCoords = currCoords;
}

window.addEventListener("mousemove", draw);