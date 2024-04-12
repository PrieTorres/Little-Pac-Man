import { Colors } from "../../components/Styles/COLORS";
import { BaseSprite } from "./BaseSprite";
import { Wall } from "./Wall";

export class PacMan extends BaseSprite {
  // constructor(
  //   { x = 0, y = 0, width, height, color, imageSrc }:
  //     { x: number, y: number, width: number, height: number, color?: Colors, imageSrc?: string }
  // ) {

  //   super({ x, y, width, height, color, imageSrc });
  // }

  move(x: number, y: number, walls: Wall[]): void {
    return super.moveCheckingWalls(x, y, walls);
  }
};
