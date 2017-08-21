/**
 * Created by Administrator on 2017/5/26.
 */
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var progress = 0;
var flag = true;

Array.prototype.foreach = function(callback){
    for(var i=0;i<this.length;i++){
        if(this[i]!==null) callback.apply(this[i] , [i])
    }
};

window.RAF = (function(){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60); };
})();


var Frag = function(centerX , centerY , radius , color ,tx , ty){
    this.tx = tx;
    this.ty = ty;
    this.x = centerX;
    this.y = centerY;
    this.dead = false;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
};

Frag.prototype = {
    paint:function(){
        context.save();
        context.beginPath();
        context.arc(this.x , this.y , this.radius , 0 , 2*Math.PI);
        context.fill();
        context.restore();
    },
    moveTo:function(index){
        this.ty = this.ty+30;
        var dx = this.tx - this.x , dy = this.ty - this.y;
        this.x = Math.abs(dx)<0.1 ? this.tx : (this.x+dx*0.1);
        this.y = Math.abs(dy)<0.1 ? this.ty : (this.y+dy*0.1);
        if(dx===0 && Math.abs(dy)<=80){
            this.dead = true;
        }
        this.paint();
    }
};

var Start = {

    update:function(){

        if(progress<=800){
            context.save();
            context.fillRect(0,0,canvas.width,canvas.height);
            context.restore();
            context.save();
            context.restore();

            context.save();
            var gradient=context.createLinearGradient(50,300,800,30);
            gradient.addColorStop(0,"white");
            gradient.addColorStop(1,"skyblue");
            context.fillStyle=gradient;
            context.fillRect(0,302,progress,30);
            progress += 2;
            var  percentage= parseInt(progress/800*100)+"%";
            context.font="30px Serif";
            context.fillText(percentage,800,325);
            context.restore();

        }

    },

    loop:function(){
        var value = this;
        if(flag){
            this.update();
        }
        RAF(function(){
            value.loop();
        });
    },

    start:function(){
        this.loop();
    }
};
Start.start();
