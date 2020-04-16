import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'providers/theme';
import { DarkMode as FieldInputDarkMode, Default as FieldInputDefault} from 'components/Field/FieldInput/FieldInput.stories';
import { DarkMode as FieldTextAreaDarkMode, Default as FieldTextAreaDefault} from 'components/Field/FieldTextArea/FieldTextArea.stories';
import { DarkMode as DarkModeButton, Default as DefaultButton } from '../../Button/ButtonGeneric/ButtonGeneric.stories';

import FormVertical, { constants } from './index';

export default {
  component: FormVertical,
  title: 'Form Vertical',
  decorators: [
    withKnobs,
    story => <ThemeProvider><div style={{ padding: '3rem' }}>{story()}</div></ThemeProvider>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  render:[
    <FieldInputDefault />,
    <FieldTextAreaDefault />,
    <DefaultButton />
  ],
  theme: lightContextTheme,
};

export const customData = {
  render:[
    <FieldInputDarkMode />,
    <FieldTextAreaDarkMode />,
    <DarkModeButton />
  ],
  theme: darkContextTheme,
};

export const actionsData = {
  onSubmit: action('Send Data'),
};



export const Empty = () => (
  <FormVertical
      theme={lightContextTheme}
      render={constants.GENERIC_FORM_VERTICAL_RENDER}
      {...actionsData}
  />
);

export const Default = () => (
    <FormVertical
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <FormVertical
        {...customData }
        {...actionsData}
    />
);