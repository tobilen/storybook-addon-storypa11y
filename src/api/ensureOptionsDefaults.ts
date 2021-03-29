import pa11yCli from "pa11y";
import { Storypa11yOptions } from "./index";
import { Context } from "@storybook/addon-storyshots-puppeteer";

export type Pa11yOptions = NonNullable<Parameters<typeof pa11yCli>[1]>;

export type EnsuredStorypa11yOptions = {
  suite: string;
  storybookUrl: string;
  storyNameRegex?: RegExp;
  storyKindRegex?: RegExp;
  pa11yOptions: Pa11yOptions;
  test?: (args: { page: string; options: { context: Context } }) => void;
};

export function ensureOptionsDefaults(
  options: Storypa11yOptions
): EnsuredStorypa11yOptions {
  const {
    suite = "Storypa11y",
    out = "storybook-static",
    pa11yOptions = {},
  } = options;

  const ignore = !pa11yOptions.ignore ? [] : pa11yOptions.ignore;

  return {
    suite,
    storybookUrl: `file://${process.cwd()}/${out}`,
    pa11yOptions: {
      chromeLaunchConfig: {
        // @ts-ignore
        args: ["--no-sandbox"],
        ...pa11yOptions.chromeLaunchConfig,
      },
      ignore: ["WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2", ...ignore],
      includeWarnings: true,
      ...pa11yOptions,
    },
    ...options,
  };
}

export default ensureOptionsDefaults;
