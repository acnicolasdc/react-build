import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'providers/theme';
import ButtonGeneric, { constants } from './index';

export default {
  component: ButtonGeneric,
  title: 'Button Generic',
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
  onClick: action('Click over button'),
};

export const Default = () => (
    <ButtonGeneric
        title={text('Generic Button title', constants.GENERIC_BUTTON_TITLE)}
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <ButtonGeneric
        title={text('Generic Button title', constants.GENERIC_BUTTON_TITLE)}
        {...customData }
        {...actionsData}
    />
);