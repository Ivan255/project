/**
 * Created by Administrator on 2017/5/26.
 */
(function(){

    function loadData(url,callback){
        var request = new XMLHttpRequest();
        request.open("GET",url);
        request.onload = function(){
            callback(JSON.parse(request.response));
        };
        request.send();
    }

    var map = new Map("map");
    loadData("datas.json",function(result){
        if(result.code == 200){
            result.data.forEach(function(item){
                var point = new BMap.Point(item.point.lng,item.point.lat);
               var marker = new Marker(point);
                map.map.addOverlay(marker.marker);
            });
        }else {
            alert(result.message);
        }
    })


})();