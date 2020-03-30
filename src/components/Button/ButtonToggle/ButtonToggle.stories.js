import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';
import CONST from './utils/constants';

import ButtonToggle from './index';

export default {
  component: ButtonToggle,
  title: 'Button Toggle',
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

export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => (
    <ButtonToggle
        isToggle={boolean('is Toggle', CONST.GENERIC_BUTTON_TOGGLE_IS_TOGGLED)}
        {...initialData}
        {...actionsData}
    />
);

export const DarkMode = () => (
    <ButtonToggle
        isToggle={boolean('is Toggle', CONST.GENERIC_BUTTON_TOGGLE_IS_TOGGLED)}
        {...customData}
        {...actionsData}
    />
);