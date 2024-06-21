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
      Ghosts.current = [new GhostSprite({ ctx }), new GhostSprite({ ctx }), new GhostSprite({ ctx })];
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

      dispatchMovement(["w", "W"], { top: PacMan.current?.vel });
      dispatchMovement(["s", "S"], { bottom: PacMan.current?.vel });
      dispatchMovement(["a", "A"], { left: PacMan.current?.vel });
      dispatchMovement(["d", "D"], { right: PacMan.current?.vel });
    };

    /* TODO:
     * less code repeation
     * pacman does not move when ghosts change direction
     * ghos movement unstable
     */
    let ghostsCurrentInterval: string | number | NodeJS.Timeout | undefined;
    const dispatchGhostMovements = (e: KeyboardEvent, indexGhost: number) => {
      const ghost = Ghosts?.current?.[indexGhost];
      if (!ghost || !Walls.current) return;

      const dispatchMovement = (
        keys: Array<string>,
        moveData: { top?: number; bottom?: number; left?: number; right?: number },
      ) => {
        if (keys.includes(e.key)) {
          clearInterval(currentInterval);
          ghostsCurrentInterval = setInterval(() => {
            const hasMoved = ghost.move({ ...moveData, walls: Walls.current as Wall[] });
            if (!hasMoved) {
              clearInterval(ghostsCurrentInterval);
            }
          }, 25);
        }
      };

      dispatchMovement(["ArrowUp", "8"], { top: ghost.vel });
      dispatchMovement(["ArrowDown", "2"], { bottom: ghost.vel });
      dispatchMovement(["ArrowRight", "6"], { right: ghost.vel });
      dispatchMovement(["ArrowLeft", "8"], { left: ghost.vel });
    };

    const dispatchAllGhostsMoves = (event: KeyboardEvent) => {
      Ghosts.current?.forEach((ghost, i) => {
        dispatchGhostMovements(event, i);
      });
    };

    window.addEventListener("keydown", dispatchPacmanMovements);
    window.addEventListener("keydown", dispatchAllGhostsMoves);

    return () => {
      removeEventListener("keydown", dispatchPacmanMovements);
      removeEventListener("keydown", dispatchAllGhostsMoves);
      clearInterval(currentInterval);
      clearInterval(ghostsCurrentInterval);
    };
  }, []);

  useEffect(() => {
    const ghostMovementInterval = setInterval(() => {
      Ghosts.current?.forEach((ghost) => {
        ghost.automaticMove({ walls: Walls.current as Wall[] });
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
