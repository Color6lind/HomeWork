import { playerBullets } from './game';
import { player } from './start';
import { enemyBullets, enemies } from './enemies';

function checkCollisions() {
    for(var i in playerBullets) {
        var bullet = playerBullets[i];
        for(var j in enemies) {
            var enemy = enemies[j];
            if(collided(bullet,enemy)) {
                bullet.state = "hit";
                enemy.state = "hit";
                enemy.counter = 0;
            }
        }
    }
    
    if(player.state == "hit" || player.state == "dead") return;
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        if(collided(bullet,player)) {
            bullet.state = "hit";
            player.state = "hit";
            player.counter = 0;
        }
    }
}

function collided(a, b) {
    
    //check for horz collision
    if(b.x + b.width >= a.x && b.x < a.x + a.width) {
        //check for vert collision
        if(b.y + b.height >= a.y && b.y < a.y + a.height) {
            return true;
        }
    }
    
    //check a inside b
    if(b.x <= a.x && b.x + b.width >= a.x+a.width) {
        if(b.y <= a.y && b.y + b.height >= a.y + a.height) {
            return true;
        }
    }
    
    //check b inside a
    if(a.x <= b.x && a.x + a.width >= b.x+b.width) {
        if(a.y <= b.y && a.y + a.height >= b.y+b.height) {
            return true;
        }
    }
    
    return false;
}

export { checkCollisions, collided };