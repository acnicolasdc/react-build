import React from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import ButtonGeneric from 'components/Button/ButtonGeneric'
import { FooterContainer } from './styles';

function Footer() {
    return (
        <FooterContainer>
            <ButtonGeneric
                title='@acnicolasdc'
                Icon={IoLogoOctocat}
            />
        </FooterContainer>
    )
}

export default Footer;
