/**
 * Created by Administrator on 2017/5/25.
 */
(function(){
    function Map(id){
        this.zoom = 15;
        this.init(id);
    }
    Map.prototype.init = function(id){
      this.map = new BMap.Map(id);

        this.getCurrentPosition().then(function(point){
            this.map.centerAndZoom(point,this.zoom);
        }.bind(this));
    };

    Map.prototype.getCurrentPosition = function(){
      return new Promise(function(success){
          var geo = new BMap.Geolocation();
          geo.getCurrentPosition(function(result){
              if(result && result.point){
                  success(result.point);
              }
          });
      });
    };
    Map.prototype.addControl = function(control){
        this.map.addControl(control);
    };

    //监听地图的单机 双击事件
    //beginPoint
    //if（beginPoint）{}
    var dis = map.getDistance(point1,point2);
    window.Map = Map;

})();