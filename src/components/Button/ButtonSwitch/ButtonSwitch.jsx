import React from 'react';
import classNames from 'classnames';
import { ButtonSwitchContainer } from './styles';

function Switch ({ isToggle, onClick: handleOnClick, IconLeft, IconRight, ...restProps }) {
    const leftClass = classNames(['icon', { '-active_left': isToggle }]);
    const rightClass = classNames(['icon', { '-active_right': !isToggle }]);
    return (
        <ButtonSwitchContainer
            onClick={(e)=>{
                e.stopPropagation();
                handleOnClick();
            }}
            {...restProps} //in this line we pass the theme provider
            >
            <IconLeft className={ leftClass }/>
            <IconRight className={ rightClass }/>
        </ButtonSwitchContainer>
    );
}

export default Switch;
