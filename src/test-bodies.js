export const pa11y = async ({ story, context }) => {
  let host = `file://${process.cwd()}/${context.out}`;

  if(context.host) {
    host = context.host.replace(/\/$/, '');
  }

  const url = `${host}/iframe.html?selectedKind=${encodeURIComponent(
    context.kind,
  )}&selectedStory=${encodeURIComponent(context.story)}`;

  await expect(url).toBeAccessible(context.pa11yOptions);
};
