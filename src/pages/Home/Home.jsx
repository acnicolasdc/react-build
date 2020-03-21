import React, { useContext } from 'react';
import ButtonSwitch from 'components/Button/ButtonSwitch';
import ProductsList from 'containers/Product/ProductsList';
import { ThemeContext } from 'theme/index';

const Home = (props) => {
    const { dark, toggle } = useContext(ThemeContext);
    console.log(dark)
    return (
        <div>
            <p>Welcome to Soffa</p>
            <ProductsList />
            <ButtonSwitch />
        </div>
    )
}
export default Home;
