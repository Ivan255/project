/**
 * Created by Administrator on 2017/5/18.
 */
(function(){
    AudioPlayer.prototype.loadAudioSouceNode = function(url){
        var audioContext = new AudioContext();
        var soucerNode = audioContext.createBufferSoucer();
        this.loadAudioFile(url).then(function(arrayBuffer){
            audioContext.decodeAudioData(arrayBuffer,function(audioBuffer){
                soucerNode.buffer = audioBuffer;
                soucerNode.connect(audioContext.destination);
                soucerNode.start();
            });
        });
    };
    AudioPlayer.prototype.loadAudioFile = function(url){
        return new Promise(function(res){
            var requset = new XMLHttpRequest();
            requset.responseType = "arraybuffer";
            requset.open("GET",url);
            requset.onload = function(){
                res(requset.response);
            };
            requset.send();
        })
    };
    window.AudioPlayer = AudioPlayer;
})();
