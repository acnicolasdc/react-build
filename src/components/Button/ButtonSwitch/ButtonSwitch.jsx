import React from 'react';
import { ButtonSwitchContainer } from './styles';

function Switch ({ onClick: handleOnclick, IconLeft, IconRight}) {
    return (
        <ButtonSwitchContainer onClick={handleOnclick}>
            <IconLeft/>
            <IconRight/>
        </ButtonSwitchContainer>
    );
}

export default Switch;
