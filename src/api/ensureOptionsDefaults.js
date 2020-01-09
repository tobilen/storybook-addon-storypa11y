import { pa11y } from "../test-bodies";

const ignore = ["**/node_modules/**"];

function ensureOptionsDefaults(options) {
  const {
    suite = "Storypa11y",
    asyncJest,
    storyNameRegex,
    storyKindRegex,
    out = "storybook",
    host = `file://${process.cwd()}/${options.out || "storybook"}`,
    pa11yOptions = {},
    test: testMethod = pa11y
  } = options;

  const ignore = !pa11yOptions.ignore ? [] : pa11yOptions.ignore;
  const chromeLaunchConfig = !pa11yOptions.chromeLaunchConfig
    ? []
    : pa11yOptions.chromeLaunchConfig;
  const chromeLaunchConfigArgs =
    !chromeLaunchConfig || !chromeLaunchConfig.args
      ? []
      : chromeLaunchConfig.args;

  return {
    asyncJest,
    suite,
    storyNameRegex,
    storyKindRegex,
    out,
    host,
    pa11yOptions: {
      chromeLaunchConfig: {
        args: ["--no-sandbox", ...chromeLaunchConfigArgs],
        ...chromeLaunchConfig
      },
      ignore: ["WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2", ...ignore],
      includeWarnings: true,
      ...options
    },
    testMethod
  };
}

export default ensureOptionsDefaults;
