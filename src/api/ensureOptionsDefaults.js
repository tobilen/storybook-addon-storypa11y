function ensureOptionsDefaults(options) {
  const {
    suite = "Storypa11y",
    host = `file://${process.cwd()}/${options.out || "storybook-static"}`,
    pa11yOptions = {},
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
    suite,
    storybookUrl: host,
    pa11yOptions: {
      chromeLaunchConfig: {
        args: ["--no-sandbox", ...chromeLaunchConfigArgs],
        ...chromeLaunchConfig,
      },
      ignore: ["WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2", ...ignore],
      includeWarnings: true,
    },
    ...options,
  };
}

export default ensureOptionsDefaults;
