export class Wall {
  x: number
  y: number
  width: number
  heigth: number
  rotationDeg: number

  constructor(x: number, y: number, width: number, height: number, rotation: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
    this.rotationDeg = rotation;
  }
}