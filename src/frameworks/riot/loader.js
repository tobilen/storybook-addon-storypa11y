import global from 'global';
import hasDependency from '../hasDependency';
import configure from '../configure';

function mockRiotToIncludeCompiler() {
  jest.mock('riot', () => jest.requireActual('riot/riot.js'));
}

function test(options) {
  return options.framework === 'riot' || (!options.framework && hasDependency('@storybook/riot'));
}

function load(options) {
  global.STORYBOOK_ENV = 'riot';
  mockRiotToIncludeCompiler();

  const { configPath, config } = options;
  const storybook = jest.requireActual('@storybook/riot');

  configure({ configPath, config, storybook });

  return {
    framework: 'riot',
    renderTree: jest.requireActual('./renderTree').default,
    renderShallowTree: () => {
      throw new Error('Shallow renderer is not supported for riot');
    },
    storybook,
  };
}

export default {
  load,
  test,
};
