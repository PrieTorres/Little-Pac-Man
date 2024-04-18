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
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

    const hasMoved = super.moveCheckingWalls({ walls, top, left, right, bottom });
    //if (hasMoved) {
    this.draw();
    //}

    return hasMoved;
  }

  draw() {
    this.ctx.fillStyle = this.color ?? Colors.white;

    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.drawImage(this.ctx);
  }
}
