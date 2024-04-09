import { Colors } from "../../components/Styles/COLORS";

export class Wall {
  x: number;
  y: number;
  width: number;
  heigth: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = Colors.white;

    let xposition = (this.x * ctx.canvas.clientWidth) / 100;
    let yposition = (this.y * ctx.canvas.clientHeight) / 100;
    const widthPx = (this.width * ctx.canvas.clientWidth) / 100;
    const heigthPx = (this.heigth * ctx.canvas.clientHeight) / 100;

    if (xposition >= ctx.canvas.clientWidth - widthPx) {
      xposition = ctx.canvas.clientWidth - widthPx;
    }

    if (yposition >= ctx.canvas.clientHeight - heigthPx) {
      yposition = ctx.canvas.clientHeight - heigthPx;
    }

    ctx.fillRect(xposition, yposition, widthPx, heigthPx);
  }
}
