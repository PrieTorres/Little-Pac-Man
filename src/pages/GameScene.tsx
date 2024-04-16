import { useEffect, useRef } from "react";
import useCanvas from "../components/Canvas/UseCanvas";
import { constructWalls } from "../lib/core/constructWall";
import { PacManSprite } from "../lib/Sprites/Pacman";
import { Wall } from "../lib/Sprites/Wall";

export const GameScene = () => {
  const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const gameScreenHeight = window.innerHeight * 0.9;
  const gameScreenWidth = window.innerHeight * 0.9;
  const gameCanvas = useCanvas({ ref: canvasRef, gameScreenHeight, gameScreenWidth });
  const PacMan = useRef<null | PacManSprite>(null);
  const Walls = useRef<null | Wall[]>(null);

  useEffect(() => {
    if (canvasRef?.current && canvasRef?.current instanceof HTMLCanvasElement) {
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
      PacMan.current = new PacManSprite({ x: 0, y: 0, width: 100, height: 100, ctx });
      Walls.current = constructWalls(ctx);
      PacMan.current.draw();
    }
  }, [gameScreenHeight, gameScreenWidth, canvasRef]);

  useEffect(() => {
    let currentInterval: string | number | NodeJS.Timeout | undefined;
    const dispatchPacmanMovements = (e: KeyboardEvent) => {
      if (!PacMan.current?.vel || !Walls.current) return;

      const dispatchMovement = (
        keys: Array<string>,
        moveData: { top?: number; bottom?: number; left?: number; right?: number },
      ) => {
        if (keys.includes(e.key)) {
          clearInterval(currentInterval);

          currentInterval = setInterval(() => {
            const hasMoved = PacMan.current?.move({ ...moveData, walls: Walls.current as Wall[] });
            if (!hasMoved) {
              clearInterval(currentInterval);
            }
          }, 25);
        }
      };

      dispatchMovement(["w", "ArrowUp", "W"], { top: PacMan.current?.vel });
      dispatchMovement(["s", "ArrowDown", "S"], { bottom: PacMan.current?.vel });
      dispatchMovement(["a", "ArrowLeft", "A"], { left: PacMan.current?.vel });
      dispatchMovement(["d", "ArrowRigth", "D"], { right: PacMan.current?.vel });
    };

    window.addEventListener("keydown", dispatchPacmanMovements);

    () => {
      removeEventListener("keydown", dispatchPacmanMovements);
      clearInterval(currentInterval);
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      {gameCanvas}
    </div>
  );
};
