import { Colors } from "../../components/Styles/COLORS";

export class Wall {
  x: number
  y: number
  width: number
  heigth: number

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = Colors.white;

    ctx.fillRect(
      this.x,
      this.y,
      this.width,
      this.heigth
    );
  }
}