import { useEffect, useRef } from "react";
import useCanvas from "../components/Canvas/UseCanvas";
import { constructWalls } from "../lib/core/constructWall";

export const GameScene = () => {
  const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const gameScreenHeight = window.innerHeight * 0.9;
  const gameScreenWidth = window.innerHeight * 0.9;
  const gameCanvas = useCanvas({ ref: canvasRef, gameScreenHeight, gameScreenWidth });

  useEffect(() => {
    if (canvasRef?.current && canvasRef?.current instanceof HTMLCanvasElement) {
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
      constructWalls(ctx);
    }
  }, [gameScreenHeight, gameScreenWidth, canvasRef]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      {gameCanvas}
    </div>
  );
};
