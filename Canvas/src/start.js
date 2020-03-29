import $ from 'jquery';
import { drawBackground } from './background';
import { checkCollisions, collided } from './collisions';
import { drawOverlay } from './overlay';
import { drawEnemies, createEnemyBullet, drawEnemyBullets, updateEnemies, updateEnemyBullets, enemies } from './enemies';
import { updateGame, updatePlayer, updatePlayerBullets, updateBackground, doSetup, attachEvent } from './game';
import { firePlayerBullet, drawPlayerBullets, drawPlayerExplosion } from './player';

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

$('.glitch-btn').on('click', (e) => {
  e.preventDefault();
  $('#screen').slideUp();
  setTimeout(() => {
    $('#canvas').slideDown();
    $('#alien__img').slideDown();
  }, 100);

let sprite = function(x, y, pos, w, h) {
  ctx.drawImage(ship_image,
    pos, 1, w, h,
    x, y, player.width, player.height 
  );
}

let finally_func = function() {
  ctx.clearRect(0, 0, 600, 400);
}

let Choose = function(x, y, pos, w, h) {
  this.x = x;
  this.y = y;
  this.pos = pos;
  this.w = w;
  this.h = h;
  this.selected = false;
}

Choose.prototype = {
  draw_ship: function() {
    sprite(this.x, this.y, this.pos, this.w, this.h);
  },
  finally: function() {
    finally_func();
  },
  select: function() {
    this.selected = !this.selected;
  }
};

let rect = [];
let i = 0;
let ship_num = 0;

for (; i<3; i++) {
  rect.push(new Choose(i * 180 + 100, 300, ship_num, 23, 23));
  ship_num = ship_num + 25.2;
}

var isCoursorInRect = function(x, y, rect) {
  return x > rect.x && 
         x < rect.x + rect.w &&
         y > rect.y && 
         y < rect.y + rect.h;    
}

cvs.onclick = function(e) {
  var x = e.offsetX,
      y = e.offsetY;
      console.log(player.character);
  for(i in rect){
    if(isCoursorInRect(x, y, rect[i])) {
      rect[i].select();
      
      
    }
  }
}

setInterval(function() {
  for(i in rect){
    rect[i].draw_ship();
    if(rect[i].selected && rect[i].pos == 25.2 ) {
      player.character = 2;
      rect[i].select();
      clearInterval();
      startGame();
      // console.log(222)
    }
    if(rect[i].selected && rect[i].pos == 0 ) {
      player.character = 1;
      rect[i].select();
      clearInterval();
      startGame();
      // console.log(111)
    }
    if(rect[i].selected && rect[i].pos == 50.4 ) {
      player.character = 3;
      rect[i].select();
      clearInterval();
      startGame();
      // console.log(333)
    }

  }
}, 30);

  if (cvs.classList.contains("hide")) {
    drawBackground(ctx);
    ctx.fillStyle = "white";
    ctx.font = "Bold 30pt Arial";
    ctx.fillText("CHOOSE A SPACE SHIP",65,200);
  }
});

function startGame() {
  window.requestAnimationFrame(mainLoop);
}

function drawPlayer(ctx) {
    if(player.state == "dead") return;
    
    if(player.state == "hit") {
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(player.x,player.y, player.width, player.height);
        drawPlayerExplosion(ctx);
      return;
  }

  if(player.character == 1) {
    ctx.drawImage(ship_image,
      0,1, 23,23, // исходные координаты
      player.x, player.y, player.width, player.height // конечные координаты
    );
  }

  if(player.character == 2) {
    ctx.drawImage(ship_image,
      24,1, 23,23, // исходные координаты
      player.x, player.y, player.width, player.height // конечные координаты
    );
  }
  
  if(player.character == 3) {
    ctx.drawImage(ship_image,
      48,1, 23,23, // исходные координаты
      player.x, player.y, player.width, player.height // конечные координаты
    );
  }

}

var ship_image;
var bomb_image;
var bullet_image;

var game = {
    state: "start",
};

var overlay = {
    counter: -1,
    title: "foo",
    subtitle: "bar",
};

var player = {
  x:100,
  y:350,
  width: 20,
  height: 50,
  counter: 0,
  character: 1,
};

player.height = 46;
player.width = 46;

var keyboard = { };
 
loadResources();

function loadResources() {
  ship_image = new Image();
  ship_image.src = "../img/hunter1.png";

  bomb_image = new Image();
  bomb_image.src = "../img/bomb.png";
 
  bullet_image = new Image();
  bullet_image.src = "../img/bullets.png";
}



function mainLoop() {
  var ctx = cvs.getContext('2d');

  updateGame();
  updateEnemies();
  updatePlayer();
  
  updatePlayerBullets();
  updateEnemyBullets();

  checkCollisions();
  
  drawBackground(ctx);
  drawEnemies(ctx);
  drawPlayer(ctx);
  drawEnemyBullets(ctx);
  drawPlayerBullets(ctx);
  drawOverlay(ctx);

  doSetup();

  requestAnimationFrame(mainLoop);  
}

export { game, overlay, player, keyboard, ctx, cvs, ship_image, bomb_image, bullet_image };