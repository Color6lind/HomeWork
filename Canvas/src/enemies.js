import { game, bomb_image, ctx } from './start';

var enemies = [];
var enemyBullets = [];

function drawEnemies(ctx) {
    for(var i in enemies) {
        var enemy = enemies[i];
        if(enemy.state == "alive") {
            ctx.fillStyle = "green";
            drawEnemy(ctx, enemy, 15);
        }
        if(enemy.state == "hit") {
            ctx.fillStyle = "purple";
            enemy.shrink--
            drawEnemy(ctx, enemy, enemy.shrink);
        }
        //this probably won't ever be called.
        if(enemy.state == "dead") {
            ctx.fillStyle = "black";
            ctx.drawEnemy(ctx, enemy, 15);
        }
    }
}

function drawEnemy(ctx,enemy,radius) {
  if(radius <=0) radius = 1;
  var theta = enemy.counter;
  ctx.save();
  ctx.translate(0,30);
  // рисуем фоновый круг
  circlePath(ctx, enemy.x, enemy.y, radius*2);
  ctx.fill();
  // рисуем волнистые точки
  for(var i=0; i<10; i++) {
    var xoff = Math.sin(toRadians(theta+i*36*2))*radius;
    var yoff = Math.sin(toRadians(theta+i*36*1.5))*radius;
    circlePath(ctx, enemy.x + xoff, enemy.y + yoff, 3);
    ctx.fillStyle = "white";
    ctx.fill();
  }
  ctx.restore();
}

function toRadians(d) {
  return d * Math.PI * 2.0 / 360.0;
}

function circlePath(c, x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.arc(x,y, r, 0, Math.PI*2);
}

function createEnemyBullet(enemy) {
    return {
        x:enemy.x,
        y:enemy.y+enemy.height,
        width:4,
        height:12,
        counter:0,
        width:30,
        height:30,
        counter:0,
    }
}

function drawEnemyBullets(ctx) {
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(bullet.x, bullet.y , bullet.width, bullet.height);
        var xoff = (bullet.counter%9)*12 + 1;
        var yoff = 1;
        ctx.drawImage(bomb_image,
        xoff,yoff,11,11,
        bullet.x,bullet.y,bullet.width,bullet.height
        );
    }
}

// ============== Animation Enemy =============

function updateEnemies() {
    
    //create 10 new enemies the first time through
    if(game.state == "start") {
        enemies = [];
        enemyBullets = [];
        for(var i=0; i<10; i++) {
            enemies.push({
                    x: 50+ i*50,
                    y: 10,
                    width: 40,
                    height: 40,
                    state: "alive", // the starting state of enemies
                    counter: 0, // a counter to use when calculating effects in each state
                    phase: Math.floor(Math.random()*50), //make the enemies not be identical
                    shrink: 20,
            });
        }
        game.state = "playing";
    }
    
    //for each enemy
    for(var i=0; i<10; i++) {
        var enemy = enemies[i];
        if(!enemy) continue;
        
        //float back and forth when alive
        if(enemy && enemy.state == "alive") {
            enemy.counter++;
            enemy.x += Math.sin(enemy.counter*Math.PI*2/100)*2;
            //fire a bullet every 50 ticks
            //use 'phase' so they don't all fire at the same time
            if((enemy.counter + enemy.phase) % 200 == 0) {
                enemyBullets.push(createEnemyBullet(enemy));
            }
        }
        
        //enter the destruction state when hit
        if(enemy && enemy.state == "hit") {
            enemy.counter++;
            
            //finally be dead so it will get cleaned up
            if(enemy.counter >= 20) {
                enemy.state = "dead";
                enemy.counter = 0;
            }
        }
    }
    
    //remove the dead ones
    enemies = enemies.filter(function(e) {
            if(e && e.state != "dead") return true;
            return false;
    });
}

function updateEnemyBullets() {
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        bullet.y += 2;
        bullet.counter++;
    }
}

export { drawEnemies, createEnemyBullet, drawEnemyBullets, updateEnemies, 
         updateEnemyBullets, enemyBullets, enemies, drawEnemy,  };