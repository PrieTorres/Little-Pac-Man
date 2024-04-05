"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const styled_components_1 = require("styled-components");
exports.GlobalStyles = (0, styled_components_1.createGlobalStyle) `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    ${({ theme }) => (0, styled_components_1.css) `
      font-size: ${theme.font.size.medium};
      font-family: "Courier New", Courier, monospace;
      background: #222;
      background: ${theme.colors.mainBg};
      font-family: ${({ theme }) => theme.font.family.default};
    `}
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.font.family.secondary}
  }
`;
