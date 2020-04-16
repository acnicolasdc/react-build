import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'providers/theme';

import ProgressCircle, { constants } from './index';

export default {
  component: ProgressCircle,
  title: 'Progress Circle',
  decorators: [
    withKnobs,
    story => <ThemeProvider><div style={{ padding: '3rem' }}>{story()}</div></ThemeProvider>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  theme: lightContextTheme,
};

export const customData = {
  theme: darkContextTheme,
};

export const Default = () => (
    <ProgressCircle
        size={number('Circle Progress size', constants.GENERIC_PROGRESS_CIRCLE_SIZE)}
        {...initialData}
    />
);

export const DarkMode = () => (
    <ProgressCircle
        size={number('Circle Progress size', constants.GENERIC_PROGRESS_CIRCLE_SIZE)}
        {...customData}
    />
);