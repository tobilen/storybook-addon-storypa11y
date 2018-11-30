import global, { describe } from "global";
import addons, { mockChannel } from "@storybook/addons";
import ensureOptionsDefaults from "./ensureOptionsDefaults";
import pa11yTests from "./pa11yTestsTemplate";
import loadFramework from "../frameworks/frameworkLoader";
import { toBeAccessible } from "./jestMatcher";

global.STORYBOOK_REACT_CLASSES = global.STORYBOOK_REACT_CLASSES || {};

const methods = ["beforeAll", "beforeEach", "afterEach", "afterAll"];

function callTestMethodGlobals(testMethod) {
  methods.forEach(method => {
    if (typeof testMethod[method] === "function") {
      global[method](testMethod[method]);
    }
  });
}

function testStoryPa11y(options = {}) {
  if (typeof describe !== "function") {
    throw new Error("testStoryPa11y is intended only to be used inside jest");
  }

  if (!expect || typeof expect.extend !== "function") {
    throw new Error("testStoryPa11y is intended only to be used inside jest");
  } else {
    expect.extend({
      toBeAccessible
    });
  }

  addons.setChannel(mockChannel());

  const { storybook, framework, renderTree, renderShallowTree } = loadFramework(
    options
  );
  const storiesGroups = storybook.getStorybook();

  if (storiesGroups.length === 0) {
    throw new Error("storypa11y found 0 stories");
  }

  const {
    asyncJest,
    suite,
    storyNameRegex,
    storyKindRegex,
    testMethod
  } = ensureOptionsDefaults(options);

  const testMethodParams = {
    renderTree,
    renderShallowTree
  };

  callTestMethodGlobals(testMethod);

  pa11yTests({
    groups: storiesGroups,
    asyncJest,
    suite,
    framework,
    storyKindRegex,
    storyNameRegex,
    testMethod,
    testMethodParams
  });
}

export default testStoryPa11y;
