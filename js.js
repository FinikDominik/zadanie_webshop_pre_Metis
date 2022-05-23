let covervideo = document.getElementById('covervideo');

covervideo.addEventListener('loadedmetadata', function() {
    this.currentTime = 0;
    covervideo.loop = true;
  }, false);

//   var maxTime = 10;
//   video.addEventListener("progress", function(){
//     if(video.currentTime >= maxTime){
//       video.pause();  
//     }
// })