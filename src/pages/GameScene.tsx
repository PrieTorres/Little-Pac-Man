import { useRef } from "react";
import useCanvas from "../components/Canvas/UseCanvas";

export const GameScene = () => {
  const canvasRef = useRef();
  const gameScreenHeight = window.innerHeight;
  const gameScreenWidth = window.innerWidth;
  const gameCanvas = useCanvas({ ref: canvasRef, gameScreenHeight, gameScreenWidth });

  return (
    <div></div>
  );
};
