import path from 'path';
import initStorypa11y, { pa11y } from '../src';

initStorypa11y({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  storyKindRegex: /^((?!.*?Fail).)*$/,
  out: 'storybook-static',
  test: pa11y,
});