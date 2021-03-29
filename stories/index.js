import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Another Button",
};

export const WithText = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const WithSomeEmoji = () => () => (
  <Button onClick={action("clicked")}>
    <span role="img">😀 😎 👍 💯</span>
  </Button>
);
