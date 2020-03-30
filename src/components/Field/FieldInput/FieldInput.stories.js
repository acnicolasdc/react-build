import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';
import CONST from './utils/constants';

import FieldInput from './index';

export default {
  component: FieldInput,
  title: 'Field Input',
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
  onChange: action('Onchange value'),
};

export const Default = () => (
    <FieldInput
        name={text('Field input name', CONST.GENERIC_FIELD_INPUT_NAME)}
        placeholder={text('Field input placeholder', CONST.GENERIC_FIELD_INPUT_PLACEHOLDER)}
        value={text('Field input value', CONST.GENERIC_FIELD_INPUT_VALUE)}
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <FieldInput
        name={text('Field input name', CONST.GENERIC_FIELD_INPUT_NAME)}
        placeholder={text('Field input placeholder', CONST.GENERIC_FIELD_INPUT_PLACEHOLDER)}
        value={text('Field input value', CONST.GENERIC_FIELD_INPUT_VALUE)}
        {...customData }
        {...actionsData}
    />
);