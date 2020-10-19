import configure from '../configure';
import hasDependency from '../hasDependency';

function test(options) {
  return options.framework === 'react' || (!options.framework && hasDependency('@storybook/react'));
}

function load(options) {
  const { configPath, config } = options;
  const storybook = jest.requireActual('@storybook/react');

  configure({ configPath, config, storybook });

  return {
    framework: 'react',
    renderTree: jest.requireActual('./renderTree').default,
    renderShallowTree: jest.requireActual('./renderShallowTree').default,
    storybook,
  };
}

export default {
  load,
  test,
};
