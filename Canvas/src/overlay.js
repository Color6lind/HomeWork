import { game, overlay } from './start';

export function drawOverlay(ctx) {
    if(game.state == "over") {
        ctx.fillStyle = "white";
        ctx.font = "Bold 40pt Arial";
        ctx.fillText("TRY AGAIN",150,200);
        ctx.font = "14pt Arial";
        ctx.fillText("press space to play again", 190,250);

    }
    if(game.state == "won") {
        ctx.fillStyle = "white";
        ctx.font = "Bold 40pt Arial";
        ctx.fillText("YOU WON",160,200);
        ctx.font = "14pt Arial";
        ctx.fillText("press space to play again", 190,250);
    }
    if(game.state == "end") {
        ctx.fillStyle = "white";
        ctx.font = "Bold 40pt Arial";
        ctx.fillText("END GAME",150,200);
        ctx.font = "14pt Arial";
        ctx.fillText("press space to play again", 190,250);
    }
}
