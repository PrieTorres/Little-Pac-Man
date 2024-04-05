"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = require("styled-components");
const Wall_1 = require("./Wall");
exports.Container = (0, styled_components_1.default)(Wall_1.Wall) `
  ${({ theme, positionX, positionY, width, height }) => (0, styled_components_1.css) `
    color: ${theme.colors.white};
    position: absolute;
    left: ${positionX};
    top: ${positionY};
    width: ${`${width}%`};
    height: ${`${height}%`};
  `}
`;
