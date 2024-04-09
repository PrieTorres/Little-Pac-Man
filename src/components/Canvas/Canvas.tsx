import React, { forwardRef, Ref } from "react";

interface CanvasPropsType {
  id: string;
  height: number;
  width: number;
  canvasStyle?: React.CSSProperties;
}

const Canvas = forwardRef((props: CanvasPropsType, ref: Ref<HTMLCanvasElement>) => {
  const { width, height, canvasStyle, id } = props;

  return (
    <canvas width={width} height={height} style={canvasStyle} ref={ref} id={id}>
      Navegador sem suporte ao canvas ;( tente usar o Google Chrome
    </canvas>
  );
});

export default Canvas;
