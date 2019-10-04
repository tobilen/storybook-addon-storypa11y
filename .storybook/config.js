import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';

const req = require.context(
  '../stories/required_with_context',
  true,
  /.stories.js$/,
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  require('../stories/directly_required');
}

const AccessibleBaseColors = createGlobalStyle`
  button {
    color: black;
  }
`;

const accessibleColorDecorator = story => (
  <>
    <AccessibleBaseColors />
    {story()}
  </>
);

addDecorator(accessibleColorDecorator);

configure(loadStories, module);
