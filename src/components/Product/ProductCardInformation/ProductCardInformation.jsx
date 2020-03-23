import React from 'react';
import classNames from 'classnames';
import { CardContainer } from './styles';

const ProductCardInformation = ({ theme: themeProvider, image, name, description, TopButton, FooterButton, disabledFooterButton, disabledTopButton,
    onClickCard:handleOnClickCard, onClickButtonFooter:handleOnClickButtonFooter, onClickButtonTop:handleOnClickButtonTop, isSelected }) => {

    const topButtonClasses = classNames('relative-button', {'hidden':disabledTopButton});
    const footerButtonClasses = classNames('footer-button', {'hidden':disabledFooterButton});

    return (
        <CardContainer onClick={handleOnClickCard} theme={themeProvider}>
            <div className={ topButtonClasses }>
                <TopButton size={50} onClick={handleOnClickButtonTop} isSelected={isSelected}/>
            </div>
            <h1>{ name }</h1>
            <img src={ image } alt={ name } />
            <p>{ description }</p>
            <div className={ footerButtonClasses }>
                <FooterButton title='Add to Cart' onClick={handleOnClickButtonFooter}/>
            </div>
        </CardContainer>
    )
}

export default ProductCardInformation;
