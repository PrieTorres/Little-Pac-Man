import React from "react";
import * as Styled from "./styles";

export interface WallProps {
  positionX: number;
  positionY: number;
  width: number;
  height: number;
}

export const Wall: React.FC<WallProps> = (props) => {
  return <Styled.Container {...props} />;
};
