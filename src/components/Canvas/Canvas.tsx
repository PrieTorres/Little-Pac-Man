import { LegacyRef, MutableRefObject } from "react";
interface CanvasPropsType {
  id: string;
  canvasRef:  MutableRefObject<HTMLCanvasElement | undefined>;
  height: number;
  width: number;
  canvasStyle: React.CSSProperties;
}

const Canvas = ({ width, height, canvasStyle, canvasRef, id }: CanvasPropsType) => {
  return (
    <canvas
      width={width}
      height={height}
      style={canvasStyle}
      ref={canvasRef}
      id={id}
    >
      Navegador sem suporte ao canvas ;( tente usar o google
    </canvas>
  );
};

export default Canvas;
