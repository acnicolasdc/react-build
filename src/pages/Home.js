import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext';

function Home(props) {
    const theme = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
            <p>Welcome to context</p>
        </div>
    )
}
export default Home;
