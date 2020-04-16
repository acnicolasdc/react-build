import React from 'react';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs/react';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'providers/theme';
import { DarkMode as DarkModeButton, Default as DefaultButton } from 'components/Button/ButtonGeneric/ButtonGeneric.stories';

import ModalSimple, { constants } from './index';

export default {
  component: ModalSimple,
  title: 'Modal Simple',
  decorators: [
    withKnobs,
    story => <ThemeProvider><div style={{ padding: '3rem' }}>{story()}</div></ThemeProvider>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  Button: DefaultButton,
  theme: lightContextTheme,
};

export const customData = {
  Button: DarkModeButton,
  theme: darkContextTheme,
};

export const Default = () => (
    <ModalSimple
        open={boolean('Open Modal', true)}
        title={text('Title Modal', constants.GENERIC_MODAL_SIMPLE_TITLE)}
        text={text('Description Modal', constants.GENERIC_MODAL_SIMPLE_TEXT)}
        iconSize={number('Modal icon Size', constants.GENERIC_MODAL_SIMPLE_ICON_SIZE)}
        { ...initialData }
    />
);

export const DarkMode = () => (
    <ModalSimple
      open={boolean('Open Modal', true)}
      title={text('Title Modal', constants.GENERIC_MODAL_SIMPLE_TITLE)}
      text={text('Description Modal', constants.GENERIC_MODAL_SIMPLE_TEXT)}
      iconSize={number('Modal icon Size', constants.GENERIC_MODAL_SIMPLE_ICON_SIZE)}
      { ...customData }
    />
);