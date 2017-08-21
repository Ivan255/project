/**
 * Created by Administrator on 2017/5/26.
 */
(function(){
    function Progress(ctx,value){
        W = this.W || "addWidth";
        this.w = this.W == "moveX"?200:0;
        this.H = 30;
        this.x =  value == "moveX"? -this.W:0;
        this.y = 0;
        this.W = value;
    }
    Progress.prototype.draw = function(ctx){
        var gradient = ctx.createLinearGradient(0,0,800,0);
        gradient.addColorStop(0,"white");
        gradient.addColorStop(1,"skyblue");
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,800,30);
        ctx.save();
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.W,this.H);
        ctx.closePath();
        ctx.restore();

    };
    Progress.prototype.setProgress = function(value,ctx){
        return new Promise(function(success){
            //0-100
            var canvasWidth = 800;
            var avg = 100/canvasWidth;
            if(this.W == "moveX"){
                this.x += avg;
                if(this.x>=800){
                    success("加载完成");
                }
            }else{
                this.w += avg;
                if(this.w>=800){
                    success("加载完成");
                }
            }
            this.draw(ctx);
        }.bind(this));

    };
})();