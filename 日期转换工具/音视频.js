/**
 * Created by Administrator on 2017/5/19.
 */
(function(){
     AudioPlayer.prototype.loadAudioSouceNode = function(url){
         var AudioContext = new AudioContext();
         var sourceNode = audioContext.createBuffertSource();
         this.loadAudioFile(url).then(function(arryBuffer){
             sourceNode.connect(audioContext.destination);
             sourceNode.start();
         })
     };
    AudioPlayer.prototype.loadAudioFile = function(url){
        return new Promise(function(res){
            var request = new XMLHttpRequest();
            request.responseType = "arrybuffer";
            request.open("GET",url);
            request.onload = function(){
                res(request.response)
            };
            request.send();
        });

    };
    window.AudioPlayer = AudioPlayer;
})();
