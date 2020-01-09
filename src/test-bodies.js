export const pa11y = async ({ story, context }) => {
  const url = `${context.host}/iframe.html?selectedKind=${encodeURIComponent(
    context.kind,
  )}&selectedStory=${encodeURIComponent(context.story)}`;

  await expect(url).toBeAccessible(context.pa11yOptions);
};
