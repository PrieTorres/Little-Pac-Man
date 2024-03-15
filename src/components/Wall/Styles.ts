import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, positionX, positionY, width, height }) => css`
    color: ${theme.colors.white};
  `}
`;
