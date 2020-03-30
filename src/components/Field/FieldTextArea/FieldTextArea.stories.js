import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';

import FieldTextArea, { constants } from './index';

export default {
  component: FieldTextArea,
  title: 'Field TextArea',
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
    <FieldTextArea
        name={text('Field input name', constants.GENERIC_FIELD_TEXTAREA_NAME)}
        placeholder={text('Field input placeholder', constants.GENERIC_FIELD_TEXTAREA_PLACEHOLDER)}
        value={text('Field input value', constants.GENERIC_FIELD_TEXTAREA_VALUE)}
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <FieldTextArea
        name={text('Field input name', constants.GENERIC_FIELD_TEXTAREA_NAME)}
        placeholder={text('Field input placeholder', constants.GENERIC_FIELD_TEXTAREA_PLACEHOLDER)}
        value={text('Field input value', constants.GENERIC_FIELD_TEXTAREA_VALUE)}
        {...customData }
        {...actionsData}
    />
);