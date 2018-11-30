import path from 'path';
import initStorypa11y, { pa11y } from '../src';

initStorypa11y({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  out: 'storybook-static',
  pa11yOptions: {
    includeNotices: true,
  },
  test: pa11y,
});
