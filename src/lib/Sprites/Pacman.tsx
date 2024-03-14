import { BaseSprite } from "./BaseSprite";
import { wall } from "./Wall";

export class PacMan extends BaseSprite {
  constructor(x: number, y:number) {

    super(x, y);
  }

  move(x: number, y: number, walls: wall[]): void {
    return super.moveCheckingWalls(x, y, walls);
  }
};
