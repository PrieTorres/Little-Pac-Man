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

export const Wall: React.FC<WallProps> = (props) => {
  return <Styled.Container {...props} />;
};
