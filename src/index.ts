// Start here
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collision";

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
    ball:Ball,
    collision:Collision
) {
    console.log("draw")
    view.clear()
    view.drawBrick(bricks)
    view.drawSprite(paddle)
    view.drawSprite(ball)

// move ball
    ball.moveBall()

    collision.checkBallCollision(ball,paddle,view)

// Move  paddle and check if it do not  exit from play field area
    if ((paddle.isMovingLeft && paddle.pos.x > 0 )
        || (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ){
        paddle.movePaddle()
    }

    requestAnimationFrame(()=> gameLoop(view,bricks,paddle,ball,collision))
}


function startGame (view: CanvasView){
    // reset
    score =0
    view.drawInfo('')
    view.drawScore(0)

    // collision instance
    const collision = new Collision()

    // create Bricks
    const bricks = createBricks()

    // create Ball
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        {
            x: BALL_STARTX,
            y:BALL_STARTY
        },
        BALL_IMAGE
    )

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

    gameLoop(view,bricks,paddle,ball,collision)

}


// create  a new view
const view = new CanvasView('#playField')
view.initStartButton(startGame);