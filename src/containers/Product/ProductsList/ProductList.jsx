import React, { useState, useEffect } from 'react';
import { ListContainer, LoaderContainer } from './styles';

function ProductsList({ Item, Spinner }) {
    const [isLoading, setIsLoading] = useState(false);
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() =>{
            setProductsList([0,1,2,3,4,5,6,7]);
            setIsLoading(false);
        },500);
    }, []);
    const _getAllProducts = () => productsList.map(product => (
            <Item key={product}/>
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
