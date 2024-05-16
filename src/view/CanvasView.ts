//types
import { Brick } from "~/sprites/brick";
import { Paddle } from "~/sprites/paddle";
import { Ball } from "~/sprites/Ball";

export class CanvasView {
     canvas: HTMLCanvasElement;
     context: CanvasRenderingContext2D | null;
     scoreDisplay: HTMLObjectElement | null ;
     start: HTMLObjectElement | null ;
     info: HTMLObjectElement | null ;

    constructor(canvasName:string){
        this.canvas =  document.querySelector (canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score')
        this.start = document.querySelector('#start')
        this.info = document.querySelector('#info')
    }

    clear(): void{
        this.context?.clearRect(0,0, this.canvas.width, this.canvas.height);

    }

    initStartButton(startFunction: (view: CanvasView)=> void) : void {
        this.start?.addEventListener('click',() => startFunction(this))

      }

    drawScore(score: number):void{
        if (this.scoreDisplay) this.scoreDisplay.innerHTML= score.toString()
      }

    drawInfo(text: string):void{
        if (this.info) this.info.innerHTML = text
    }

    drawSprite(brick: Brick) : void{
        if (!brick) return

        this.context?.drawImage(
            brick.image,
            brick.pos.x,
            brick.pos.y,
            brick.width,
            brick.height
        )
    }

    drawBrick(brick: Brick[]) : void{
        brick.forEach(brick => this.drawSprite(brick))
    }

    }