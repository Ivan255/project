/**
 * Created by Administrator on 2017/5/25.
 */
(function(){
    function MyOverlay(point){
       this.point = point;
    }
    // 1、继承Overlay
    MyOverlay.prototype = new BMap.Overlay();

    // 2、重写 initialize  地图在调用addOverlay 时候 会调用initialize这个函数
    MyOverlay.prototype.initialize = function(map){
        this.map = map;

        var container = document.createElement("img");
        container.src = "u.jpg";
        container.width = 30;
        container.style.position = "absolute";
        container.style.zIndex = 9999;

        map.getContainer().appendChild(container);
        this.container = container;
        return container;
    };

    // 3、重写draw 当地图状态 发生改变的时候 会重新 调用这个方法
    MyOverlay.prototype.draw = function(){

        var px = this.map.pointToPixel(this.point);
        this.container.style.left = px.x+"px";
        this.container.style.top = px.y+"px";
    };

    window.MyOverlay = MyOverlay;
})();
