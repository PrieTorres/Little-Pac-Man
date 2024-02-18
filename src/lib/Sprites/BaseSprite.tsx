export class BaseSprite {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  protected move(x: number = 0, y: number = 0) {
    this.x += x;
    this.y += y;
  }

  protected moveCheckingWalls(x, y, walls) {
    walls.forEach(wall => {

    });

    return this.move(x, y);
  }
}