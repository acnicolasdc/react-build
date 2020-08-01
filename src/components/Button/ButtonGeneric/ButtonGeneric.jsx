import React from 'react';
import classNames from 'classnames';
import { ButtonGenericContainer } from './styles';

const ButtonGeneric = ({ onClick, title, animation, disableIcon, Icon }) => {
    const iconClass = classNames(['button_icon', { '-animation': animation }]);
    return (
        <ButtonGenericContainer
            onClick={(e)=>{
                e.stopPropagation();
                onClick();
            }}>
            <p>{title}</p>
            {!disableIcon&&<Icon className={iconClass} />}
        </ButtonGenericContainer>
    )
}

export default ButtonGeneric;
