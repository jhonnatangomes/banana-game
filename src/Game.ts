import Heart from './DrawableImages/Heart';
import Player from './Player';

export default class Game {
    score: Element;
    initialLives: number = 4;
    lives: number = 4;
    screenWidth: number;
    screenHeight: number;
    context: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    player: Player;

    constructor(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
        score: Element,
        screenWidth: number,
        screenHeight: number
    ) {
        this.canvas = canvas;
        this.context = context;
        this.score = score;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.player = new Player(context, screenWidth, screenHeight);
    }

    drawRect(
        x: number,
        y: number,
        width: number,
        height: number,
        color: string
    ) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.fillStyle = color;
        this.context.fill();
    }

    drawLives() {
        const filledHeartSrc = './sprites/heart.png';
        const unfilledHeartSrc = './sprites/heart-empty.png';

        for (let i = 1; i <= this.initialLives; i++) {
            const x = 11 + 40 * (i - 1);
            if (i <= this.lives) {
                const heart = new Heart(this.context, x, filledHeartSrc);
                heart.draw();
            } else {
                const heart = new Heart(this.context, x, unfilledHeartSrc);
                heart.draw();
            }
        }
    }

    createPlayerMovement() {
        this.canvas.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight' || event.key === 'd') {
                this.player.moveRight();
            }
            if (event.key === 'ArrowLeft' || event.key === 'a') {
                this.player.moveLeft();
            }
        });
    }

    start() {
        this.drawRect(0, 0, this.screenWidth, 65, 'black');
        this.drawRect(
            9,
            this.screenHeight - 26,
            this.screenWidth - 18,
            1,
            'white'
        );
        this.drawLives();
        this.player.draw();
        this.createPlayerMovement();
    }
}
