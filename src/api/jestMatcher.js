import pa11yCli from "pa11y";

const { printReceived } = require("jest-matcher-utils");

const pa11yTest = async (url, options = {}) => {
  const ignore = !options || !options.ignore ? [] : options.ignore;
  const chromeLaunchConfig =
    !options || !options.chromeLaunchConfig ? [] : options.chromeLaunchConfig;
  const chromeLaunchConfigArgs =
    !chromeLaunchConfig || !chromeLaunchConfig.args
      ? []
      : chromeLaunchConfig.args;

  try {
    const details = await pa11yCli(url, {
      chromeLaunchConfig: {
        args: ["--no-sandbox", ...chromeLaunchConfigArgs],
        ...chromeLaunchConfig
      },
      ignore: ["WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2", ...ignore],
      includeWarnings: true,
      ...options
    });
    return { pass: details.issues.length === 0, details };
  } catch (error) {
    return { pass: false, details: error };
  }
};

const formatIssues = details => {
  if (details instanceof Error) {
    return details;
  }

  return details.issues
    .map(
      issue =>
        `
  Message: ${printReceived(issue.message)}
  Selector: ${printReceived(issue.selector)}
  Code: ${printReceived(issue.code)}
  `
    )
    .join("");
};

export async function toBeAccessible(receivedUrl, pa11yOptions) {
  const { pass, details } = await pa11yTest(receivedUrl, pa11yOptions);

  return {
    message: pass
      ? () => `Expected ${receivedUrl} not to be accessible`
      : () =>
          `Expected ${receivedUrl} to be accessible, but:\n` +
          `${formatIssues(details)}`,
    pass: pass
  };
}
