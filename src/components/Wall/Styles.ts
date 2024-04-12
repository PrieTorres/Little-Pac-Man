import styled, { css, CSSObject, DefaultTheme } from "styled-components";
import { Wall, WallProps } from "./Wall";

interface ContainerProps extends WallProps {
  theme: DefaultTheme;
  [key: string]: unknown;
}

export const Container = styled(Wall)<ContainerProps>`
  ${({ theme, positionX, positionY, width, height }: ContainerProps) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: ${positionX};
    top: ${positionY};
    width: ${`${width}%`};
    height: ${`${height}%`};
  `}
` as React.ComponentType<ContainerProps & CSSObject>;
