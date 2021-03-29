import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

export default {
  title: "Fail",
};

export const ToStorybook = () => <Welcome showApp={linkTo("Button")} />;
