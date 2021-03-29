import path from "path";
import {
  puppeteerTest,
  defaultCommonConfig,
} from "@storybook/addon-storyshots-puppeteer";
import ensureOptionsDefaults from "./ensureOptionsDefaults";
import { pa11y } from "../test-bodies";
import { toBeAccessible } from "./jestMatcher";
import initStoryshots from "@storybook/addon-storyshots";

export const testStorypa11y = (options = {}) => {
  expect.extend({
    toBeAccessible,
  });

  const testFn = options.test || pa11y;

  const testBody = async (page, storyOptions) => {
    await testFn({
      page: page.target()._targetInfo.url,
      options: {
        ...options.pa11yOptions,
        ...storyOptions,
      },
    });
  };

  return puppeteerTest({
    ...defaultCommonConfig,
    storybookUrl: `file://${path.resolve(__dirname, "../storybook-static")}`,
    ...ensureOptionsDefaults(options),
    testBody,
  });
};

export function initStorypa11y(options = {}) {
  const {
    suite,
    storybookUrl,
    storyNameRegex,
    storyKindRegex,
    pa11yOptions,
    test,
  } = ensureOptionsDefaults(options);

  initStoryshots({
    suite,
    storyNameRegex,
    storyKindRegex,
    test: testStorypa11y({
      storybookUrl,
      pa11yOptions,
      test,
    }),
  });
}

export default initStorypa11y;
