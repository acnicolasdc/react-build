import React from 'react';
import classNames from 'classnames';
import { ButtonToggleContainer } from './styles';

function ButtonToggle ({ isToggle, onClick: handleOnClick, Icon }) {
    const iconClass = classNames(['icon_toggle', { '-active':isToggle }]);
    return (
        <ButtonToggleContainer onClick={(e)=>{
            e.stopPropagation();
            handleOnClick();
        }}
        toggle={isToggle}>
            <Icon className={iconClass}/>
        </ButtonToggleContainer>
    );
}

export default ButtonToggle;
