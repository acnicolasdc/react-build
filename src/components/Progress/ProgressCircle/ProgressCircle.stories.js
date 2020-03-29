import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { withKnobs, number } from '@storybook/addon-knobs/react';

import ProgressCircle from './index';

export default {
  component: ProgressCircle,
  title: 'Progress Circle',
  decorators: [
    withKnobs,
    story => <div style={{ padding: '3rem'}}>{story()}</div>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  theme: lightTheme,
};

export const customData = {
  theme: darkTheme,
};

export const Default = () => (<ProgressCircle size={number('Circle Progress size', 75)} { ...initialData } />);

export const DarkMode = () => (<ProgressCircle size={number('Circle Progress size', 75)} {...customData } />);