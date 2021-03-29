import React from "react";
import { createGlobalStyle } from "styled-components";

const AccessibleBaseColors = createGlobalStyle`
  button {
    color: black;
  }
`;

const AccessibleColorDecorator = (story) => (
  <>
    <AccessibleBaseColors />
    {story()}
  </>
);

export const decorators = [AccessibleColorDecorator];
