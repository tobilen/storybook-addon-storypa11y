import { initStorypa11y, Pa11yTestFnOptions } from "../src";

export const notPa11y = async ({ page, options }: Pa11yTestFnOptions) =>
  await expect(page).not.toBeAccessible(
    options.context.parameters.pa11yOptions
  );

initStorypa11y({
  storyKindRegex: /^Fail*$/,
  out: "storybook-static",
  test: notPa11y,
});
