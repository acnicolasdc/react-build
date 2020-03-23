import React from 'react';
import classNames from 'classnames';
import { ButtonToggleContainer } from './styles';

function ButtonToggle ({ isToggle, onClick: handleOnClick, Icon, ...restProps }) {
    const iconClass = classNames(['icon_toggle', { '-active':isToggle }]);
    return (
        <ButtonToggleContainer onClick={(e)=>{
            e.stopPropagation();
            handleOnClick();
        }}
        {...restProps} //in this line we pass the theme provider
        toggle={isToggle}>
            <Icon className={iconClass}/>
        </ButtonToggleContainer>
    );
}

export default ButtonToggle;
