import * as React from "react";
import { DecoratorFn } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

const AccessibleBaseColors = createGlobalStyle`
  button {
    color: black;
  }
`;

const AccessibleColorDecorator: DecoratorFn = (story) => (
  <>
    <AccessibleBaseColors />
    {story()}
  </>
);

export const decorators = [AccessibleColorDecorator];
