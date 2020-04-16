import React from 'react';
import classNames from 'classnames';
import { CardContainer } from './styles';

const ProductCardInformation = ({ image, name, description, TopButton, FooterButton, disabledFooterButton, disabledTopButton,
    onClick:handleOnClickCard }) => {

    const topButtonClasses = classNames('relative-button', {'hidden':disabledTopButton});
    const footerButtonClasses = classNames('footer-button', {'hidden':disabledFooterButton});

    return (
        <CardContainer onClick={handleOnClickCard}>
            <div className={ topButtonClasses }>
                <TopButton/>
            </div>
            <h1 className='product-title'>{ name }</h1>
            <div className='img-container'>
                <img src={ image } alt={ name } />
            </div>
            <p className='product-description'>{ description }</p>
            <div className={ footerButtonClasses }>
                <FooterButton/>
            </div>
        </CardContainer>
    )
}

export default ProductCardInformation;
