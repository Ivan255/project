/**
 * Created by Administrator on 2017/5/26.
 */
(function(){
    function Marker(point){
        this.marker = new BMap.Marker(point);
        //创建信息窗口  为了不让地理编解码 占用 创建的时间 给InfoWindow默认值
        this.infoWindow = new BMap.InfoWindow("message");
        this.addEventListener();
    }

    //return  函数 就是 经过计算或者 处理过的 返回值
    Marker.prototype.addInfoWindow = function(content){
      var infoWindow = new BMap.InfoWindow(content);
        return infoWindow;

    };

    Marker.prototype.geocoder = function(point,callback){
        var coder = new BMap.Geocoder();
        coder.getLocation(point,function(result){
            callback(result);
        });
    };
    Marker.prototype.addEventListener = function(){
      this.marker.addEventListener("click",function(){
          /*
          * 一、打开 -->就关闭
          *
          * 二、关闭--> 就打开
          *  判断有没有进行过地理编辑码 没有（信息窗口的content是默认值《message》） --> 就解析经纬度
          *  解析完之后 重新设置 content 为 解析到的地址
          * */

          var map = this.marker.getMap();
          var point = this.marker.getPosition();
          if(this.infoWindow.isOpen()){
          map.closeInfoWindow();
          }else{
              //还没有 地理编解码 获得到的位置信息 是初始值
              if(this.infoWindow.getContent() == "message"){


                  //解析经纬度
                  this.geocoder(this.marker.getPosition(),function(result){

                      //解析完之后 重新设置 content 为 解析到的地址
                      this.infoWindow.setContent(result.address);
                      map.openInfoWindow(this.infoWindow,point);

                  }.bind(this));
              }else {
                  map.openInfoWindow(this.infoWindow,point);
              }

          }
      }.bind(this));
    };


    window.Marker = Marker;
})();