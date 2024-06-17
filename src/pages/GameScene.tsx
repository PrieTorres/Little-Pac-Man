import { useEffect, useRef } from "react";
import useCanvas from "../components/Canvas/UseCanvas";
import { constructWalls } from "../lib/core/constructWall";
import { PacManSprite } from "../lib/Sprites/Pacman";
import { Wall } from "../lib/Sprites/Wall";
import { GhostSprite } from "../lib/Sprites/Ghost";

export const GameScene = () => {
  const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const gameScreenHeight = window.innerHeight * 0.9;
  const gameScreenWidth = window.innerHeight * 0.9;
  const gameCanvas = useCanvas({ ref: canvasRef, gameScreenHeight, gameScreenWidth });
  const PacMan = useRef<null | PacManSprite>(null);
  const Walls = useRef<null | Wall[]>(null);
  const Ghosts = useRef<null | GhostSprite[]>(null);

  useEffect(() => {
    if (canvasRef?.current && canvasRef?.current instanceof HTMLCanvasElement) {
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
      PacMan.current = new PacManSprite({ ctx });
      Walls.current = constructWalls(ctx);
      Ghosts.current = [new GhostSprite({ ctx })];
      PacMan.current.draw();
      Ghosts.current.forEach((ghost) => ghost?.draw());
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

  useEffect(() => {
    let count = 0; // TODO: put this logic inside ghost somehow;
    let lastmovements = {};

    const ghostMovementInterval = setInterval(() => {
      Ghosts.current?.forEach((ghost) => {
        if (count == 100 || count == 0) {
          count = 1;
          lastmovements = ghost.automaticMove({ walls: Walls.current as Wall[] });
        }

        const moved = ghost.move({
          walls: Walls.current as Wall[],
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          ...lastmovements,
        });
        if (!moved) {
          return (count = 0);
        }

        count++;
      });
    }, 50);

    return () => clearInterval(ghostMovementInterval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      {gameCanvas}
    </div>
  );
};
