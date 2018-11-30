export const pa11y = async ({ story, context }) => {
  const url = `file://${process.cwd()}/storybook-static/iframe.html?selectedKind=${encodeURIComponent(
    context.kind,
  )}&selectedStory=${encodeURIComponent(context.story)}`;

  await expect(url).toBeAccessible();
};
