/**
 * Created by Administrator on 2017/5/23.
 */
(function(){
    var context = document.querySelector("canvas").getContext("2d");
    var gradient = context.createRadialGradient(200,200,200,200,100,100);
    gradient.addColorStop(0.2,"skyblue");
    gradient.addColorStop(0.6,"white");
    gradient.addColorStop(1,"red");
    context.fillStyle = gradient;
    context.fillRect(0,0,800,800);
    context.fillStyle = "purple";
    context.font = "55px serif";
    context.strokeText("Ivan",400,500,600);
    context.fillText("Ivan",500,300,500);
    context.shadowColor = "gray";

    context.shadowOffsetY = 10;
    context.shadowBlur = 3;
    context.shadowOffsetX = 10;
    context.fillText("Ivan",500,300,500);
    context.strokeText("Ivan",400,500,600);




})();