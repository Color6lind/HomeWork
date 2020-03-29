import { player, ship_image, bullet_image, rect } from './start';
import { playerBullets } from './game';

var particles = [];

function drawPlayerExplosion(ctx) {
  // старт
  if(player.counter == 0) {
    particles = []; // стираем все старые значения
    for(var i = 0; i<50; i++) {
      particles.push({
        x: player.x + player.width/2,
        y: player.y + player.height/2,
        xv: (Math.random()-0.5)*2.0*2.0,  // скорость по x
        yv: (Math.random()-0.5)*2.0*2.0,  // скорость по y
        age: 0,
      });
    }
  }
  if(player.counter > 0) {
    for(var i=0; i<particles.length; i++) {
      var p = particles[i];
      p.x += p.xv;
      p.y += p.yv;
      var v = 255-p.age*3;
      ctx.fillStyle = "rgb("+v+","+v+","+v+")";
      ctx.fillRect(p.x,p.y,3,3);
      p.age++;
    }
  }
}

function drawPlayerBullets(ctx) {
  // ctx.fillStyle = "blue";
  for(var i in playerBullets) {
    var bullet = playerBullets[i];
    var count = Math.floor(bullet.counter/4);
    var xoff = (count%4)*24;
    // ctx.fillRect(bullet.x, bullet.y, bullet.width,bullet.height);
    ctx.drawImage(
      bullet_image,
      xoff+10,0+9,8,8,
      bullet.x,bullet.y,bullet.width,bullet.height
    );
  }
}

export { drawPlayerBullets, drawPlayerExplosion };