import { Colors } from "../../components/Styles/COLORS";
import { Wall } from "./Wall";

export class BaseSprite {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: Colors;
  imageSrc?: string;
  image?: HTMLImageElement;
  isLoaded?: boolean;

  constructor(
    { x = 0, y = 0, width, height, color, imageSrc }: 
    { x: number, y: number, width: number, height: number, color?: Colors, imageSrc?: string }
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.imageSrc = imageSrc;
  }

  #move(x: number = 0, y: number = 0) {
    this.x += x;
    this.y += y;
  }

  protected drawSquare(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color ?? "#000";

    ctx.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  protected drawImage(ctx: CanvasRenderingContext2D): void {
    this.image = new Image(this.width, this.height);
    this.image.src = this.imageSrc ?? "";
    this.image.onload = () => {
      this.isLoaded = true;
    };

    if (this.isLoaded)
      ctx.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height,
      );
  }

  protected moveCheckingWalls(x: number, y: number, walls: Wall[]): void {
    const newPosition = {
      x: this.x + x,
      y: this.y + y
    }

    if (this.checkHitWall(newPosition, walls)) return;

    return this.#move(x, y);
  }

  protected checkHitWall(position: { x: number, y: number }, walls: Wall[]): boolean {
    for (const wall of walls) {
      if (position.x === wall.x && position.y < (wall.y + wall.heigth) && position.y > wall.y) {
        return false;
      }
      if (position.y === wall.y && position.x < (wall.x + wall.width) && position.x > wall.x) {
        return false;
      }
    }

    return true;
  }
}