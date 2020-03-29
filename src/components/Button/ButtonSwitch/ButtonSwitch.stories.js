import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ButtonSwitch from './index';

export default {
  component: ButtonSwitch,
  title: 'Button Switch',
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
  onClick: action('onPinTask'),
};

export const Default = () => (<ButtonSwitch isSwitch={boolean('is Switch', false)} { ...initialData } {...actionsData} />);

export const DarkMode = () => (<ButtonSwitch isSwitch={boolean('is Switch', false)} {...customData }  {...actionsData} />);