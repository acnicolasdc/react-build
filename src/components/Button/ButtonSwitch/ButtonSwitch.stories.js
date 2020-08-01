import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'providers/theme';

import ButtonSwitch, { constants } from './index';

export default {
  component: ButtonSwitch,
  title: 'Button Switch',
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
    <ButtonSwitch
        isSwitch={boolean('is Switch', constants.GENERIC_BUTTON_SWITCH_IS_SWITCHED)}
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <ButtonSwitch
        isSwitch={boolean('is Switch', constants.GENERIC_BUTTON_SWITCH_IS_SWITCHED)}
        {...customData }
        {...actionsData}
    />
);