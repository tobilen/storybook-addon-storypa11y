import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { Story } from "@storybook/react";

export default {
  title: "Another Button",
};

export const WithText: Story = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const WithSomeEmoji: Story = () => (
  <Button onClick={action("clicked")}>
    <span role="img">😀 😎 👍 💯</span>
  </Button>
);
