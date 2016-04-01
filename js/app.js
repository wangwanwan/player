(function(){
  var player = document.getElementById("player");
  var play = document.getElementById("play");
  var stop = document.getElementById("stop");
  var volume = document.getElementById("volume");
  var innerVolume = document.getElementById("innerVolume");
  var timer = document.getElementById("timer");
  var outProgress = document.getElementById("outProgress");
  var innerProgress = document.getElementById("innerProgress");
  var outVolume = document.getElementById("outVolume");
  var innerVolume = document.getElementById("innerVolume");

  play.onclick = function () {
    if (player.paused) {
      player.play(); //play
      play.className = "fa fa-pause";
    } else {
      player.pause(); //pause
      play.className = "fa fa-play";

      }
  }
        
  stop.onclick = function () {
    player.currentTime = 0;
    innerProgress.style.width = 0;
    player.pause();
    play.className = "fa fa-play"
  }

  volume.onclick = function () {
    if (player.muted) {
        player.muted = false;
        volume.className = "fa fa-volume-up";
        innerVolume.style.width = 100+"%";
    } else {
      player.muted = true;
      volume.className = "fa fa-volume-off";
      innerVolume.style.width = 0;

      }

  }
  player.addEventListener("timeupdate",function () {

    var time = player.currentTime.toFixed(1),
    minutes = Math.floor((time / 60) % 60),
    seconds = Math.floor(time % 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    timer.innerHTML = minutes + ':' + seconds;
    var width = outProgress.offsetWidth;
      
    if (player.duration) {
      var per = (player.currentTime / player.duration).toFixed(3);
        
    } else {
      per = 0;

    }
      
    innerProgress.style.width = (width * per).toFixed(0) + 'px';
    // alert(innerProgress.style.width);
    // alert(width*per);

    if (player.ended) { 
      play.className = "fa fa-play";
    }

});
  
  outProgress.onclick = function (event) {
    var width = event.target.offsetWidth;
    var widthX = event.offsetX;//it isn't run on the simulator.
    var duration = player.duration;

    per = (widthX / width).toFixed(3);
    player.currentTime = (duration * per).toFixed(0);
    innerProgress.style.width = widthX + 'px';    
  }
  

  outVolume.onclick = function (event) {
    var width = event.target.offsetWidth;
    var widthX = event.offsetX;
    
    player.volume = (widthX / width).toFixed(3);
    innerVolume.style.width = widthX + "px";
  }

})();
