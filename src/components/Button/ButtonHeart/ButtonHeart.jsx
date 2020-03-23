import React from 'react'
import { ButtonHeartContainer } from './styles';

const ButtonHeart = ({ onClick:handleOnClick, Icon, IconSelected, size, isSelected, ...restProps }) => {
    return (
        <ButtonHeartContainer size={size} {...restProps} //in this line we pass the theme provider
            onClick={(e)=>{
                e.stopPropagation();
                handleOnClick();
            }}>
            { isSelected ?<IconSelected className='heart -heart_active'/>:<Icon className='heart'/> }
        </ButtonHeartContainer>
    )
}

export default ButtonHeart;
