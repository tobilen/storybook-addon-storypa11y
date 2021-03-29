import { initStorypa11y, pa11y } from "../src";

initStorypa11y({
  suite: "a11y checks",
  storyKindRegex: /^((?!.*?Fail).)*$/,
  out: "storybook-static",
  pa11yOptions: {
    includeNotices: true,
  },
  test: pa11y,
});
