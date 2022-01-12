import DrawableImage from './DrawableImages/DrawableImage';

export default class Player extends DrawableImage {
    context: CanvasRenderingContext2D;
    width: number = 65;
    height: number = 97;
    src: string = './sprites/alien.png';
    speed: number = 10;

    constructor(
        context: CanvasRenderingContext2D,
        screenWidth: number,
        screenHeight: number
    ) {
        super(context, './sprites/alien.png', 64, 97);
        this.context = context;
        this.x = (screenWidth - this.width) / 2;
        this.y = screenHeight - 27 - this.height;
    }

    draw() {
        super.draw();
    }

    moveRight() {
        this.clearPlayer();
        this.x += this.speed;
        this.draw();
    }

    moveLeft() {
        this.clearPlayer();
        this.x -= this.speed;
        this.draw();
    }

    clearPlayer() {
        this.context.clearRect(this.x, this.y, this.width, this.height);
    }
}
