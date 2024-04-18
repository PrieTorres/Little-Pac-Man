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

  constructor({
    x = 0,
    y = 0,
    width,
    height,
    color,
    imageSrc,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    color?: Colors;
    imageSrc?: string;
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.imageSrc = imageSrc;
  }

  #move(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  protected drawSquare(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color ?? "#000";

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  protected drawImage(ctx: CanvasRenderingContext2D): void {
    this.image = new Image(this.width, this.height);
    this.image.src = this.imageSrc ?? "";
    this.image.onload = () => {
      this.isLoaded = true;
      ctx.drawImage(
        this.image as CanvasImageSource,
        this.x, // + this.width / 2,
        this.y, // + this.height / 2,
        this.width,
        this.height,
      );
    };
  }

  protected moveCheckingWalls({
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
    const newPosition = {
      x: this.x + right - left,
      y: this.y + bottom - top,
    };

    if (newPosition.x < 0) newPosition.x = 0;
    if (window?.innerHeight && newPosition.x > window.innerWidth) newPosition.x = window.innerWidth;

    if (newPosition.y < 0) newPosition.y = 0;
    if (window?.innerHeight && newPosition.y > window.innerHeight) newPosition.y = window.innerHeight;

    if (this.checkHitWall(newPosition, walls)) return false;

    this.#move(newPosition.x, newPosition.y);
    return true;
  }

  getPositionsCentered({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
    const pos = {
      top: y,
      bottom: y + height / 2,
      left: x - width / 2,
      right: x + width / 2,
    };

    return pos;
  }
  getPositions({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
    const pos = {
      top: y,
      bottom: y + height,
      left: x,
      right: x + width,
    };

    return pos;
  }

  protected checkHitWall(position: { x: number; y: number }, walls: Wall[]): boolean {
    const { top, bottom, left, right } = this.getPositions({
      x: position.x,
      y: position.y,
      width: this.width,
      height: this.height,
    });

    for (const wall of walls) {
      const wallPositions = this.getPositions(wall);

      const isCollapsed =
        top <= wallPositions.bottom && // >=
        bottom >= wallPositions.top && // s
        left <= wallPositions.right && // s
        right >= wallPositions.left; // s
      //|| // s
      //(bottom >= wallPositions.top &&
      //  top <= wallPositions.bottom &&
      //  left <= wallPositions.right &&
      //  right >= wallPositions.left);

      if (isCollapsed) return true;
    }

    return false;
  }
}
