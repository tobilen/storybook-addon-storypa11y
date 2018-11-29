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


## Credits

This addon is heavily based on the [official storyshots addon](https://github.com/storybooks/storybook/tree/next/addons/storyshots/storyshots-core) and the amazing work done by all their [contributors](https://github.com/storybooks/storybook/graphs/contributors)
