export type WallMetadata = {
  x: number;
  y: number;
  width: number;
  heigth: number;
};

export const constantWalls = {
  linearHorizontalTop: {
    x: 0,
    y: 0,
    width: 100,
    heigth: 2,
  },
  linearHorizontalBottom: {
    x: 0,
    y: 100,
    width: 100,
    heigth: 2,
  },
  linearVerticalRigth: {
    x: 100,
    y: 0,
    width: 2,
    heigth: 100,
  },
  linearVerticalLeft: {
    x: 0,
    y: 0,
    width: 2,
    heigth: 100,
  },
  "80VerticalLeft30Top": {
    x: 30,
    y: 0,
    width: 2,
    heigth: 80,
  },
  "80VerticalLeft70Bottom": {
    x: 70,
    y: 20,
    width: 2,
    heigth: 80,
  },
};

export const constantsGeometrics = {
  square: {
    walls: [
      constantWalls.linearHorizontalBottom,
      constantWalls.linearHorizontalTop,
      constantWalls.linearVerticalRigth,
      constantWalls.linearVerticalLeft,
    ],
  },
};

export const constantsMaps = {
  lvl1: {
    walls: [
      ...constantsGeometrics.square.walls,
      constantWalls["80VerticalLeft30Top"],
      constantWalls["80VerticalLeft70Bottom"],
    ],
  },
};
