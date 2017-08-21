/**
 * Created by Administrator on 2017/5/24.
 */
(function(){
   function init(){

       var map = new Map("map");
       map.addControl(new NavigationControl());

       map.addOverlay(new MyOverlay(new BMap.Point(113.331084,23.112223)));

       var markerControl = document.querySelector(".addMarkerControl");
       markerControl.onclick = function(){
           if(this.textContent == "开启双击添加Marker"){
               map.startAddMarker();
               this.textContent = "关闭双击添加Marker";
           }else{
               map.stopAddMarker();
               this.textContent = "开启双击添加Marker";
           }
       }
   }
    init();
    function test(){
        var map = new BMap.Map("map");
        map.centerAndZoom("广州");

        //禁止双击点击放大
        map.disableDoubleClickZoom();

        var point = new BMap.Point(113.2622240000,23.1355840000);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
    }
    //鼠标双击事件
    //map.addEventListener("dbclick",function(event){
    //    map.addOverlay(event.marker);
    //});

    //test();


})();