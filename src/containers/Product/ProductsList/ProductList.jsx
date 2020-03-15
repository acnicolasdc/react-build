import React, { useState, useEffect } from 'react'
import { ListContainer, LoaderContainer } from './styles';

function ProductsList({ Item, Spinner }) {
    const [isLoading, setIsLoading] = useState(false);
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() =>{
            setProductsList([0,1,2,3,4]);
            setIsLoading(false);
        },1000);
    }, []);

    const _getAllProducts = () => productsList.map(product => (
            <div className="list-element" key={product}>
                <Item />
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
