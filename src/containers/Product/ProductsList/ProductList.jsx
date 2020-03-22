import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { ListContainer, LoaderContainer } from './styles';

function ProductsList({ Item, Spinner }) {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() =>{
            setProductsList([0,1,2,3,4]);
            setIsLoading(false);
        },1000);
    }, []);
    const _goToOther = () => {
        history.push('/about');
    }
    const _getAllProducts = () => productsList.map(product => (
            <div className="list-element" key={product}>
                <Item onClick={_goToOther}/>
            </div>
        )
    );

    return (
        isLoading?
            <LoaderContainer>
                <Spinner />
            </LoaderContainer>
        :
            <ListContainer>
                {_getAllProducts()}
            </ListContainer>
    )
}
export default ProductsList;
