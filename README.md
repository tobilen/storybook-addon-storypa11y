[![npm version](https://badge.fury.io/js/storybook-addon-storypa11y.svg)](https://badge.fury.io/js/storybook-addon-storypa11y)
# StoryPa11y

StoryShots adds automatic Jest Testing for Accessibility for [Storybook](https://storybook.js.org/). It uses [pa11y](http://pa11y.org/) in its testing suites.


To use StoryPa11y, you must use your existing Storybook stories as the input for Jest Testing.

## Getting Started

Add the following module into your app.

```sh
npm install --save-dev storybook-addon-storypa11y
```

## Quickstart

Create a file matching your jests test regex and add the following code:
```js
import initStorypa11y from 'storybook-addon-storypa11y';

initStorypa11y();
```

This will create a test suite which tests all of your stories for accessibility.

## Options

You can pass an options object to the `initStorypa11y` function which takes several keys:
```
framework: 'react',
configPath: path.join(__dirname, '..', '.storybook'),
storyKindRegex: /^((?!.*?Fail).)*$/,
out: 'storybook-static',
test: pa11y,
```
### framework
You can specify which storybook framework to use. Note that `angular` is currently not supported. Defaults to `react`.

### configPath
Here you can specify the path to your storybook config file. This is required in order to initialize storybook correctly.

### storyKindRegex
You can pass a regex to only include matching story kinds in accessibility testing.

### storyNameRegex
You can pass a regex to only include matching stories in accessibility testing.

### out
Relative path from the project root to the folder you build your storybook in. Defaults to `storybook`.

### pa11yOptions
Options that will be passed directly to pa11y. See [their documentation](https://github.com/pa11y/pa11y#configuration) for what can be passed. Also check the [default options](https://github.com/tobilen/storybook-addon-storypa11y/blob/master/src/api/ensureOptionsDefaults.js#L31) set by StoryPa11y.

### test
It is also possible to pass your own test function. See [stories/failing.test.js](stories/failing.test.js) for an example.

## Credits

This addon is heavily based on the [official storyshots addon](https://github.com/storybooks/storybook/tree/next/addons/storyshots/storyshots-core) and the amazing work done by all their [contributors](https://github.com/storybooks/storybook/graphs/contributors)
