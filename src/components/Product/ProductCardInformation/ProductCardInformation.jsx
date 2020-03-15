import React from 'react';
import classNames from 'classnames';
import { CardContainer } from './styles';

const ProductCardInformation = ({ image, name, description, TopButton, FooterButton, disabledFooterButton, disabledTopButton }) => {
    const topButtonClasses = classNames('relative-button', {'hidden':disabledTopButton});
    const footerButtonClasses = classNames('footer-button', {'hidden':disabledFooterButton});
    return (
        <CardContainer>
            <div className={ topButtonClasses }>
                <TopButton size={50}/>
            </div>
            <h1>{ name }</h1>
            <img src={ image } alt={ name } />
            <p>{ description }</p>
            <div className={ footerButtonClasses }>
                <FooterButton />
            </div>
        </CardContainer>
    )
}

export default ProductCardInformation;
