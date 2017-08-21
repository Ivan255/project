/**
 * Created by Administrator on 2017/5/24.
 */
(function(){
     function NavigationControl(){
         this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;

         this.defaultOffset = new BMap.Size(0,0);
     }
    NavigationControl.prototype = new BMap.Control();

    NavigationControl.prototype.initialize = function(map){
         var container = document.createElement("div");
        var titles = ["上","下","左","右"];

        for(var i = 0;i <titles.length;i++){
            var button = document.createElement("button");
            button.textContent = titles[i];

            container.appendChild(button);

            button.addEventListener("click",function(){
                var center = map.pointToPixel(map.getCenter());


                switch (this.textContent){
                    case "上":
                        center.y -= 10;
                        break;
                    case "下":
                        center.y += 10;
                        break;
                    case "左":
                        center.x -= 10;
                        break;
                    case "右":
                        center.x += 10;
                        break;

                }
                var point = map.pixelToPoint(center);
               map.setCenter(point);
                map.panTo(point);
            });
        }
        map.getContainer().appendChild(container);
        return container;
    };

    window.NavigationControl = NavigationControl;
})();