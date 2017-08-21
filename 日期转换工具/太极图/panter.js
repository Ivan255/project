/**
 * Created by Administrator on 2017/5/19.
 */
//(function(){
//    function Painter(_context){
//        this.context = _context;
//        this.drawLine();
//    }
//    /*
//    * 画板的核心功能描述
//    * 监听 鼠标按下的事件 moveTo（鼠标按下的点）
//    * 监听 鼠标按下 并且移动的事件 lineTo（鼠标移动的点）
//    * 监听 鼠标抬起的事件 移除鼠标移动的事件
//    * */
//
//    Painter.prototype.drawLine = function(){
//
//        var self = this;
//        function move(event){
//            self.context.lineTo(event.pageX,event.pageY);
//            self.context.stroke();
//        }
//        document.addEventListener("mousedown",function(event){
//            self.context.moveTo(event.pageX,event.pageY);
//            this.addEventListener("mousemove",move)
//        });
//        document.addEventListener("mouseup",function(){
//            this.removeEventListener("mousemove",move);
//        });
//    };
//
//    //清除 矩形范围内的所有内容
//    Painter.prototype.clearAll = function(){
//      this.context.clearRect(0,0,800,800)  ;
//    };
//
//
//    window.Painter = Painter;
//})();


window.onload = function(){

    var canvas = document.querySelector(".canvasContatiner>canvas");  //获取canvas元素
    var context = canvas.getContext('2d');//获取上下文的环境

    g1 = context.createLinearGradient(400,100,400,500);//创建线性的渐变对象，参数分别为渐变开始点的x、y坐标，渐变结束点的x、y坐标。
    g1.addColorStop(0,"black");//addColorStop指定各个位置的颜色
    g1.addColorStop(1,"black");

    g2 = context.createLinearGradient(400,100,400,500);
    g2.addColorStop(0,"white");
    g2.addColorStop(1,"white");

    g3 = context.createRadialGradient(400,200,2,400,200,10);//创建放射状/圆形渐变对象，参数分别为渐变开始圆的x、y坐标，开始圆的半径，渐变结束圆的x、y坐标，结束圆的半径。
    g3.addColorStop(0,"white");
    g3.addColorStop(1,"white");

    g4 = context.createRadialGradient(400,400,2,400,400,10);
    g4.addColorStop(0,"black");
    g4.addColorStop(1,"black");

    context.arc(400,300,200,1/2*Math.PI,3/2*Math.PI);//arc方法创建圆弧、曲线，参数分别为圆中心的x坐标、圆中心的y坐标、圆的半径、起始角、结束角
    context.arc(400,200,100,1/2*Math.PI,3/2*Math.PI,true);//counterclockwise(可选)False = 顺时针，true = 逆时针。
    context.arc(400,400,100,0.5*Math.PI,1.5*Math.PI);
    context.fillStyle=g1;//设置或返回用于填充绘画的颜色、渐变或模式。
    context.fill();

    context.beginPath();//在一个画布中开始子路径的一个新的集合。
    context.arc(400,300,200,1/2*Math.PI,3/2*Math.PI,true);
    context.arc(400,200,100,1.5*Math.PI,0.5*Math.PI);
    context.arc(400,400,100,3/2*Math.PI,1/2*Math.PI,true);
    context.fillStyle=g2;
    context.fill();

    context.beginPath();
    context.arc(400,200,10,0,Math.PI*2);
    context.fillStyle = g3;
    context.fill();

    context.beginPath();
    context.arc(400,400,10,0,Math.PI*2);
    context.fillStyle = g4;
    context.fill();


};