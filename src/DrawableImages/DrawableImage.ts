export default abstract class DrawableImage {
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;

    constructor(
        context: CanvasRenderingContext2D,
        src: string,
        width: number,
        height: number
    ) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = () => {
            this.draw();
        };
    }

    draw() {
        this.context.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
