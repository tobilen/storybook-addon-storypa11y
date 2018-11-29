import pa11yCli from 'pa11y';

export const pa11y = () => async ({ story, context }) => {
  console.log('story', story);
  console.log('context', context);

  const url = `file://${process.cwd()}/storybook-static/iframe.html?selectedKind=${encodeURIComponent(
    context.kind,
  )}&selectedStory=${encodeURIComponent(context.story)}`;

  try {
    const result = await pa11yCli(url, {
      log: {
        debug: console.log,
        error: console.error,
        info: console.log,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};
