import { Colors } from "../../components/Styles/COLORS";
import { BaseSprite } from "./BaseSprite";
import { Wall } from "./Wall";
import pacmanImg from "../../assets/images/pacman.png";

export class PacManSprite extends BaseSprite {
  ctx: CanvasRenderingContext2D;
  vel: number;
  constructor({
    x = 0,
    y = 0,
    width,
    height,
    color,
    ctx,
    vel = 10,
  }: {
    x?: number;
    y?: number;
    width: number;
    height: number;
    color?: Colors;
    vel?: number;
    ctx: CanvasRenderingContext2D;
  }) {
    super({ x: x, y: y, width, height, color, imageSrc: pacmanImg });
    this.ctx = ctx;
    this.vel = vel;
  }

  move({
    top = 0,
    bottom = 0,
    right = 0,
    left = 0,
    walls,
  }: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    walls: Wall[];
  }): boolean {
    const hasMoved = super.moveCheckingWalls({ walls, top, left, right, bottom });
    if (hasMoved) {
      this.ctx.clearRect(
        this.x + left - right + this.width / 2,
        this.y - bottom + top + this.height / 2,
        this.width,
        this.height,
      );
      this.drawImage(this.ctx);
    }

    return hasMoved;
  }

  draw() {
    this.drawImage(this.ctx);
  }
}
