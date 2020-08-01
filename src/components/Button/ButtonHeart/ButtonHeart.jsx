import React from 'react'
import { ButtonHeartContainer } from './styles';

const ButtonHeart = ({ onClick:handleOnClick, Icon, IconSelected, size, isSelected }) => {
    return (
        <ButtonHeartContainer size={size}
            onClick={(e)=>{
                e.stopPropagation();
                handleOnClick();
            }}>
            { isSelected ?<IconSelected className='heart -heart_active'/>:<Icon className='heart'/> }
        </ButtonHeartContainer>
    )
}

export default ButtonHeart;
