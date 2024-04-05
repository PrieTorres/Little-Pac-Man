export interface wall {
  x: number
  y: number
  width: number
  heigth: number
}

export class Wall {
  x: number
  y: number
  width: number
  heigth: number

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = height;
  }
}