export class BaseSprite {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  move(x: number = 0, y: number = 0){
    this.x += x;
    this.y += y
  }
}