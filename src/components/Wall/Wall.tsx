import React from "react";
import * as Styled from "./Styles";
import { DefaultTheme } from "styled-components/dist/types";

export interface WallProps {
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  theme: DefaultTheme;
}

export const Wall: React.FC<WallProps> = (props: WallProps) => {
  return (
    <Styled.Container
      positionX={props.positionX}
      positionY={props.positionY}
      width={props.width}
      height={props.height}
      theme={props.theme}
    />
  );
};
