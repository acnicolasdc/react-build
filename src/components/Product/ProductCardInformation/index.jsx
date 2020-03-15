import React from 'react'
import GlobalHeartButton from '../../Global/GlobalHeartButton';
import GlobalAddToCartButton from '../../Global/GlobalAddToCartButton';
import { CardContainer } from './styles';
import CONST from './utils/const.js'

const ProductCardInformation = ({ image, name, description }) => {
    return (
        <CardContainer>
            <div className="relative-button">
                <GlobalHeartButton size='50px'/>
            </div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
            <div className="footer-button">
                <GlobalAddToCartButton />
            </div>
        </CardContainer>
    )
}

ProductCardInformation.defaultProps = {
    image: CONST.GENERIC_PRODUCT_IMAGE,
    name: CONST.GENERIC_PRODUCT_NAME,
    description: CONST.GENERIC_PRODUCT_DESCRIPTION
}

export default ProductCardInformation;
