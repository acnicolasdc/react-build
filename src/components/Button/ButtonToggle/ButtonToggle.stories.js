import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ButtonToggle from './index';

export default {
  component: ButtonToggle,
  title: 'Button Toggle',
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

export const Default = () => (<ButtonToggle isToggle={boolean('is Toggle', false)} { ...initialData } {...actionsData} />);

export const DarkMode = () => (<ButtonToggle isToggle={boolean('is Toggle', false)} {...customData }  {...actionsData} />);