(function(){
	var player = document.getElementById("player");
	var play = document.getElementById("play");
	var stop = document.getElementById("stop");

	/*document.onclick = function(event){
		var target = event.target;
		if (player.paused) {
            	player.play(); //播放
            	target.setAttribute("class", "fa fa-pause");

        	} else {
           	 player.pause(); //暂停
            	target.setAttribute("class", "fa fa-play");
        	}
	}*/

	play.onclick = function(){
		if (player.paused) {
            	player.play(); //播放
            	play.setAttribute("class", "fa fa-pause");
        } else {
           	 player.pause(); //暂停
            	 play.setAttribute("class", "fa fa-play");
        }
	}
        
       stop.onclick = function(){
       	 player.currentTime = 0; //停止播放
        	// $innerBar.css('width', 0 + 'px');
       }
  




})();