import * as React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import { Story } from "@storybook/react";

export default {
  title: "Fail",
};

export const ToStorybook: Story = () => <Welcome showApp={linkTo("Button")} />;
