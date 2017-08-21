/**
 * Created by Administrator on 2017/5/19.
 */
(function(){
    //function init(){
    //    var canvas = document.querySelector(".canvasContatiner>canvas");
    //    var context = canvas.getContext("2d");
    //    context.strokeStyle = "#c2c2c2";
    //    new Painter(context);
    //}
    function test(){
        var canvas = document.querySelector(".canvasContatiner>canvas");
        var context = canvas.getContext("2d");
        //设置画笔的宽度
        context.lineWidth = 3;
        //设置画笔的颜色
        context.strokeStyle = "red";

        //设置填充颜色的颜色值
        context.fillStyle = "#fff";

        ////设置 要绘制 线条的起始点
        //context.moveTo(100,100);
        ////设置移动点的位置
        //context.lineTo(500,100);
        //
        //context.lineTo(500,500);
        //
        //context.lineTo(100,500);
        //
        //context.lineTo(100,100);
        //
        ////绘制笔画的轮廓
        //context.stroke();
        ////填充颜色
        //context.fill();

        //context.drawRect(50,50,100,100);
        //context.strokeRect(50,50,100,100);

        //可以绘制预先准备的路径  （斜线）
        //var path2D = new Path2D();
        //path2D.moveTo(100,200);
        //path2D.lineTo(600,300);
        //
        //context.stroke(path2D);


    }

    //获取数组的第一个元素
    Array.prototype.fistObject = function(){
        return this[0];
    };
    //获取数组的最后一个元素
    Array.prototype.lastObject = function(){
        return this[this.length-1];
    };
    var arr = [1,2,3,4];
    console.log(arr.fistObject());
    console.log(arr.lastObject());


    CanvasRenderingContext2D.prototype.drawRect = function (x,y,width,height){
        //设置 要绘制 线条的起始点
        this.moveTo(x,y);
        //设置移动点的位置
        this.lineTo(x+width,y);

        this.lineTo(x+width,y+height);

        this.lineTo(x,y+height);

        this.lineTo(x,y);

        //绘制笔画的轮廓
        this.stroke();
    };
    test();
    //init();
})();