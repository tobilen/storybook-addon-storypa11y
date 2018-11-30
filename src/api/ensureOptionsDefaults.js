import { pa11y } from '../test-bodies';

const ignore = ['**/node_modules/**'];

function ensureOptionsDefaults(options) {
  const {
    suite = 'Storypa11y',
    asyncJest,
    storyNameRegex,
    storyKindRegex,
    out = 'storybook',
    test: testMethod = pa11y,
  } = options;

  return {
    asyncJest,
    suite,
    storyNameRegex,
    storyKindRegex,
    out,
    testMethod,
  };
}

export default ensureOptionsDefaults;
