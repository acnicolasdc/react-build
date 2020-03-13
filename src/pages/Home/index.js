import React, { useContext } from 'react';
import ProductCardInformation from '../../components/Product/ProductCardInformation';
import ThemeContext from '../../ThemeContext';

const Home = (props) => {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
            <p>Welcome to context</p>
            <ProductCardInformation />
        </div>
    )
}
export default Home;
