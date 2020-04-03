import $ from 'jquery';
import { game, overlay, keyboard, player, cvs, parseTime, time } from './start';
import { enemies } from './enemies';

var playerBullets = [];
var heart = 3;
var node = document.getElementById('heart__pos')
var img_heart = document.querySelectorAll('#heart__pos img');

function updateGame() {
    if(game.state == "choose") {
    	game.state = "start";
    	overlay.counter = 0;
    }
    if(game.state == "playing" && enemies.length == 0) {
        game.state = "won";
        overlay.title = " DEAD";
        overlay.subtitle = "press space to play again";
        overlay.counter = 0;
    }
    if(game.state == "over" && keyboard[32]) {
    	game.state = "start";
        player.state = "alive";
        overlay.counter = -1;
        
        switch (heart) {
        	case 3:
        		node.removeChild(img_heart[2]);
        		heart = 2;
        		break;
        	case 2:
        		node.removeChild(img_heart[1]);
        		heart = 1;
        		break;
        	case 1:
        		node.parentNode.removeChild(node);
        		heart = 0;
        		break;
        }
    }
    if (game.state == "end" && keyboard[32]) {
    	end__menu();
    }

    if(game.state == "won" && keyboard[32]) {
        end__menu();
    }
    
    if(overlay.counter >= 0) {
        overlay.counter++;
    }
}

function end__menu() {
	let last__time = time;
	$('#canvas').slideUp();
	$('.timer').slideUp();
	$('#alien__img').slideUp();
	$('#screen__over').slideDown();
	document.getElementById('finaly__time').innerHTML = parseTime(last__time);
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
	        if (heart == 1) {
	        	node.parentNode.removeChild(node);
	        	game.state = "end";
	        	return false
	        } else {
	        	game.state = "over";
	        }
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