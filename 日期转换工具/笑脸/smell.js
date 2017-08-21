/**
 * Created by Administrator on 2017/5/20.
 */
window.onload = function(){

    var canvas = document.querySelector(".canvasContatiner>canvas");
    var context = canvas.getContext("2d");
    context.lineWidth = 3;
    context.strokeStyle = "skyblue";
    //头部
    context.arc(300,300,100,0,Math.PI*2,true);
    context.stroke();
    context.fill();


    //嘴巴
    context.beginPath();
    context.arc(300,300,65,0,Math.PI,false);
    context.moveTo(300,300);
    context.stroke();
    //context.fill();


    //左眼
    context.beginPath();
    context.arc(260,260,10,0,Math.PI*2,true);
    context.moveTo(55,55);

    context.stroke();


    //右眼
    context.beginPath();
    context.arc(340,260,10,0,Math.PI*2,true);
    context.moveTo(75,75);

    context.stroke();
};