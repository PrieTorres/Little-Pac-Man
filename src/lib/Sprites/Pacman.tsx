import { Colors } from "../../components/Styles/COLORS";
import { BaseSprite } from "./BaseSprite";
import { Wall } from "./Wall";
import pacmanImg from "../../assets/images/pacman.png";

export class PacManSprite extends BaseSprite {
  ctx: CanvasRenderingContext2D;
  vel: number;
  constructor({
    x = 20,
    y = 20,
    width,
    height,
    color = Colors["yellow"],
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
    this.draw({
      x: this.x - right + left,
      y: this.y + top - bottom,
      w: this.width,
      h: this.height,
    });

    return hasMoved;
  }

  draw(beforePositions?: { x: number; y: number; w: number; h: number }) {
    this.drawImage(
      this.ctx,
      beforePositions
        ? () => {
            this.ctx.clearRect(beforePositions.x, beforePositions.y, beforePositions.w, beforePositions.h);
          }
        : undefined,
    );
  }
}
