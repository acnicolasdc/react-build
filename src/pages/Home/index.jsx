import React, { useContext } from 'react';
import ProductsList from 'containers/Product/ProductsList';
import ThemeContext from '../../ThemeContext';

const Home = (props) => {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
            <p>Welcome to Soffa</p>
            <ProductsList />
        </div>
    )
}
export default Home;
