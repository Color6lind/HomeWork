import { ctx, cvs } from './start';

function drawBackground(ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,cvs.width,cvs.height);
}

export { drawBackground };