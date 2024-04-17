import { Wall } from "../Sprites/Wall";
import { WallMetadata, constantsMaps } from "./CONSTANTS";

export const constructWalls = (
  ctx: CanvasRenderingContext2D,
  wallsMetadata: Array<WallMetadata> = constantsMaps.lvl1.walls,
) => {
  return wallsMetadata.map((wallMetadata) => {
    const { x, y, height, width } = wallMetadata;
    const wall = new Wall(x, y, width, height);
    wall.draw(ctx);
    return wall;
  });
};
