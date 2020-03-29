import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { DarkMode as DarkModeButton, Default as DefaultButton } from 'components/Button/ButtonGeneric/ButtonGeneric.stories';

import ModalSimple from './index';

export default {
  component: ModalSimple,
  title: 'Modal Simple',
  decorators: [
    withKnobs,
    story => <div style={{ padding: '3rem'}}>{story()}</div>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  Button: DefaultButton,
  theme: lightTheme,
};

export const customData = {
  Button: DarkModeButton,
  theme: darkTheme,
};
export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => (<ModalSimple
                                open={boolean('Open Modal', true)}
                                title={text('Title Modal', 'Automatic Dark mode on')}
                                text={text('Description Modal', 'This is the automatic mode. This mode works depending on your time zone.')}
                                iconSize={number('Modal icon Size', 50)}
                                { ...initialData }
                                { ...actionsData }
                              />);

export const DarkMode = () => (<ModalSimple
                                open={boolean('Open Modal', true)}
                                title={text('Title Modal', 'Automatic Dark mode on')}
                                text={text('Description Modal', 'This is the automatic mode. This mode works depending on your time zone.')}
                                iconSize={number('Modal icon Size', 50)}
                                { ...customData }
                                { ...actionsData }
/>);