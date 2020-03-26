import $ from 'jquery';
import { drawBackground } from './background';
import { checkCollisions, collided } from './collisions';
import { drawOverlay } from './overlay';
import { drawEnemies, createEnemyBullet, drawEnemyBullets, updateEnemies, updateEnemyBullets, enemies } from './enemies';
import { updateGame, updatePlayer, updatePlayerBullets, updateBackground, doSetup, attachEvent } from './game';
import { firePlayerBullet, drawPlayer, drawPlayerBullets } from './player';

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');
 
// cvs.width = window.innerWidth;
// cvs.height = window.innerHeight;

$('#btn__start').on('click', () => {
  console.log('enable');
  $('#screen').slideUp();
  setTimeout(() => {
    $('#canvas').slideDown();
  }, 1000);

  if (cvs.classList.contains("hide")) {
    window.requestAnimationFrame(mainLoop);
  }
});

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
  updateBackground();
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


// function start() {
//   setInterval(mainLoop,1000/30);
// }

// start();

export { game, overlay, player, keyboard, ctx, cvs, ship_image, bomb_image, bullet_image };