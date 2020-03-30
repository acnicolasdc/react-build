import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { DarkMode as DarkModeButton, Default as DefaultButton } from '../../Button/ButtonGeneric/ButtonGeneric.stories';
import { DarkMode as DarkModeHeart, Default as DefaultHeart } from '../../Button/ButtonHeart/ButtonHeart.stories';
import ThemeProvider, {lightContextTheme, darkContextTheme} from 'theme/index';

import ProductCardInformation, { constants } from './index';

export default {
  component: ProductCardInformation,
  title: 'Card Information',
  decorators: [
    withKnobs,
    story => <ThemeProvider><div style={{ padding: '3rem' }}>{story()}</div></ThemeProvider>
  ],
  excludeStories: /.*Data$/,
};

export const initialData = {
  theme: lightContextTheme,
  FooterButton: DefaultButton,
  TopButton: DefaultHeart
};

export const customData = {
  theme: darkContextTheme,
  FooterButton: DarkModeButton,
  TopButton: DarkModeHeart
};

export const actionsData = {
  onClick: action('onPinTask'),
};

export const Default = () => (
    <ProductCardInformation
        name={text('Product name', constants.GENERIC_PRODUCT_NAME)}
        description={text('Product description', constants.GENERIC_PRODUCT_DESCRIPTION)}
        disabledFooterButton={boolean('Disable Footer Button', constants.GENERIC_PRODUCT_DISABLED_FOOTER_BUTTON)}
        disabledTopButton={boolean('Disable Footer Top', constants.GENERIC_PRODUCT_DISABLED_TOP_BUTTON)}
        { ...initialData }
        {...actionsData}
    />
);

export const DarkMode = () => (
    <ProductCardInformation
        name={text('Product name', constants.GENERIC_PRODUCT_NAME)}
        description={text('Product description', constants.GENERIC_PRODUCT_DESCRIPTION)}
        disabledFooterButton={boolean('Disable Footer Button', constants.GENERIC_PRODUCT_DISABLED_FOOTER_BUTTON)}
        disabledTopButton={boolean('Disable Footer Top', constants.GENERIC_PRODUCT_DISABLED_TOP_BUTTON)}
        { ...customData }
        {...actionsData}
    />
);