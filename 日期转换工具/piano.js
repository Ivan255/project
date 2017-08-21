/**
 * Created by Administrator on 2017/5/17.
 */
(function(){

    function Piano(){
        this.audioKey =[ "audio/c4.ogg","audio/d4.ogg",
            "audio/e4.ogg","audio/f4.ogg",
            "audio/g4.ogg","audio/a4.ogg",
            "audio/b4.ogg","audio/c5.ogg","audio/a0.ogg",
            "audio/a1.ogg","audio/a2.ogg","audio/a3.ogg",
            "audio/a5.ogg","audio/a6.ogg","audio/a7.ogg",
            "audio/b0.ogg","audio/b1.ogg",
            "audio/b2.ogg","audio/b3.ogg","audio/b5.ogg","audio/b6.ogg",
            "audio/b7.ogg","audio/c1.ogg","audio/c2.ogg","audio/c3.ogg","audio/c6.ogg","audio/c7.ogg",
            "audio/c8.ogg","audio/d1.ogg","audio/d2.ogg","audio/d3.ogg","audio/d5.ogg","audio/d6.ogg",
            "audio/d7.ogg","audio/e1.ogg","audio/e2.ogg","audio/e3.ogg","audio/e5.ogg","audio/e6.ogg",
            "audio/e7.ogg","audio/f1.ogg","audio/f2.ogg","audio/f3.ogg","audio/f5.ogg","audio/f6.ogg","audio/f7.ogg",
            "audio/g1.ogg","audio/g2.ogg","audio/g3.ogg","audio/g5.ogg","audio/g6.ogg",
        "audio/g7.ogg"];
        this.createAudio();
        this.addEventListener();
    }
    Piano.prototype.createAudio = function(){
        for(var i = 1;i<=this.audioKey.length;i++){
            var audio = document.createElement("audio");
            audio.src = this.audioKey[i-1];
            document.body.appendChild(audio);
            audio.id = "key"+i;
        }
    };
    Piano.prototype.addEventListener = function(){
        document.body.addEventListener("keydown",function(event){
            if(/[\b0-9a-z]/g.test(parseInt(event.key))){
                var audio = document.querySelector("#key" + event.key);
                audio.load();
                audio.play();
            }
        });
    };
    window.Piano = Piano;
})();