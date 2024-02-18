import { BaseSprite } from "./BaseSprite";

export class PacMan extends BaseSprite {
  constructor() {
    super();
  }

  public move(x, y) {
    super.moveCheckingWalls(x, y);
  }
};
