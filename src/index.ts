// Start here
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/brick";
import { Paddle } from "./sprites/paddle";

//images
import PADDLE_IMAGE from "./images/paddle.png"
import BALL_IMAGE from "./images/ball.png"

// level and colors
import{
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
} from "./setup"

// helpers
import { createBricks } from "./helpers";

let gameOver = false
let score = 0

function setGameOver(view:CanvasView){
    view.drawInfo('Game Over')
    gameOver= false
}

function steGameWin (view: CanvasView) {
    view.drawInfo('Winner !!')
    gameOver= false
}

function gameLoop(
    view:CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball:Ball
) {}


function startGame (view: CanvasView){

}


// creat  a new view
const view = new CanvasView('#playField')
view.initStartButton(startGame);