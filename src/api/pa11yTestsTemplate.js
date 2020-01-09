import { describe, it } from 'global';

function pa11yTest({
  asyncJest,
  story,
  kind,
  fileName,
  framework,
  out,
  host,
  pa11yOptions,
  testMethod,
  testMethodParams,
}) {
  const { name } = story;
  const context = { fileName, kind, story: name, framework, out, host, pa11yOptions };

  if (asyncJest === true) {
    it(name, done =>
      testMethod({
        done,
        story,
        context,
        ...testMethodParams,
      })
    );
  } else {
    it(name, () =>
      testMethod({
        story,
        context,
        ...testMethodParams,
      })
    );
  }
}

function pa11yTestSuite({ kind, stories, suite, storyNameRegex, ...restParams }) {
  describe(suite, () => {
    describe(kind, () => {
      // eslint-disable-next-line
      for (const story of stories) {
        if (storyNameRegex && !story.name.match(storyNameRegex)) {
          // eslint-disable-next-line
          continue;
        }

        pa11yTest({ story, kind, ...restParams });
      }
    });
  });
}

function pa11yTests({ groups, storyKindRegex, ...restParams }) {
  // eslint-disable-next-line
  for (const group of groups) {
    const { fileName, kind, stories } = group;

    if (storyKindRegex && !kind.match(storyKindRegex)) {
      // eslint-disable-next-line
      continue;
    }

    pa11yTestSuite({ stories, kind, fileName, ...restParams });
  }
}

export default pa11yTests;
