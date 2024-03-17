import styled, { css } from "styled-components";
import { Wall } from "./Wall";

export const Container = styled(Wall)`
  ${({ theme, positionX, positionY, width, height }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: ${positionX};
    top: ${positionY};
    width: ${`${width}%`};
    height: ${`${height}%`};
  `}
`;
