/**
 * Created by Administrator on 2017/5/26.
 */
(function(){
    function Map(id){
         this.init(id);
        this.showDis();
    }

    Map.prototype.init = function(id){
        this.map = new BMap.Map(id);

        //初始化地图 centerAndZoom
        this.getCurPosition(function(result){
            this.map.centerAndZoom(result.point,15);
            var marker = new Marker(result.point);
            this.map.addOverlay(marker.marker);
        }.bind(this));
    };

    Map.prototype.getCurPosition = function(callback){
        //获取位置信息
        var geo = new BMap.Geolocation();

        geo.getCurrentPosition(function(result){
            callback(result)
        })
    };

    Map.prototype.showDis = function(){
        //收集点击测距的点
        this.markers = [];

      this.map.addEventListener("click",function(event){
          var marker = new Marker(event.point);
          this.map.addOverlay(marker.marker);
         this.markers.push(marker.marker);

          if(this.markers.length == 2){
              //开始测量距离

              //获得数组中 第一个 marker 的经纬度
              var beginPoint = this.markers[0].getPosition();
              var endPoint = this.markers[1].getPosition();

              var m = this.map.getDistance(beginPoint,endPoint);
              alert(m/1000);

          }else if(this.markers.length == 3){
              //删除前两个标记 并且清除数组里面的两个标记
              for(var i = 0;i < this.markers.length - 1;i++){
                  this.map.removeOverlay(this.markers[i]);
              }
              var lastMrker = this.markers[2];
              this.markers = [lastMrker];
          }
      }.bind(this));

    };

    window.Map = Map;
})();