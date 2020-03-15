import React from 'react'
import GlobalHeartButton from '../../Global/GlobalHeartButton';
import GlobalAddToCartButton from '../../Global/GlobalAddToCartButton';
import { CardContainer } from './styles';

const ProductCardInformation = ({ image, name, description }) => {
    return (
        <CardContainer>
            <div className="relative-button">
                <GlobalHeartButton size='50px'/>
            </div>
            <h1>{ name }</h1>
            <img src={ image } alt={ name } />
            <p>{ description }</p>
            <div className="footer-button">
                <GlobalAddToCartButton />
            </div>
        </CardContainer>
    )
}

export default ProductCardInformation;
