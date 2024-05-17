// Start here
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";

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
    // ball:Ball
) {
    console.log("draw")
    view.clear()
    view.drawBrick(bricks)
    view.drawSprite(paddle)

// Move  paddle and check if it do not  exit from play field area
    if ((paddle.isMovingLeft && paddle.pos.x > 0 )
        || (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ){
        paddle.movePaddle()
    }

    requestAnimationFrame(()=> gameLoop(view,bricks,paddle))
}


function startGame (view: CanvasView){
    // reset
    score =0
    view.drawInfo('')
    view.drawScore(0)

    // create Bricks
    const bricks = createBricks()

    // create Paddle
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        { x: PADDLE_STARTX,
          y:view.canvas.height - PADDLE_HEIGHT - 5
        },
        PADDLE_IMAGE
    )

    gameLoop(view,bricks,paddle)

}


// create  a new view
const view = new CanvasView('#playField')
view.initStartButton(startGame);