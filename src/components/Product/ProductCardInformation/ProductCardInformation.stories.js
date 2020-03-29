import React from 'react';
import {lightTheme, darkTheme} from  'theme/theme';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { DarkMode as DarkModeButton, Default as DefaultButton } from '../../Button/ButtonGeneric/ButtonGeneric.stories';
import { DarkMode as DarkModeHeart, Default as DefaultHeart } from '../../Button/ButtonHeart/ButtonHeart.stories';

import ProductCardInformation from './index';

export default {
  component: ProductCardInformation,
  title: 'Card Information',
  decorators: [
    withKnobs,
    story => <div style={{ padding: '3rem' }}>{story()}</div>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  theme: lightTheme,
  FooterButton: DefaultButton,
  TopButton: DefaultHeart
};

export const customData = {
  theme: darkTheme,
  FooterButton: DarkModeButton,
  TopButton: DarkModeHeart
};

export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => <ProductCardInformation
                                name={text('Product name', 'iPhone 11')}
                                disabledFooterButton={boolean('Disable Footer Button', false)}
                                disabledTopButton={boolean('Disable Footer Top', false)}
                                { ...initialData }
                                {...actionsData}
                              />;

export const DarkMode = () => <ProductCardInformation
                                name={text('Product name', 'iPhone 11')}
                                disabledFooterButton={boolean('Disable Footer Button', false)}
                                disabledTopButton={boolean('Disable Footer Top', false)}
                                { ...customData }
                                {...actionsData}
                              />;