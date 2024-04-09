import { MutableRefObject, useMemo } from "react";
import React from "react";
import Canvas from "./Canvas";

interface useCanvasProps {
  ref: MutableRefObject<HTMLCanvasElement | null>;
  gameScreenHeight: number;
  gameScreenWidth: number;
}

export default function useCanvas({ ref, gameScreenHeight, gameScreenWidth }: useCanvasProps) {
  return useMemo(
    () => (
      <Canvas
        id="main-screen-canvas"
        ref={ref}
        height={gameScreenHeight}
        width={gameScreenWidth}
        canvasStyle={{
          backgroundColor: "#000000a6",
          border: "1px solid black",
        }}
      />
    ),
    [ref, gameScreenHeight, gameScreenWidth],
  );
}
