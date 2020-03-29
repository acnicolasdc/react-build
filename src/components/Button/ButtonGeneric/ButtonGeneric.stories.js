import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import {lightTheme, darkTheme} from  'theme/theme';

import ButtonGeneric from './index';

export default {
  component: ButtonGeneric,
  title: 'Button Generic',
  decorators: [
    withKnobs,
    story => <div style={{ padding: '3rem' }}>{story()}</div>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  theme: lightTheme,
};

export const customData = {
  theme: darkTheme,
};

export const actionsData = {
  onClick: action('Click over button'),
};

export const Default = () => (<ButtonGeneric title={text('Generic Button title', 'Click me')} { ...initialData } {...actionsData} />);

export const DarkMode = () => (<ButtonGeneric title={text('Generic Button title', 'Add to Cart')} {...customData }  {...actionsData} />);