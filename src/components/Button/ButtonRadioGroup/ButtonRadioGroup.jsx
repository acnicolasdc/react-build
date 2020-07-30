import React, { useCallback } from 'react'
import * as defaultComponents from './styles';

function getComponents(defaultComponents, overrides){
    return Object.keys(defaultComponents).reduce((acc, name)=>{
        const override = overrides[name] || {};
        acc[name] = {
            component: override.component || defaultComponents[name],
            props: { $style: override.style, ...override.props},
        };
        return acc;
    }, {})
}

const ButtonRadioGroup = ({ overrides, options, check, onChange}) => {
    const {
        RadioContainer: { component: RadioContainer, props: radioContainerProps},
        RadioButtonLabel: { component: RadioButtonLabel, props: radioButtonLabelProps},
        RadioButton: { component: RadioButton, props: radioButtonProps},
        Root: { component: Root, props: rootProps}
    } = useCallback(getComponents(defaultComponents, overrides),[overrides])
    return (
        <Root {...rootProps}>
            {options?.map(({ name, value, option})=>(
                <RadioContainer key={value} {...radioContainerProps}>
                        <RadioButton
                            $name={name}
                            $value={value}
                            $isChecked={check === name}
                            onClick={()=> onChange(name)}
                            {...radioButtonProps}
                        />
                    <RadioButtonLabel {...radioButtonLabelProps}>{option}</RadioButtonLabel>
                </RadioContainer>
            ))}
        </Root>
    )
}

ButtonRadioGroup.defaultProps = {
    overrides:{},
    options:[{ name:'defaultRadio', value:'defaultValue', option:'House'}],
}

export default React.memo(ButtonRadioGroup)
