import React from 'react';
import GlobalStyles from '../src/styles/globals'

export const decorators = [
  (Story) => (
    <>
    <GlobalStyles />
      <Story />
    </>
  ),
];
