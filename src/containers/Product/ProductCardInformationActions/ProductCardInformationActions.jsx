import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function ProductCardInformationActions({Item}) {
    const [ like, setLike ] = useState(false);
    let history = useHistory();
    const _goToOther = () => {
        history.push('/about');
    }
    const _cardLike = () => {
        setLike(!like);
    }
    const _cardAddToCart = () => {
        console.log('amigo');
    }
    return (
        <Item
            onClick={_goToOther}
            TopButton={()=> <Item.TopButton onClick={_cardLike} isSelected={like}/>}
            FooterButton={()=> <Item.FooterButton onClick={_cardAddToCart}/>}
        />
    )
}

export default ProductCardInformationActions;
