import { Colors } from "../../components/Styles/COLORS";

export class Wall {
  xPercent: number;
  yPercent: number;
  widthPercent: number;
  heigthPercent: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.xPercent = x;
    this.yPercent = y;
    this.widthPercent = width;
    this.heigthPercent = height;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  calcProportions(ctx: CanvasRenderingContext2D) {
    const xposition = (this.xPercent * ctx.canvas.clientWidth) / 100;
    const yposition = (this.yPercent * ctx.canvas.clientHeight) / 100;
    const widthPx = (this.widthPercent * ctx.canvas.clientWidth) / 100;
    const heigthPx = (this.heigthPercent * ctx.canvas.clientHeight) / 100;

    this.x = xposition;
    this.y = yposition;
    this.width = widthPx;
    this.height = heigthPx;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = Colors.white;

    this.calcProportions(ctx);

    if ((this.x as number) >= ctx.canvas.clientWidth - (this.width ?? 0)) {
      this.x = ctx.canvas.clientWidth - (this.width ?? 0);
    }

    if ((this.y as number) >= ctx.canvas.clientHeight - (this.height ?? 0)) {
      this.y = ctx.canvas.clientHeight - (this.height ?? 0);
    }

    ctx.fillRect(this.x as number, this.y as number, this.width as number, this.height as number);
  }
}
