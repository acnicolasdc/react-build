import React from 'react';
import classNames from 'classnames';
import { ButtonSwitchContainer } from './styles';

function Switch ({ theme: themeProvider, isToggle, onClick: handleOnClick, IconLeft, IconRight}) {
    const leftClass = classNames(['icon', { '-active_left':isToggle }]);
    const rightClass = classNames(['icon', { '-active_right': !isToggle }]);
    return (
        <ButtonSwitchContainer
            onClick={(e)=>{
                e.stopPropagation();
                handleOnClick();
            }}
            theme={ themeProvider }>
            <IconLeft className={ leftClass }/>
            <IconRight className={ rightClass }/>
        </ButtonSwitchContainer>
    );
}

export default Switch;
