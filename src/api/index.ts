import {
  puppeteerTest,
  defaultCommonConfig,
  Context,
} from "@storybook/addon-storyshots-puppeteer";
import ensureOptionsDefaults, {
  EnsuredStorypa11yOptions,
  Pa11yOptions,
} from "./ensureOptionsDefaults";
import { pa11y } from "../test-bodies";
import { toBeAccessible } from "./jestMatcher";
import initStoryshots from "@storybook/addon-storyshots";
import { Page } from "puppeteer";

export const testStorypa11y = (options: EnsuredStorypa11yOptions) => {
  expect.extend({
    toBeAccessible,
  });

  const testFn = options.test || pa11y;

  const testBody = async (
    page: Page,
    storyOptions: { url: string; context: Context }
  ) => {
    await testFn({
      page: page.url(),
      options: storyOptions,
    });
  };

  return puppeteerTest({
    ...defaultCommonConfig,
    ...options,
    testBody,
  });
};

export type Storypa11yOptions = {
  suite?: string;
  out?: string;
  storyNameRegex?: RegExp;
  storyKindRegex?: RegExp;
  pa11yOptions?: Pa11yOptions;
  test?: (args: { page: string; options: { context: Context } }) => void;
};

export function initStorypa11y(options: Storypa11yOptions = {}) {
  const ensuredOptions = ensureOptionsDefaults(options);
  const { suite, storyNameRegex, storyKindRegex } = ensuredOptions;

  initStoryshots({
    suite,
    storyNameRegex,
    storyKindRegex,
    test: testStorypa11y(ensuredOptions),
  });
}

export default initStorypa11y;
