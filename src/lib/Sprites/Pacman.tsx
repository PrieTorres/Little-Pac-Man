import { Colors } from "../../components/Styles/COLORS";
import { BaseSprite } from "./BaseSprite";
import { Wall } from "./Wall";
import pacmanImgLeft from "../../assets/images/pacman/pacman_left.png";
import pacmanImgRigth from "../../assets/images/pacman/pacman_rigth.png";
import pacmanImgBottom from "../../assets/images/pacman/pacman_bottom.png";
import pacmanImgTop from "../../assets/images/pacman/pacman_top.png";

enum imagePacman {
  GOING_LEFT = "GOING_LEFT",
  GOING_RIGTH = "GOING_RIGHT",
  GOING_TOP = "GOING_TOP",
  GOING_BOTTOM = "GOING_BOTTOM",
}

const imagePaths = {
  [imagePacman.GOING_LEFT]: pacmanImgLeft,
  [imagePacman.GOING_RIGTH]: pacmanImgRigth,
  [imagePacman.GOING_TOP]: pacmanImgTop,
  [imagePacman.GOING_BOTTOM]: pacmanImgBottom,
};

export class PacManSprite extends BaseSprite {
  ctx: CanvasRenderingContext2D;
  vel: number;
  status: imagePacman;

  constructor({
    x = 20,
    y = 20,
    width = 20,
    height = 20,
    color = Colors["yellow"],
    ctx,
    vel = 5,
    rotation = 90,
    status = imagePacman.GOING_LEFT,
  }: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    color?: Colors;
    vel?: number;
    ctx: CanvasRenderingContext2D;
    rotation?: number;
    status?: imagePacman;
  }) {
    super({ x, y, width, height, color, imageSrc: imagePaths[status], rotation });
    this.ctx = ctx;
    this.vel = vel;
    this.status = status;
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

    if (right || left) {
      if (right < left) {
        this.status = imagePacman.GOING_RIGTH;
      } else {
        this.status = imagePacman.GOING_LEFT;
      }
    }

    if (bottom || top) {
      if (bottom < top) {
        this.status = imagePacman.GOING_TOP;
      } else {
        this.status = imagePacman.GOING_BOTTOM;
      }
    }

    this.imageSrc = imagePaths[this.status];

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
