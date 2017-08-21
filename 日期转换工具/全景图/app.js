/**
 * Created by Administrator on 2017/5/26.
 */
(function(){
    function init(){
        var map = new BMap.Map("map");
        map.centerAndZoom("广州");

        //var PanoramaControl = new BMap.PanoramaControl();
        //map.addControl(PanoramaControl);

        var panorama = new BMap.Panorama("container");
        var point = new BMap.Point(116.316169, 40.005567);
        panorama.setPosition(point);

        //var panorama = new BMap.Panorama("container");
        //map.addEventListener("click",function(event){
        //    panorama.setPosition(event.point);
        //});


        //搜索
        //var searchView = document.querySelector("#searchPOI");
        //var searchButton = document.querySelector("#searchButton");
        //
        //var localSearch = new BMap.LocalSearch("广州",{
        //    renderOptions:{
        //        map:map
        //    }
        //});
        //
        ////搜索景点或其他地点
        //searchButton.onclick = function(){
        //    localSearch.search(searchView.value);
        //};
        //
        ////  TransitRoute 公交路线检索规划
        //var transitRoute = new BMap.TransitRoute("广州",{
        //    renderOptions:{
        //        map:map,
        //        panel:"routeContainer"
        //    },
        //    policy:BMAP_TRANSIT_POLICY_LEAST_TIME
        //});
        //searchButton.onclick = function(){
        //    //localSearch.search(searchView.value);
        //    //transitRoute.search("广州塔",searchView.value);
        //};
        //
        //
        ////驾车路线规划
        //var drivingRoute = new BMap.DrivingRoute("广州",{
        //    renderOptions:{
        //        map:map,
        //        panel:"routeContainer"
        //    }
        //});
        // drivingRoute.setPolicy(BMAP_DRIVING_POLICY_LEAST_TIME);
        //searchButton.onclick = function(){
        //    //localSearch.search(searchView.value);
        //    //transitRoute.search("广州塔",searchView.value);
        //    //drivingRoute.search("广州塔",searchView.value);
        //};
        //
        ////步行路线规划 + 导航
        //var walkingRoute = new BMap.WalkingRoute("广州",{
        //    renderOptions:{
        //        map:map,
        //        panel:"routeContainer",
        //        autoVidewport:true
        //    }
        //});
        //walkingRoute.setSearchCompleteCallback(function(result){
        //
        //    //获得到路线规划 所有途经点
        //    var points = result.getPlan(0).getRoute(0).getPath();
        //
        //    var userMarker = new BMap.Marker(points[0]);
        //    map.addOverlay(userMarker);
        //    var errorNum = 0;
        //
        //    var timer = setInterval(function(){
        //        var geo = new BMap.Geolocation();
        //        geo.getCurrentPosition(function(results){
        //
        //            //是否偏移了路线
        //            if(!points.indexOf(results.point)){
        //                errorNum++
        //            }
        //            if(errorNum >= 500){
        //                alert("路线已偏移！");
        //                errorNum = 0;
        //                clearInterval(timer);
        //            }
        //            //重新设置用户的位置
        //            userMarker.setPosition(results.point);
        //        });
        //
        //
        //    },500)
        //});
        //searchButton.onclick = function(){
        //    //localSearch.search(searchView.value);
        //    //transitRoute.search("广州塔",searchView.value);
        //    walkingRoute.search("广州塔",searchView.value);
        //};

    };

    init();
})();