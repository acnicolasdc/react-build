import React, { useContext } from 'react';
import ProductDetail from '../../containers/Product/ProductDetail';
import ThemeContext from '../../ThemeContext';

const AboutProduct = (props) => {
    return (
        <div>
            <p>About iPhone</p>
            <ProductDetail />
        </div>
    )
}
export default AboutProduct;
