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
}
