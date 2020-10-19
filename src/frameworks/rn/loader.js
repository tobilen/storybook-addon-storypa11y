/* eslint-disable global-require */
import path from 'path';
import hasDependency from '../hasDependency';

function test(options) {
  return (
    options.framework === 'react-native' ||
    (!options.framework && hasDependency('@storybook/react-native'))
  );
}

function configure(options, storybook) {
  const { configPath = 'storybook', config } = options;

  if (config && typeof config === 'function') {
    config(storybook);
    return;
  }

  const resolvedConfigPath = path.resolve(configPath);
  jest.requireActual(resolvedConfigPath);
}

function load(options) {
  const storybook = jest.requireActual('@storybook/react-native');

  configure(options, storybook);

  return {
    renderTree: require('../react/renderTree').default,
    renderShallowTree: require('../react/renderShallowTree').default,
    framework: 'rn',
    storybook,
  };
}

export default {
  load,
  test,
};
