import React from 'react';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs/react';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';
import { DarkMode as DarkModeButton, Default as DefaultButton } from 'components/Button/ButtonGeneric/ButtonGeneric.stories';
import CONST from './utils/constants';

import ModalSimple from './index';

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
        title={text('Title Modal', CONST.GENERIC_MODAL_SIMPLE_TITLE)}
        text={text('Description Modal', CONST.GENERIC_MODAL_SIMPLE_TEXT)}
        iconSize={number('Modal icon Size', CONST.GENERIC_MODAL_SIMPLE_ICON_SIZE)}
        { ...initialData }
    />
);

export const DarkMode = () => (
    <ModalSimple
      open={boolean('Open Modal', true)}
      title={text('Title Modal', CONST.GENERIC_MODAL_SIMPLE_TITLE)}
      text={text('Description Modal', CONST.GENERIC_MODAL_SIMPLE_TEXT)}
      iconSize={number('Modal icon Size', CONST.GENERIC_MODAL_SIMPLE_ICON_SIZE)}
      { ...customData }
    />
);