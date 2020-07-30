import React from 'react';
import { AiFillApple } from "react-icons/ai";
import { Root } from './styles';

const CardRadioOption = (props) => {
    return (
        <Root {...props}>
            <AiFillApple size={30}/>
        </Root>
    )
}

export default CardRadioOption
