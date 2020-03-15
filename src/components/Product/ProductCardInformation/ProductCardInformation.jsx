import React from 'react'
import { CardContainer } from './styles';

const ProductCardInformation = ({ image, name, description, topButton: TopButton, footerButton:FooterButton }) => {
    return (
        <CardContainer>
            <div className="relative-button">
                <TopButton size='50px'/>
            </div>
            <h1>{ name }</h1>
            <img src={ image } alt={ name } />
            <p>{ description }</p>
            <div className="footer-button">
                <FooterButton />
            </div>
        </CardContainer>
    )
}

export default ProductCardInformation;
