import DrawableImage from './DrawableImage';

export default class Heart extends DrawableImage {
    width: number = 40;
    height: number = 40;
    x: number;
    y: number = 12;
    src: string;

    constructor(context: CanvasRenderingContext2D, x: number, src: string) {
        super(context, src, 40, 40);
        this.x = x;
        this.src = src;
    }

    draw() {
        super.draw();
    }
}
