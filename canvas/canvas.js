let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//rectangle
let c = canvas.getContext("2d");
// c.fillStyle="red"
// c.fillRect(100,100,100,100);
// c.fillStyle="blue";
// c.fillRect(300,300,100,100);
// c.fillStyle="blue";
// c.fillRect(500,500,100,100);
// c.fillRect(600,600,100,100);

// //line
// c.beginPath();
// c.moveTo(50,300)
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "pink";
// c.stroke();

// //arc/circle
// // c.beginPath();
// // c.arc(300,300,30,0,Math.PI *2 , false);
// // c.strokeStyle = "green";
// // c.stroke();

// function getRandomColor(){
//     var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// for (let index = 0; index < 2400; index++) {
//     let x = Math.random()* window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
// c.arc(x,y,30,0,Math.PI *2 , false);
// c.strokeStyle = getRandomColor();
// c.stroke();
// }

// move circle
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 30;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0 ,0 ,innerWidth,innerHeight);
    c.beginPath()
    c.arc(x,y,radius,0,Math.PI*2,false)
    c.strokeStyle = "blue";
    c.stroke();
    if(x+radius > innerWidth || x-radius<0){
        dx = -dx;
    }
    if(y+radius > innerHeight || y-radius<0){
        dy = -dy;
    }
  x += dx;
  y += dy;
}
animate();