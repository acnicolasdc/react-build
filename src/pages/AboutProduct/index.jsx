import React from 'react';
import { useRouteMatch } from "react-router-dom";
import ProductDetail from 'containers/Product/ProductDetail';

const AboutProduct = (props) => {
    let match = useRouteMatch();
    console.log(match)
    return (
        <div>
            <p>About iPhone</p>
            <ProductDetail />
            <p>About iPhone</p>
        </div>
    )
}
export default AboutProduct;
