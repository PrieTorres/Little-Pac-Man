import { wall } from "./Wall";

export class BaseSprite {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  #move(x: number = 0, y: number = 0) {
    this.x += x;
    this.y += y;
  }

  protected moveCheckingWalls(x: number, y: number, walls: wall[]): void {
    const newPosition = {
      x: this.x + x,
      y: this.y + y
    }

    if(this.checkHitWall(newPosition, walls)) return;

    return this.#move(x, y);
  }

  protected checkHitWall(position: {x: number, y: number}, walls: wall[]): boolean{
    for (const wall of walls) {
      if(position.x === wall.x && position.y < (wall.y + wall.heigth) && position.y > wall.y){
        return false;
      }
      if(position.y === wall.y && position.x < (wall.x + wall.width) && position.x > wall.x){
        return false;
      }
    }

    return true;
  }
}