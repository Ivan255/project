/**
 * Created by Administrator on 2017/5/22.
 */
(function(){
    function Draw(selector){
        this.context = document.querySelector(selector).getContext("2d");
    }

    /*
    * 封装画圆的方法
    * color 填充 或者 绘制轮廓的颜色
    * isStroke 是否绘制轮廓
    * */
    Draw.prototype.round = function(x, y,radius,startAngle,endAngle,anticlockwise,color,isStroke){

        this.context.beginPath();
        isStroke ? this.context.strokeStyle = color:this.context.fillStyle = color;
      this.context.arc(x, y,radius,startAngle,endAngle,anticlockwise);
        this.context.closePath();
        isStroke ? this.context.stroke():this.context.fill();

    };

    Draw.prototype.taiJi = function() {
        var centerPoint = {
            x: 400,
            y: 400
        };
        var radius = 400;

        var startAngle = Math.PI * 1.5;
        var endAngle = Math.PI * 0.5;

        //右边白色背景半圆
        this.round(centerPoint.x, centerPoint.y, radius, startAngle, endAngle, false, "white", false);

        //左边黑色背景半圆
        this.round(centerPoint.x, centerPoint.y, radius, startAngle, endAngle, true, "black", false);

        startAngle = 0;
        endAngle = Math.PI * 2;
        //顶部中号白色整圆
        this.round(centerPoint.x, centerPoint.y / 2, radius / 2, startAngle, endAngle, false, "white", false);6

        //底部黑色中号整圆
        this.round(centerPoint.x, centerPoint.y + radius / 2, radius / 2, startAngle, endAngle, false, "black", false);

        radius /= 8;

        //顶部小号白色整圆
        this.round(centerPoint.x, centerPoint.y-radius*4, radius, startAngle, endAngle, false, "black", false);

        //底部黑色小号整圆
        this.round(centerPoint.x, centerPoint.y + radius*4, radius, startAngle, endAngle, false, "white", false);
    };


    window.Draw = Draw;
})();