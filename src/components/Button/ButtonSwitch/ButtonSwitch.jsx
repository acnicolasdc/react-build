import React from 'react';
import classNames from 'classnames';
import { ButtonSwitchContainer } from './styles';

function ButtonSwitch ({ isSwitch, onClick: handleOnClick, IconLeft, IconRight }) {
    const leftClass = classNames(['icon', { '-active_left': isSwitch }]);
    const rightClass = classNames(['icon', { '-active_right': !isSwitch }]);
    return (
        <ButtonSwitchContainer
            onClick={(e)=>{
                e.stopPropagation();
                handleOnClick();
            }}>
            <IconLeft className={ leftClass }/>
            <IconRight className={ rightClass }/>
        </ButtonSwitchContainer>
    );
}

export default ButtonSwitch;
