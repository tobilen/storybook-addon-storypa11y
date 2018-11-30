import path from "path";
import initStorypa11y from "../src";

const notPa11y = async ({ story, context }) => {
  const url = `file://${process.cwd()}/storybook-static/iframe.html?selectedKind=${encodeURIComponent(
    context.kind
  )}&selectedStory=${encodeURIComponent(context.story)}`;

  await expect(url).not.toBeAccessible();
};

initStorypa11y({
  framework: "react",
  configPath: path.join(__dirname, "..", ".storybook"),
  storyKindRegex: /^Fail*$/,
  out: 'storybook-static',
  test: notPa11y
});
