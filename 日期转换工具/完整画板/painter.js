/**
 * Created by Administrator on 2017/5/20.
 */
//window.onload = function(){
//    var canvas = document.querySelector(".canvasContatiner");
//    var context = canvas.getContext("2d");
//    context.lineWidth = 3;
//    context.strokeStyle = "durkgreen";
//};


(function(){
    function Painter(selector){
        this.context = document.querySelector(selector).getContext("2d");
        this.isDrawLine = true;
        this.drawLine();
    }
    /*
    * 画板的核心功能描述
    * 监听 鼠标按下的事件 moveTo（鼠标按下的点）
    * 监听 鼠标按下 并且移动的事件 lineTo（鼠标移动的点）
    * 监听 鼠标抬起的事件 移除鼠标移动的事件
    * */

    Painter.prototype.drawLine = function(){
      this.addEventListener();
        };


    Painter.prototype.addEventListener = function(){
        var self = this;

        function drawLine(event){
            self.context.lineTo(event.pageX,event.pageY);
            self.context.stroke();
        }
        function drawLineMouseDown(event){
            self.context.beginPath();
            self.context.moveTo(event.pageX,event.pageY);
            self.context.stroke();

            document.addEventListener("mousemove",drawLine)
        }
        var clearWidth = 50;
        function clear(event){
            self.context.clearRect(event.pageX-clearWidth/2,event.pageY-clearWidth/2,clearWidth,clearWidth);
        }
        function clearLineMouseDown(event){
            clear(event);

             document.addEventListener("mousemove",clear)
        }
       document.addEventListener("mousedown",function(event){
           self.isDrawLine ? drawLineMouseDown(event):clearLineMouseDown(event);
       });
        document.addEventListener("mouseup",function(){
            this.removeEventListener("mousemove",self.isDrawLine ? drawLine:clear);

        });
    };



    window.Painter = Painter;
})();