import { game, overlay } from './start';

export function drawOverlay(ctx) {
    if(game.state == "over") {
        ctx.fillStyle = "white";
        ctx.font = "Bold 40pt Arial";
        ctx.fillText("GAME OVER",140,200);
        ctx.font = "14pt Arial";
        ctx.fillText("press space to play again", 190,250);
    }
    if(game.state == "won") {
        ctx.fillStyle = "white";
        ctx.font = "Bold 40pt Arial";
        ctx.fillText("SWARM DEFEATED",50,200);
        ctx.font = "14pt Arial";
        ctx.fillText("press space to play again", 190,250);
    }
    // if(overlay.counter == -1) return;
 
    // // появление
    // var alpha = overlay.counter/50.0;
    // if(alpha > 1) alpha = 1;
    // ctx.globalAlpha = alpha;
    
    // ctx.save();
    // ctx.fillStyle = "white";
    // ctx.font = "Bold 40pt Arial";
    // ctx.fillText(overlay.title,140,200);
    // ctx.font = "14pt Arial";
    // ctx.fillText(overlay.subtitle, 190,250);
    // ctx.restore();
}
