
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var grd2 =ctx.createRadialGradient(250, 250, 200, 250, 250, 250);
// grd2.addColorStop(0.70, 'white');
grd2.addColorStop(0.5, '#cc33ff');
grd2.addColorStop(1, '#3333cc');
clockMaker();
function clockMaker() {
//circle
    ctx.beginPath();
ctx.arc(250, 250, 250, 0,2* Math.PI);
ctx.fillStyle = 'black' ;
ctx.fill() ;
//clock face
var grd1 = ctx.createRadialGradient(250, 250, 200, 250, 250, 250);
grd1.addColorStop(0.70, 'white');
grd1.addColorStop(0.80, '#3333cc');
grd1.addColorStop(0.9, '#6666ff');
ctx.fillStyle = grd1;
ctx.fill();
//numbers pos


// for(var i=1 ; i<=12 ; i++) {
//     ctx.beginPath();
//     ctx.arc(250, 250, 236, Math.PI / 180 * (-2 + 30*(i-1)), Math.PI / 180 * (2 + 30*(i-1)));
//     ctx.fillstyle = grd2 ;
//     CanvasRenderingContext2D.fill() ;
// }
// ctx.beginPath();
// ctx.arc(250, 250, 236, Math.PI / 180 * (-100), Math.PI / 180 * (100));
// ctx.fillStyle = 'black' ;
// ctx.fill() ;

// ctx.fillstyle = grd2 ;
// ctx.fill() ;

ctx.fillStyle = grd2
var rec12 = ctx.fillRect(247,11,8,26);

ctx.fillStyle = grd2
var rec6 = ctx.fillRect(247,465,8,26);

ctx.fillStyle = grd2
var rec9 = ctx.fillRect(11,247,26,8);

ctx.fillStyle = grd2
var rec3 = ctx.fillRect(465,247,26,8);

ctx.save() ; //rec11
ctx.translate(135, 55);
ctx.rotate(-Math.PI/6) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec10
ctx.translate(54, 137);
ctx.rotate(-Math.PI/3) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec8
ctx.translate(54, 365);
ctx.rotate(Math.PI/3) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec7
ctx.translate(137, 446);
ctx.rotate(Math.PI/6) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec5
ctx.translate(362, 446);
ctx.rotate(-Math.PI/6) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec4
ctx.translate(445, 364);
ctx.rotate(-Math.PI/3) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec2
ctx.translate(445, 138);
ctx.rotate(Math.PI/3) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //rec1
ctx.translate(363, 55);
ctx.rotate(Math.PI/6) ;
ctx.fillRect(-4,-13,8,26);
ctx.fillStyle = grd2
ctx.restore();

ctx.beginPath();
ctx.arc(250, 250, 8,0, Math.PI *2);
ctx.fillStyle = "#3333cc"  ;
ctx.fill();
}




function clock() {


ctx.clearRect(0, 0, 500, 500);

clockMaker() ;

var pi = Math.PI

var timeNow = new Date()
var sec = timeNow.getSeconds() ;
var min = timeNow.getMinutes() ;
var hour = timeNow.getHours() % 12 ;
var secAng = -( pi * 3 / 2 + ( pi / 180 ) * 6 * sec ) 
var minAng = ( pi + ( pi / 180 ) * 6 * min )
var hourAng = (pi + ( pi / 180 ) * 30 * hour + ( pi / 180 ) * 0.5 * min )
ctx.moveTo(250, 250);
ctx.lineTo( 250 + 210 * Math.cos (secAng) ,250 - 210 * Math.sin (secAng)) ;
ctx.stroke();

ctx.save() ; //minutes
ctx.translate(250, 250);
ctx.rotate(minAng) ;
ctx.fillRect(-3,0,6,175);
ctx.fillStyle = grd2
ctx.restore();

ctx.save() ; //hour
ctx.translate(250, 250);
ctx.rotate(hourAng) ;
ctx.fillRect(-4,0,8,100);
ctx.fillStyle = grd2
ctx.restore();




    console.log(sec);
}
setInterval(clock,1000)


