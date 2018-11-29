import { pa11yWithOptions } from '../test-bodies';

const ignore = ['**/node_modules/**'];

function ensureOptionsDefaults(options) {
  const {
    suite = 'Storypa11y',
    asyncJest,
    storyNameRegex,
    storyKindRegex,
    test: testMethod = pa11yWithOptions(),
  } = options;

  return {
    asyncJest,
    suite,
    storyNameRegex,
    storyKindRegex,
    testMethod,
  };
}

export default ensureOptionsDefaults;
