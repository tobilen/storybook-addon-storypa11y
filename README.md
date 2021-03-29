[![npm version](https://badge.fury.io/js/storybook-addon-storypa11y.svg)](https://badge.fury.io/js/storybook-addon-storypa11y)
# Storypa11y

StoryShots adds automatic Jest Testing for Accessibility for [Storybook](https://storybook.js.org/). It uses [pa11y](http://pa11y.org/) in its testing suites.


To use Storypa11y, you must use your existing Storybook stories as the input for Jest Testing.

## Getting Started

Add the following module into your app.

```sh
npm install --save-dev storybook-addon-storypa11y
```

## Quickstart

Create a file matching your jests test regex and add the following code:
```js
import { initStorypa11y } from 'storybook-addon-storypa11y';

initStorypa11y();
```

This will create a test suite which tests all of your stories for accessibility.

## Options

You can pass an options object to the `initStorypa11y` function which takes several keys:
```
suite: 'My suite'
storyKindRegex: /^((?!.*?Fail).)*$/,
storyNameRegex: /^((?!.*?SomeStory).)*$/,
out: 'storybook-static',
test: pa11y,
```

### suite
The name of the test suite that will be generated.

### storyKindRegex
You can pass a regex to only include matching story kinds in accessibility testing.

### storyNameRegex
You can pass a regex to only include matching stories in accessibility testing.

### out
Relative path from the project root to the folder you build your storybook in. Defaults to `storybook-static`.

### pa11yOptions
Options that will be passed directly to pa11y. See [their documentation](https://github.com/pa11y/pa11y#configuration) for what can be passed. Also check the [default options](https://github.com/tobilen/storybook-addon-storypa11y/blob/master/src/api/ensureOptionsDefaults.ts#L19) set by Storypa11y.

### test
It is also possible to pass your own test function. See [stories/failing.test.js](stories/failing.test.ts) for an example.

## Troubleshooting

### ReferenceError: __requireContext is not defined
This may happen if you use webpacks `require.context` functionality to gather all your storybooks stories. It's not available from a jest environment, which we can fix by adding a babel plugin to provide the same interface. 
* Install the plugin with `npm install --save-dev babel-plugin-require-context-hook`
* Add the plugin to your pa11y test file. Example:
```js
import initStorypa11y from 'storybook-addon-storypa11y';
import contextHook from 'babel-plugin-require-context-hook/register';

contextHook();
initStorypa11y();
```


## Credits

This addon is heavily based on the [official storyshots addon](https://github.com/storybooks/storybook/tree/next/addons/storyshots/storyshots-core) and the amazing work done by all their [contributors](https://github.com/storybooks/storybook/graphs/contributors)
