import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';
import { action } from '@storybook/addon-actions';
import CONST from './utils/constants';

import ButtonHeart from './index';

export default {
  component: ButtonHeart,
  title: 'Button Heart',
  decorators: [
    withKnobs,
    story => <ThemeProvider><div style={{ padding: '3rem' }}>{story()}</div></ThemeProvider>
  ],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => (
    <ButtonHeart
        size={number('Button size', CONST.GENERIC_BUTTON_HEART_SIZE)}
        isSelected={boolean('Press Heart', CONST.GENERIC_BUTTON_HEART_IS_SELECTED)}
        theme={lightContextTheme}
        {...actionsData}
    />
);

export const DarkMode = () => (
    <ButtonHeart
        size={number('Button size', CONST.GENERIC_BUTTON_HEART_SIZE)}
        isSelected={boolean('Press Heart', CONST.GENERIC_BUTTON_HEART_IS_SELECTED)}
        theme={darkContextTheme}
        {...actionsData}
    />
);