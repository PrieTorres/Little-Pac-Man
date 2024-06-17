import { Colors } from "../../components/Styles/COLORS";
import { BaseSprite } from "./BaseSprite";
import { Wall } from "./Wall";
import ghostImgLeft from "../../assets/images/ghosts/red_ghost_left.png";
import ghostImgRigth from "../../assets/images/ghosts/red_ghost_left.png";
import ghostImgBottom from "../../assets/images/ghosts/red_ghost_left.png";
import ghostImgTop from "../../assets/images/ghosts/red_ghost_left.png";

enum ghostImage {
  GOING_LEFT = "GOING_LEFT",
  GOING_RIGTH = "GOING_RIGHT",
  GOING_TOP = "GOING_TOP",
  GOING_BOTTOM = "GOING_BOTTOM",
}

const imagePaths = {
  [ghostImage.GOING_LEFT]: ghostImgLeft,
  [ghostImage.GOING_RIGTH]: ghostImgRigth,
  [ghostImage.GOING_TOP]: ghostImgBottom,
  [ghostImage.GOING_BOTTOM]: ghostImgTop,
};

export type GhostMovementTypes = "RANDOM" | "UNTILEND" | "ALWAYSLEFT" | "ALWAYSRIGHT" | "CORDINATES";

export class GhostSprite extends BaseSprite {
  ctx: CanvasRenderingContext2D;
  vel: number;
  status: ghostImage;

  constructor({
    x = 0,
    y = 0,
    width = 20,
    height = 20,
    color = Colors["yellow"],
    ctx,
    vel = 5,
    status = ghostImage.GOING_LEFT,
  }: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    color?: Colors;
    vel?: number;
    ctx: CanvasRenderingContext2D;
    status?: ghostImage;
  }) {
    super({
      x: x || ctx.canvas.clientWidth - 100,
      y: y || ctx.canvas.clientHeight - 100,
      width,
      height,
      color,
      imageSrc: imagePaths[status],
    });
    this.ctx = ctx;
    this.vel = vel;
    this.status = status;
  }

  automaticMove({ movementType, walls }: { movementType?: GhostMovementTypes; walls: Wall[] }) {
    switch (movementType) {
      default:
        return this.randomMove(walls);
    }
  }

  randomMove(walls: Wall[], count: number = 0) {
    if (count > 5) return {};
    const randomZero = (num: number) => Math.floor(Math.random() * 2) * num;

    const { left, bottom } = {
      left: randomZero(this.vel),
      bottom: randomZero(this.vel),
    };

    let { right, top } = {
      right: 0,
      top: 0,
    };

    if (left === 0) right = this.vel;
    if (bottom === 0) top = this.vel;

    const moved = this.move({ left, right, bottom, top, walls });
    if (!moved) this.randomMove(walls, count + 1);

    return { left, right, bottom, top };
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
        this.status = ghostImage.GOING_RIGTH;
      } else {
        this.status = ghostImage.GOING_LEFT;
      }
    }

    if (bottom || top) {
      if (bottom < top) {
        this.status = ghostImage.GOING_TOP;
      } else {
        this.status = ghostImage.GOING_BOTTOM;
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
