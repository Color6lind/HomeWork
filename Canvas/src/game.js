import { game, overlay, keyboard, player, cvs } from './start';
import { enemies } from './enemies';

var playerBullets = [];

function updateGame() {
    if(game.state == "choose") {
    	game.state = "start";
    	overlay.counter = 0;
    }
    if(game.state == "playing" && enemies.length == 0) {
        game.state = "won";
        overlay.title = "SWARM DEAD";
        overlay.subtitle = "press space to play again";
        overlay.counter = 0;
    }
    if(game.state == "over" && keyboard[32]) {
        game.state = "start";
        player.state = "alive";
        overlay.counter = -1;
    }
    if(game.state == "won" && keyboard[32]) {
        game.state = "start";
        player.state = "alive";
        overlay.counter = -1;
    }
    
    if(overlay.counter >= 0) {
        overlay.counter++;
    }

    
}
function updatePlayer() {
    if(player.state == "dead") return;
    
    //left arrow
	if(keyboard[37])  { 
	    player.x -= 10; 
	    if(player.x < 0) player.x = 0;
	}	
	//right arrow
	if(keyboard[39]) { 
	    player.x += 10;	
	    var right = cvs.width - player.width;
	    if(player.x > right) player.x = right;
	}	
	
	//space bar
	if(keyboard[32]) {
		if(!keyboard.fired) { 
			firePlayerBullet(); 
			keyboard.fired = true;
		}
	} else {
		keyboard.fired = false;
	}
	
	if(player.state == "hit") {
	    player.counter++;
	    if(player.counter >= 40) {
	        player.counter = 0;
	        player.state = "dead";
	        game.state = "over";
	        overlay.title = "GAME OVER";
	        overlay.subtitle = "press space to play again";
	        overlay.counter = 0;
	    }
	}
}

function firePlayerBullet() {
  //create a new bullet
  playerBullets.push({
    x: player.x,
    x: player.x+14,
    y: player.y - 5,
    width:10,
    height:10,
    width: 20,
    height: 20,
    counter: 0,
  });
}

function updatePlayerBullets() {
	//move each bullet
	for(var i in playerBullets) {
		var bullet = playerBullets[i];
		bullet.y -= 6;
		bullet.counter++;
	}
	//remove the ones that are off the screen
	playerBullets = playerBullets.filter(function(bullet){
		return bullet.y > 0;
	});
}

function doSetup() {
	attachEvent(document, "keydown", function(e) {
		keyboard[e.keyCode] = true;
	});
	attachEvent(document, "keyup", function(e) {
		keyboard[e.keyCode] = false;
	});
}

function attachEvent(node,name,func) {
    if(node.addEventListener) {
        node.addEventListener(name,func,false);
    } else if(node.attachEvent) {
        node.attachEvent(name,func);
    }
};

export { updateGame, updatePlayer, updatePlayerBullets, doSetup, attachEvent, playerBullets, firePlayerBullet };