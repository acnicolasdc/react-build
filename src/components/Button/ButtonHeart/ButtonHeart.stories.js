import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { withKnobs, number, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ButtonHeart from './index';

export default {
  component: ButtonHeart,
  title: 'Button Heart',
  decorators: [
    withKnobs,
    story => <div style={{ padding: '3rem' }}>{story()}</div>
  ],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => <ButtonHeart size={number('Button size', 50)} isSelected={boolean('Press Heart', false)} theme={lightTheme} {...actionsData} />;
export const DarkMode = () => (<ButtonHeart size={number('Button size', 50)} isSelected={boolean('Press Heart', false)} theme={darkTheme}  {...actionsData} />);