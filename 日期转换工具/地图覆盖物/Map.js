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

            //用户位置的标记
            var marker = new BMap.Marker(point);
            this.map.addOverlay(marker);
            //经纬度换行address
            this.getAddress(point).then(function(result){
                //显示用户位置的信息窗口
                this.addInfoWindow("我的位置："+result.address,marker);
            }.bind(this));
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


    //Map.prototype.startAddMarker = function(){
    //
    //    //禁止双击点击放大
    //    this.map.disableDoubleClickZoom();
    //
    //    var self = this;
    //    this.addMarker = function(event){
    //        //地图上的标记
    //        var marker = new BMap.Marker(event.point);
    //        self.map.addOverlay(marker);
    //
    //        //地理位置解析
    //        var coder = new BMap.Geocoder();
    //        //coder.getPoint("广州塔",function(result){
    //        //    console.log(result);  //结果是经纬度
    //        //},"广州");
    //        coder.getLocation(event.point,function(result){
    //            console.log(result);
    //            var message = "<div><img src='u.jpg' alt='' width='100'height='100'><p>"+result.address+"</p></div>";
    //
    //
    //            //信息窗口 默认是打开的
    //            var infoWindow = new BMap.InfoWindow(message,{
    //                offset:new BMap.Size(0,-20)
    //
    //            });
    //
    //            //self.map.openInfoWindow(infoWindow,event.point);
    //            marker.addEventListener("click",function(){
    //                if(infoWindow.isOpen()){
    //                    self.map.closeInfoWindow();
    //                }else{
    //                    self.map.openInfoWindow(infoWindow,event.point);
    //                }
    //
    //            });
    //        });
    //
    //    };
    //    this.map.addEventListener("dblclick",this.addMarker);
    //};


    Map.prototype.startAddMarker = function(){
        this.map.disableDoubleClickZoom();
        var self = this;
        this.addMarker = function(event){
            //地图上的标记
            var marker = new BMap.Marker(event.point);
            self.map.addOverlay(marker);

            self.getAddress(event.point).then(function(result){
                var message = "<div>" +
                    "<img src='u.jpg' alt='' width='100'height='100'>" +
                    "<p>"+result.address+"</p></div>";
                self.addInfoWindow(message,marker);
            });
        };
        this.map.addEventListener("dblclick",this.addMarker);
    };
    //获得地址
    Map.prototype.getAddress = function(point){
        return new Promise(function(success){
            //创建 地理编码 对象
            var coder = new BMap.Geocoder();
            //解析 经纬度对象 --> 地理位置 （中文描述）
            coder.getLocation(point,function(result){
                // result --> GeocoderResult
                success(result);
            })
        })
    };

    //添加信息窗口
    Map.prototype.addInfoWindow = function(info,marker){
        var self = this;
        var infoWindow = new BMap.InfoWindow(info,{
            offset:new BMap.Size(0,-20)
        });
        marker.addEventListener("click",function(){
            if(infoWindow.isOpen()){
                self.map.closeInfoWindow();
            }else{
                self.map.openInfoWindow(infoWindow,marker.getPosition());
            }
        });
        return infoWindow;

    };

    Map.prototype.stopAddMarker = function(){
        this.map.disableDoubleClickZoom();
         if(this.addMarker){
             this.map.removeEventListener("dblclick",this.addMarker);
         }
    };

    //添加覆盖物
    Map.prototype.addOverlay = function(overlay){
        this.map.addOverlay(overlay);
    };

    //监听地图的单机 双击事件
    //beginPoint
    //if（beginPoint）{}
    //var dis = map.getDistance(point1,point2);
    window.Map = Map;

})();